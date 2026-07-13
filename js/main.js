/* Valerie Tian — portfolio interactions (GSAP + ScrollTrigger) */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = typeof window.gsap !== 'undefined';

  if (hasGsap && typeof window.ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ---------- Safety net: never leave the page hidden ---------- */
  function forceShow() {
    document.body.classList.remove('is-loading');
    var loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    var hc = document.getElementById('hero-content');
    if (hc && window.scrollY < 10) { hc.style.opacity = 1; hc.style.transform = 'none'; }
    document.querySelectorAll('.hero-background .shape').forEach(function (s) {
      s.style.opacity = 1;
    });
    document.querySelectorAll('.shape-label').forEach(function (l) { l.style.opacity = 1; });
  }
  if (!hasGsap || prefersReducedMotion) {
    forceShow();
  }
  setTimeout(function () {
    if (document.body.classList.contains('is-loading')) forceShow();
  }, 6000);

  /* ---------- Cursor dot ---------- */
  function initCursorDot() {
    if (window.matchMedia('(hover: none)').matches) return;
    var dot = document.createElement('div');
    dot.className = 'cursor-dot is-hidden';
    document.body.appendChild(dot);

    var x = 0, y = 0;
    document.addEventListener('mousemove', function (e) {
      x = e.clientX; y = e.clientY;
      dot.classList.remove('is-hidden');
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
    });
    document.addEventListener('mousedown', function () { dot.classList.add('is-pressed'); });
    document.addEventListener('mouseup', function () { dot.classList.remove('is-pressed'); });
    document.addEventListener('mouseleave', function () { dot.classList.add('is-hidden'); });
  }

  /* ---------- Loader ---------- */
  function initLoader(onDone) {
    var loader = document.getElementById('loader');
    if (!loader || !hasGsap || prefersReducedMotion) {
      forceShow();
      if (onDone) onDone();
      return;
    }

    var fill = document.getElementById('loader-fill');
    var text = document.getElementById('loader-text');
    var tl = gsap.timeline({
      onComplete: function () {
        document.body.classList.remove('is-loading');
        loader.style.display = 'none';
        if (onDone) onDone();
      }
    });

    tl.to(fill, { clipPath: 'inset(0 0% 0 0)', duration: 1.3, ease: 'power2.inOut' }, 0.2)
      .to(text, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 0.5)
      .call(function () { document.body.classList.remove('is-loading'); }, null, 2.0)
      .to(loader, { yPercent: -100, duration: 0.9, ease: 'power3.inOut' }, 2.0);
  }

  /* ---------- Hero shapes: explode intro + float ---------- */
  function initHero() {
    var bg = document.getElementById('hero-background');
    var content = document.getElementById('hero-content');
    if (!bg || !hasGsap) return;

    var circleLeft = document.getElementById('shape-circle-left');
    var circleRight = document.getElementById('shape-circle-right');
    var circleBottom = document.getElementById('shape-circle-bottom');
    var starburst = document.getElementById('shape-starburst');
    var astrix = document.getElementById('shape-astrix');
    var leaf = document.getElementById('shape-leaf');
    var labels = bg.querySelectorAll('.shape-label');
    var shapes = [circleLeft, circleRight, circleBottom, starburst, astrix, leaf].filter(Boolean);

    if (prefersReducedMotion) return;

    /* intro: scale in from center with stagger */
    gsap.set(shapes, { scale: 0, opacity: 0, transformOrigin: '50% 50%' });
    gsap.set(labels, { opacity: 0 });
    gsap.set(content, { opacity: 0, y: 30 });

    var intro = gsap.timeline({ delay: 2.2 });
    intro
      .fromTo(content, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out' }, 0)
      .fromTo(shapes, { scale: 0, opacity: 0 }, {
        scale: 1, opacity: 1,
        duration: 1.2,
        ease: 'back.out(1.4)',
        stagger: 0.12
      }, 0.2)
      .fromTo(labels, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out' }, 1.2);

    /* Resilience: the intro is rAF-driven, which browsers freeze in
       background tabs and skip on bfcache restores — leaving the hero
       stuck invisible. Force the end state whenever that could happen. */
    var introDone = false;
    intro.eventCallback('onComplete', function () { introDone = true; });
    function finishIntroNow() {
      if (introDone) return;
      introDone = true;
      intro.progress(1);
    }
    setTimeout(finishIntroNow, 4800);
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden && performance.now() > 4000) finishIntroNow();
    });
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        document.body.classList.remove('is-loading');
        var loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
        finishIntroNow();
        if (window.scrollY < 10) gsap.set(content, { opacity: 1, y: 0 });
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }
    });

    /* gentle perpetual float */
    shapes.forEach(function (shape, i) {
      gsap.to(shape, {
        y: (i % 2 === 0 ? -18 : 14),
        rotation: (i % 2 === 0 ? 3 : -3),
        duration: 5 + i,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 3.5
      });
    });

    /* slow spin for starburst + astrix */
    if (starburst) gsap.to(starburst.querySelector('svg'), { rotation: 360, duration: 60, repeat: -1, ease: 'none' });
    if (astrix) gsap.to(astrix.querySelector('svg'), { rotation: -360, duration: 40, repeat: -1, ease: 'none' });

    /* scroll: hero content + shapes fade/drift away */
    if (typeof ScrollTrigger !== 'undefined') {
      /* Deterministic set() on every scroll tick — self-heals any stuck
         opacity state (fixes hero going blank after scrolling back up). */
      ScrollTrigger.create({
        trigger: '.hero',
        start: 'top top',
        end: '60% top',
        onUpdate: function (self) {
          gsap.set(content, { opacity: 1 - self.progress, y: -80 * self.progress });
        },
        onLeaveBack: function () { gsap.set(content, { opacity: 1, y: 0 }); }
      });
      ScrollTrigger.create({
        trigger: '.hero',
        start: '20% top',
        end: 'bottom top',
        onUpdate: function (self) {
          gsap.set(bg, { opacity: 1 - self.progress });
        },
        onLeaveBack: function () { gsap.set(bg, { opacity: 1 }); }
      });
      shapes.forEach(function (shape, i) {
        gsap.fromTo(shape, { xPercent: 0 }, {
          xPercent: (i % 2 === 0 ? -30 : 30),
          immediateRender: false,
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }

    /* mouse parallax */
    var strength = [14, 14, 10, 26, 32, 20];
    document.addEventListener('mousemove', function (e) {
      var nx = (e.clientX / window.innerWidth) - 0.5;
      var ny = (e.clientY / window.innerHeight) - 0.5;
      shapes.forEach(function (shape, i) {
        gsap.to(shape, {
          x: nx * strength[i],
          duration: 1.2,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
    });
  }

  /* ---------- Process discs: stack in one by one on scroll ---------- */

  function initProcessDisks() {
    var disks = document.querySelectorAll('.process__disk');
    if (!disks.length) return;
    if (!hasGsap || typeof ScrollTrigger === 'undefined' || prefersReducedMotion) return;
    disks.forEach(function (disk) {
      gsap.fromTo(disk, { opacity: 0, y: -90 }, {
        opacity: 1, y: 0,
        ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: disk,
          start: 'top 94%',
          end: 'top 68%',
          scrub: true
        }
      });
    });
  }

  /* ---------- Click spark (vanilla port of React Bits <ClickSpark/>) ---------- */

  function initClickSpark() {
    var sparkColor = '#3A4A16';
    var sparkSize = 10;
    var sparkRadius = 18;
    var sparkCount = 8;
    var duration = 450;
    var extraScale = 1.0;

    var canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9998;';
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    var sparks = [];
    var rafId = null;

    function easeOut(t) { return t * (2 - t); }

    function draw(timestamp) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      sparks = sparks.filter(function (spark) {
        var elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) return false;
        var eased = easeOut(elapsed / duration);
        var distance = eased * sparkRadius * extraScale;
        var lineLength = sparkSize * (1 - eased);
        var x1 = spark.x + distance * Math.cos(spark.angle);
        var y1 = spark.y + distance * Math.sin(spark.angle);
        var x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        var y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);
        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        return true;
      });
      if (sparks.length) {
        rafId = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        rafId = null;
      }
    }

    document.addEventListener('click', function (e) {
      var interactive = e.target.closest(
        'a, button, .work-card, .mini, .ss-card img, input, select, textarea, [role="button"]'
      );
      if (!interactive) return;
      var now = performance.now();
      for (var i = 0; i < sparkCount; i++) {
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          angle: (2 * Math.PI * i) / sparkCount,
          startTime: now
        });
      }
      if (!rafId) rafId = requestAnimationFrame(draw);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveals() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!hasGsap || typeof ScrollTrigger === 'undefined' || prefersReducedMotion) {
      els.forEach(function (el) { el.style.opacity = 1; el.style.transform = 'none'; });
      return;
    }
    els.forEach(function (el) {
      gsap.to(el, {
        opacity: 1, y: 0,
        duration: 1.0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true
        }
      });
    });
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initCursorDot();
    initClickSpark();
    if (document.getElementById('loader')) {
      initLoader();
      initHero();
    } else {
      document.body.classList.remove('is-loading');
    }
    initReveals();
    initProcessDisks();
  });
})();
