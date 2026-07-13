/* Work section: featured cases, more-work strip, academic projects,
   overlay case-study sheet, stacked-slide gallery, lightbox. */

(function () {
  'use strict';

  var GRAD = {
    blue: 'radial-gradient(circle at 32% 26%, #c1e4f7 0%, #a8d8ea 40%, #c084d1 100%)',
    green: 'radial-gradient(circle at 32% 26%, #fff9c4 0%, #c5e1a5 45%, #3f8f4f 100%)',
    pink: 'radial-gradient(circle at 32% 26%, #ffd9c9 0%, #e8a5c4 45%, #c084d1 100%)',
    orange: 'radial-gradient(circle at 32% 26%, #fff9c4 0%, #ff6b5a 55%, #f46732 100%)',
    lilac: 'radial-gradient(circle at 32% 26%, #dac6eb 0%, #c084d1 55%, #a8d8ea 100%)',
    sage: 'radial-gradient(circle at 32% 26%, #c5e1a5 0%, #93dd89 50%, #a8d8ea 100%)'
  };

  /* ---------------- Featured case studies ---------------- */

  var featured = [
    {
      cover: 'assets/work/cover_ucla-sf.jpg',
      metric: '+30–320%', orb: 'green',
      tags: ['Cross-Market Strategy', 'Localization', 'Social Ownership'],
      title: "Owning two U.S. brands' Chinese social presence",
      statement: 'Ran UCLA Health and San Francisco Travel end to end across WeChat, Weibo, and Douyin — rebuilding how their content is localized, distributed, and measured.',
      ministats: [['+30–320%', 'views'], ['20%', 'paid efficiency'], ['25%', 'LinkedIn CTR']],
      intro: 'UCLA Health and San Francisco Travel had strong equity in English and almost no traction with Chinese-speaking audiences. Over seven months I owned their Chinese social presence end to end and turned that gap into a measurable channel.',
      meta: [['Role', 'Client Engagement Intern'], ['Timeline', 'Oct 2025 – May 2026'], ['Clients', 'UCLA Health · SF Travel'], ['Location', 'Santa Monica, CA']],
      bigstats: [['+30–320%', 'Increase in content views'], ['20%', 'Paid media efficiency gain'], ['25%', 'LinkedIn CTR improvement']],
      challenge: 'Both brands were being translated, not localized. U.S. healthcare and travel content leans on research findings and institutional achievement, but Chinese social audiences engage with practical takeaways, lifestyle relevance, and signals of accessibility and trust. Reach stayed flat and paid spend leaked efficiency.',
      did: [
        ['Ran the accounts end to end.', 'Topic selection, localization, WeChat layout design, publishing, and coordinating PR and media buys within budget — across WeChat, Weibo, and Douyin.'],
        ['Built a localization framework, not a translation guide.', 'I reframed dense U.S. medical and travel content into practical, lifestyle-relevant posts that pair knowledge with a solution — and surface the accessibility and international-patient support Chinese audiences actually care about.'],
        ["Launched a client's LinkedIn international page from zero.", 'Off a competitor analysis of how peer institutions split international vs. main-page content, so the new page had a clear job to do.'],
        ['Turned reporting into strategy.', 'Monthly and quarterly reports on impressions, engagement, and content themes fed concrete changes; I also built the yearly content calendar, website-renewal research, and monthly creative posters.'],
        ['Directed AI rather than followed it.', "On a Destination Vancouver market study I caught the AI drifting toward 'why visit Vancouver' and redirected it to the client's real question — 'why target Japan and Korea.'"]
      ],
      results: [
        ['Content views rose 30–320%', ' across the two brands.'],
        ['Paid media efficiency improved 20%', ' and LinkedIn CTR improved 25% through iterative A/B testing.'],
        ['A repeatable reporting system', ' that showed what resonated and where to optimize — turning localization from one-off deliverables into a compounding channel.']
      ],
      ai: 'AI compressed research and first-draft localization from days to hours. The cultural judgment, the framework, and catching when AI answered the wrong question stayed mine.'
    },
    {
      cover: 'assets/work/cover_lamer.jpg',
      coverPos: 'center 52%',
      metric: 'La Mer × KOL', orb: 'pink',
      tags: ['Brand Strategy', 'KOL / Creator Strategy', 'Luxury Beauty'],
      title: 'Luxury creator strategy, built from audience emotion',
      statement: "Built La Mer's Wave 3 creator strategy on Xiaohongshu — four angles connecting real emotion to the brand — and won an internal pitch by designing a KOL narrative formula from scratch.",
      ministats: [['4', 'content angles'], ['Won', 'internal pitch'], ['Wave 3', 'fully owned']],
      intro: "A KFS (Key Focus Seeding) campaign for La Mer on Xiaohongshu: develop creator directions that fit both current platform trends and La Mer's premium positioning — on-brand, but personal enough to feel real.",
      meta: [['Role', 'Client Engagement Intern'], ['Timeline', 'Oct 2025 – May 2026'], ['Client', 'La Mer · ELC'], ['Platform', 'Xiaohongshu']],
      bigstats: [['4', 'Client-approved content angles'], ['Won', 'Internal intern pitch, named best'], ['Reusable', 'Narrative + brand framework']],
      challenge: 'The hard part of a seeding campaign is translating audience insight into directions creators can realistically execute — consistent with a luxury brand, yet personal enough to feel authentic rather than an ad.',
      did: [
        ['Built the full Wave 3 strategy deck and creator brief.', "Researched emerging Rednote trends and identified four angles connecting consumer emotion to La Mer's story."],
        ['Re-read trends for what they really meant.', "I read 'Color Walk' not as being about color but about romanticizing everyday life, and reframed 'Women Growth' around resilience and self-care rather than skincare claims."],
        ['Wrote briefs creators could actually run.', 'Content structure, visual references, and messaging guidance that kept KOLs on-brand while layering in their own stories.'],
        ['Won a timed internal pitch.', 'Asked to launch La Mer influencer marketing from zero in one hour, I was publicly named best — building a KOL narrative formula (real-life hook → emotional connection → product ritual → sensory detail → visible result → soft CTA) plus a brand-attributes and visual-consistency layer.'],
        ['Used AI to analyze, then pushed it further.', 'I used AI to surface patterns in existing KOL copy, then iteratively refined prompts to pull out deeper craft — emotional authenticity, rhythm, metaphor, luxury-with-warmth tone.']
      ],
      results: [
        ['Four client-approved angles', ' and a creator brief that kept a KOL roster on-brand while preserving each voice.'],
        ['A won internal pitch', ' and a reusable narrative + brand-consistency framework — a repeatable way to brief luxury creators, not a one-off.']
      ],
      ai: 'AI accelerated research and pattern analysis; the narrative architecture, the trend re-reads, and the taste calls luxury demands were mine.'
    },
    {
      cover: 'assets/work/cover_marketcrunch.jpg',
      metric: '+350% views', orb: 'blue',
      tags: ['Growth Strategy', 'Content Systems', 'AI Tooling'],
      title: "Running an AI startup's video engine — solo",
      statement: 'Owned all short-form video across four platforms, wrote the SOP to scale it, and built an AI agent to turn fast-moving market news into on-brand scripts.',
      ministats: [['+350%', 'total views'], ['2.5x', 'organic reach'], ['500+', 'sign-ups']],
      intro: 'MarketCrunch AI is an AI investment-research platform. Financial news moves in minutes, but ideation and scriptwriting were manual. In four months I built the system — and the AI tooling — to react at the speed the topic demanded.',
      meta: [['Role', 'Growth & Strategy Analyst Intern'], ['Timeline', 'Jun – Oct 2025'], ['Channels', 'YouTube · IG · TikTok · X'], ['Location', 'San Francisco, CA']],
      bigstats: [['+350%', 'Increase in total views'], ['2.5x', 'Higher organic reach on video'], ['500+', 'Early sign-ups generated']],
      challenge: 'I was spending hours by hand turning market news into social content — finding the hook, scripting, editing. The startup had no content infrastructure and no way to react at the speed financial news moves.',
      did: [
        ['Owned the whole video operation solo.', 'Ideation, scripting, editing in CapCut, and publishing across YouTube Shorts, Instagram Reels, TikTok, and X.'],
        ['Wrote the system to outlive me.', 'A full Standard Operating Procedure — SMART goals, platform-specific optimization, weekly performance review — plus a three-platform short-form strategy.'],
        ['Built an AI agent.', "Self-taught GPTs to build a 'Hook & Script Generator' that reads a trending market story, identifies the emotional and viral trigger behind it (FOMO, fear, disbelief, humor), and drafts on-brand hooks, body, and CTAs for a trader audience."],
        ['Fed the workflow real context.', 'Audience personas, winning content patterns, brand voice, and product features — so it produced strategy, not summaries.'],
        ['Backed decisions with data.', 'Learned SQL to track which videos converted to site visits, ran a stage analysis (YouTube Shorts strongest, up to 2.2k views; X video underperforming), and self-initiated a logo redesign the founders adopted.']
      ],
      results: [
        ['350% increase in total views', ' and 2.5x higher organic reach on video.'],
        ['35% improvement in retention', ' after redesigning hooks and pacing, and 500+ early sign-ups — content became acquisition, not just awareness.'],
        ['A data-backed channel recommendation', ' to drop video-first content on X, where it consistently underperformed.']
      ],
      ai: "The strongest proof of AI fluency: I didn't just use AI, I built the tooling. The judgment — what performed, which channel to cut, the brand voice — was my analysis."
    },
    {
      cover: 'assets/work/cover_lancome.jpg',
      metric: 'Lancôme × 小宇宙', orb: 'orange',
      tags: ['Creative Direction', 'Brand Storytelling', 'Interactive'],
      title: 'An interactive article you can play like a record',
      statement: "Led Lancôme's WeChat collaboration with the Xiaoyuzhou podcast platform end to end — where every podcast clip becomes a playable vinyl record — plus weekly L'Oréal features and a Fashion Week idea leadership adopted.",
      ministats: [['Led', 'end to end'], ['Interactive', 'design'], ['Luxury', 'brand voice']],
      intro: 'Luxury beauty on Chinese social requires taste under real time pressure — and a standard WeChat article is static and easy to scroll past. My flagship project: make a Lancôme × Xiaoyuzhou (podcast platform) collaboration genuinely worth stopping for.',
      meta: [['Role', 'Account Executive Intern'], ['Timeline', 'Jun – Sep 2023'], ['Clients', "Lancôme · L'Oréal Paris"], ['Location', 'Shanghai, China']],
      bigstats: [['Solo-led', 'A flagship luxury project'], ['Original', 'Interaction design, mine'], ['Adopted', 'Fashion Week creative idea']],
      challenge: "Static articles don't earn attention from luxury audiences. I had to make a podcast collaboration feel worth stopping for — and I earned the chance to lead it solo after a strong internship run.",
      did: [
        ['Owned the flagship end to end.', 'Client meetings and brief, illustration references, and brainstorming with design, account, and copy teams — the concept, layout, copy, and pull-quotes were all mine.'],
        ['Designed the interaction.', "Every podcast segment renders as a vinyl record the reader can tap to play a signature quote — and as a serious podcast fan I could precisely pick clips that matched Lancôme's tone."],
        ["Wrote weekly L'Oréal Paris features.", "Including a summer 'City Walk' theme structured around skincare pain points across one day — designing headlines, layout, and interactive SVG in Xiumi, with QA on every mechanic and link."],
        ['Gave the client a strategy to build on.', 'A competitive livestream study tearing down MAC, YSL, Shu Uemura, Bobbi Brown and more across content, hosting, and merchandising, plus monthly and weekly competitor and performance reports.'],
        ['Became the go-to for the hardest asks.', "As the team's only international student I handled English client comms and French-client materials — including a 70–80 page company deck in 1–2 days — and pitched a Fashion Week creator idea leadership took forward."]
      ],
      results: [
        ['A shipped, genuinely novel interactive article', ' for a top luxury client, fully creatively owned.'],
        ['A livestream study', ' the client could build its own strategy on, and leadership recognition at the Fashion Week brainstorm.'],
        ['A reputation', " as the person trusted with the account's hardest, most international, most time-boxed work."]
      ],
      ai: "This card is deliberately human — it proves the creativity and interaction design are mine. It's the counterweight that makes the AI fluency on the other cards credible."
    }
  ];

  /* ---------------- More work strip ---------------- */

  var more = [
    { kicker: 'Helios · Original Concept', grad: GRAD.blue, title: 'Cyberbay — SimuCall creative campaign', body: "A campaign built entirely from my own idea and adopted as-is: a LinkedIn carousel where 'Eko,' a 3D character, slips into different professional personas at the other end of a scam call — dramatizing voice-switching attacks while staying clear, credible, and a little fun." },
    { kicker: 'Helios · Social Content', grad: GRAD.lilac, title: 'AI virtual influencer', body: "Designed monthly Instagram content — imagery direction and copy — for a company-built AI persona, keeping every post consistent with the character's aesthetic and internet-native voice." },
    { kicker: 'Helios · Insight → Strategy', grad: GRAD.sage, title: 'Travel & consumer research', body: 'Research that fed real proposals: Japanese/Korean outbound behavior and spend for Destination Vancouver, beauty shopping-trend timelines for Estée Lauder, and a pre-trip/during-trip media plan for La Mer across Kakao, Naver, Toss, and geo-fenced push.' },
    { kicker: 'Helios · Reporting', grad: GRAD.green, title: 'Campaign performance storytelling', body: 'Turned raw campaign data into clear, honest, client-ready highlights — including a La Mer Korea report where impressions and clicks massively overdelivered while CTR came in slightly under, framed accurately but constructively. Praised by leadership.' },
    { kicker: 'CCE · Brand Strategy', grad: GRAD.pink, title: 'Livestream competitive study', body: "A fast, multi-dimensional teardown of MAC, YSL, Lancôme, Shu Uemura, Bobbi Brown and top domestic brands' livestreams — décor, hosting, activities, merchandising — that gave L'Oréal a structured basis for its own makeup-livestream strategy." }
  ];

  /* ---------------- Academic & experimental ---------------- */

  var school = [
    {
      cover: 'assets/work/iphone_cover.jpg',
      grad: GRAD.orange,
      tags: ['Data Mining', 'Sentiment Analysis', 'AI Campaign'],
      title: 'iPhone 17 post-launch perception',
      statement: 'Owned data collection, insight, and the AI-prompted campaign for a post-launch study — mining 65K+ mentions into a deployable go-to-market story.',
      role: 'USC PR523 · My role: data collection, recommendations & the AI-prompted campaign',
      intro: 'A study of audience sentiment toward the iPhone 17’s creativity and innovation. I owned the data pipeline, the strategic recommendations, and the AI-prompted campaign that turned findings into action — the full loop from raw data to deployable strategy.',
      challenge: 'After a major launch, the conversation is loud and noisy. There was no structured way to separate genuine audience pain points from surface chatter across tens of thousands of mentions — or to turn them into a campaign a brand could act on.',
      did: [
        ['Collected the data.', 'Used Mention to pull two timeframes of iPhone 17 conversation — 41,754 mentions (month 1) and 25,528 (month 2) — across news, X, YouTube, Reddit and forums, designing focused search queries to keep the dataset relevant and bias-free.'],
        ['Turned data into insight.', "Worked through word clouds, Ekman emotion profiling, VADER sentiment, and LDA topic modeling in Orange, then used ChatGPT to code and quantify content — surfacing the consistent core pain point: function specs + value ('Is it good, should I upgrade?' evolving into 'How is it performing, and does that justify buying?')."],
        ['Wrote the recommendations.', 'Translated findings into three strategic moves: prioritize USP/ecosystem-centered campaigns, implement a localized go-to-market strategy, and address competitive narratives with real-world use over spec-sheet wars.'],
        ['Built the AI-prompted campaign.', "Designed 'iPhone 17. Life Flows' — a product-first, UGC-led counter to Samsung's 'Switcher Diary.' I engineered the prompts iteratively (original → refined → final), directing the AI to drop influencers for 4–5 curated real Apple loyalists and anchor on the product, then built the collaboration profiles (Creator, Student, Traveller)."]
      ],
      results: [
        ['A clean sentiment pipeline', ' that converted 65K+ mentions into a clear, evidence-based pain-point map.'],
        ['Three actionable GTM recommendations', ' grounded in platform-level emotional and topic data.'],
        ['A deployable AI-prompted campaign', ' — product-first storytelling, curated UGC, and creator profiles — ready to localize by platform and persona.']
      ],
      ai: 'This shows the loop I care about: I directed the model through several prompt iterations, decided what to keep and cut (curated UGC over influencers, product-first over brand-first), and turned its output into a campaign that holds together. Integrating data mining, strategic translation, and AI-directed creative is exactly the range a strategist role needs — from raw data to campaign.',
      images: [
        ['assets/work/istack_1.jpg', 'Data collection — Mention: two timeframes, 41,754 + 25,528 mentions across X, YouTube, TikTok, Reddit and more. I designed the search queries and built the dataset.', false],
        ['assets/work/istack_2.jpg', 'Content analysis via ChatGPT — Topic 5 (reviews, design & performance; 9,471 mentions). Team analysis that fed my recommendations — I know the method but didn’t own this part.', true],
        ['assets/work/istack_3.jpg', 'Recommendation — prioritize USP / ecosystem-centered campaigns, my strategic read of the data.', false],
        ['assets/work/istack_4.jpg', "AI-prompted campaign — my original prompt engineering the counter to Samsung's 'Switcher Diary.'", false],
        ['assets/work/istack_5.jpg', 'Refined to the final prompt — I dropped influencers for curated UGC and anchored everything on iPhone 17.', false],
        ['assets/work/istack_6.jpg', "The output — 'iPhone 17. Life Flows,' a product-first, UGC-led campaign built from the sentiment insights.", false],
        ['assets/work/istack_7.jpg', 'Collaboration profile 1 — The Creator: a multi-device workflow I designed to show ecosystem continuity.', false],
        ['assets/work/istack_8.jpg', 'Collaboration profile 3 — The Traveller: everyday reliability as the anti-switching proof point.', false]
      ]
    },
    {
      cover: 'assets/work/bm_cover.jpg',
      grad: GRAD.sage,
      tags: ['Owned Media', 'Cultural Strategy', 'Community & Influencer'],
      title: 'Black Myth: Zhong Kui — global GTM',
      statement: "Owned the owned/earned-media and cultural creative strategy for a global game launch — turning an unknown hero into a 'cultural discovery' arc across six channels and a three-wave influencer plan.",
      role: 'Global marketing plan · My role: owned media, cultural creative, social, community, influencer, PR & SEO',
      intro: 'A global marketing plan for Black Myth: Zhong Kui, an unreleased AAA game. I led the owned-media and cultural positioning — how to amplify the game on every platform, approach community and influencers, and position PR and SEO around a culture-first story.',
      challenge: "Zhong Kui lacks Sun Wukong's global name recognition. The strategic problem: how do you market a premium game whose hero and mythology most of the world has never heard of — without a persuasion gap starving awareness?",
      did: [
        ['Reframed the weakness as the hook.', "Built the 'Not just a game — a cultural discovery' creative axis: a four-stage arc (Reveal the mythology → the Verdict is yours → Invite into the world → Bridge from Wukong) that leads with mythology and makes the game the destination."],
        ['Designed a six-channel social strategy.', 'Mapped each platform to a cultural pillar — Douyin/TikTok and Weibo build heat in China; Reddit/X, YouTube, Bilibili, and WeChat/Xiaohongshu convert it globally — each with its own content role, KPI, and cadence.'],
        ['Structured community & a three-wave influencer plan.', 'Cultural-proximity-first: Wave 1 Chinese-mythology channels (zero persuasion gap), Wave 2 souls-like reviewers, Wave 3 next-gen tech showcases — plus a bilingual Discord, CN-player cultural ambassadors, and an earned-media flywheel piping curated CN content to global channels.'],
        ['Positioned PR and SEO around culture.', "Two-framing PR (cultural-authority angle for CN press, gameplay-first for international) and an SEM/SEO plan splitting China (Baidu, WeChat Search) and global (Google/Bing) around keywords like 'Who is Zhong Kui,' with a website culture column built for curiosity-driven search traffic."]
      ],
      results: [
        ['A culture-first GTM narrative', " that converts Zhong Kui's low recognition into a discovery arc — the marketing hook, not the risk."],
        ['A complete owned/earned-media system', ' — six platform playbooks, a three-wave influencer model, community architecture, and a China-to-global content flywheel.'],
        ['PR and SEO positioning', ' that educates the market before paid media has to.']
      ],
      ai: "Cultural nuance can't be outsourced — this is strategy grounded in real folklore and platform behavior. Where AI helped it was competitive research and drafting speed; the cultural read and the discovery-arc concept were mine. It's the card that shows I can carry a large, multi-channel GTM and find the one insight that reframes the whole campaign.",
      images: [
        ['assets/work/bmstack_1.jpg', 'Section 4 — the tactical go-to-market plan I led across paid, owned, and earned media.', false],
        ['assets/work/bmstack_2.jpg', 'Owned-media creative assets — the trailer slate plus the domestic vs. international creative axes and visual guardrails I set.', false],
        ['assets/work/bmstack_3.jpg', "My cultural creative axis — the 'cultural discovery' arc: Reveal → Question → Invite → Bridge.", false],
        ['assets/work/bmstack_4.jpg', 'Six-channel content strategy — each platform mapped to a cultural pillar, with its own KPI and cadence.', false],
        ['assets/work/bmstack_5.jpg', 'Community + store/ASO — Discord ambassadors, UGC amplification, and a culture column built for SEO.', false],
        ['assets/work/bmstack_6.jpg', 'Community platforms + my three-wave, cultural-proximity influencer plan.', false],
        ['assets/work/bmstack_7.jpg', 'The five-phase PR roadmap — two-framing for CN vs. international press.', false]
      ]
    },
    {
      cover: 'assets/work/brandy_cover.jpg',
      grad: GRAD.pink,
      tags: ['Influencer Strategy', 'Creative Concept', 'Social Campaign'],
      title: '#BrandyMeoville - Influencer Campaign Pitch',
      statement: "Originated the AI-cat creative concept and built the influencer + AIDA strategy for a campaign satirizing Brandy Melville's 'one size fits most' culture — top-ranked in class.",
      role: 'USC CMGT568 · My role: originated the concept; owned influencer selection & the AIDA funnel',
      intro: "A class influencer-campaign pitch (top-ranked) that turns Brandy Melville's exclusionary sizing into a meme teens can laugh at — and walk away from. I originated the core creative idea and owned the influencer strategy.",
      challenge: "Brandy Melville's 'one size' culture fuels real harm to teen body image, but lecturing teens doesn't work. The problem: how do you critique a beloved brand in a way teens will actually spread — shifting the story from self-blame to system-blame?",
      did: [
        ['Originated the creative concept.', "I initiated the idea of a dramatic, hyper-expressive AI cat that even Brandy's clothes can't fit — flipping the narrative from self-blame to system-blame, humor over shame. The team then brainstormed the details together."],
        ['Grounded it in evidence.', "Anchored the concept in real data — CDC sizing charts, Dove and Harvard body-image research — so the satire had a substantive 'what's wrong' foundation, not just a joke."],
        ['Owned influencer selection and reasoning.', 'Built a two-phase strategy: Phase 1 inner-circle USC-adjacent creators (easy to approach, willing to test the concept) to prove it out, then Phase 2 outer-circle high-reach body-positive creators and journalists (Teen Vogue, WSJ) to scale — each chosen with an explicit fit-and-accessibility rationale.'],
        ['Mapped everyone to an AIDA funnel.', "Assigned each creator to a stage — Awareness ('Even a cat can't fit in') → Interest ('It's not you, it's the system') → Desire → Action — with platform, media, and messaging per stage, plus a participation mechanic where viewers generate their own AI-cat videos (Sora) under #BrandyMeoville."]
      ],
      results: [
        ['Top-ranked in class, with standout praise from the professor', " — she didn't expect us to analyze the problem so deeply or use AI so flexibly, and called the completeness and execution of the final result beyond her expectations."],
        ['An original, ownable creative device', ' — the AI cat — that carries a real behavior-change strategy, not just a joke.'],
        ['A full two-phase influencer roster', ' with fit/accessibility reasoning and an AIDA funnel mapping each creator to a stage and message.'],
        ['A measurable behavior-change design', " — meme-replication and 'reverse-hashtag' KPIs aimed at flattening the brand's demand."]
      ],
      ai: 'The AI here is the creative engine, not a shortcut: the AI cat was my concept, and the campaign is built so audiences co-create with AI (Sora) to spread it. I used AI to enable a meme mechanic while owning the idea, the influencer logic, and the funnel — creativity and AI working together.',
      images: [
        ['assets/work/brstack_1.jpg', 'The problem — toxic brand culture & harm to teen body image, evidenced with CDC / Dove / Harvard data.', 'Team research'],
        ['assets/work/brstack_2.jpg', "Big idea — the AI-cat concept I proposed: even Brandy's clothes can't fit.", 'Team research'],
        ['assets/work/brstack_3.jpg', 'Behavior SMART goals & KPIs — meme-replication and reverse-hashtag targets.', 'Team research'],
        ['assets/work/brstack_5.jpg', 'Community of interest — the online communities and offline circles around Brandy-curious girls, feeding the two-phase influencer strategy.', 'Team research'],
        ['assets/work/brstack_6.jpg', 'Phase 1 influencers — my two-phase strategy opens with inner-circle creators.', false],
        ['assets/work/brstack_annie-victoria.jpg', 'My influencer picks — Annie Long & Victoria Garrick Browne, each with a fit & accessibility rationale.', false],
        ['assets/work/brstack_julia-makayla.jpg', 'More of my picks — Julia Ma & Makayla Lysiak, chosen for authenticity and campus reach.', false],
        ['assets/work/brstack_7.jpg', 'My AIDA funnel — each creator mapped to a stage (Awareness → Interest) with platform and message.', false]
      ]
    }
  ];

  /* ---------------- Render ---------------- */

  function tagHtml(tags) {
    return tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
  }

  var grid = document.getElementById('work-grid');
  if (grid) {
    featured.forEach(function (p, i) {
      var el = document.createElement('article');
      el.className = 'work-card reveal';
      el.innerHTML =
        '<div class="work-visual">' +
          (p.cover
            ? '<img class="cover-img" src="' + p.cover + '" alt="' + p.title + ' cover"' +
              (p.coverPos ? ' style="object-position:' + p.coverPos + '"' : '') + '>' +
              (p.coverTitle ? '<span class="visual-title">' + p.coverTitle + '</span>' : '')
            : '<div class="visual-orb visual-orb--' + p.orb + '"></div><span class="visual-num">' + p.metric + '</span>') +
        '</div>' +
        '<div class="work-body">' +
          '<div class="tags">' + tagHtml(p.tags) + '</div>' +
          '<h3>' + p.title + '</h3>' +
          '<p>' + p.statement + '</p>' +
          '<div class="work-stats">' + p.ministats.map(function (s) { return '<span>' + s[0] + '<em>' + s[1] + '</em></span>'; }).join('') + '</div>' +
          '<span class="work-link">Read case study</span>' +
        '</div>';
      el.addEventListener('click', function () { openCase(p, false); });
      grid.appendChild(el);
    });
  }

  var strip = document.getElementById('work-strip');
  if (strip) {
    more.forEach(function (m) {
      var el = document.createElement('article');
      el.className = 'mini';
      el.innerHTML =
        '<div class="swatch" style="background:' + m.grad + '"></div>' +
        '<div class="kicker">' + m.kicker + '</div>' +
        '<h4>' + m.title + '</h4><p>' + m.body + '</p>';
      strip.appendChild(el);
    });
  }

  var schoolGrid = document.getElementById('school-grid');
  if (schoolGrid) {
    school.forEach(function (p) {
      var el = document.createElement('article');
      el.className = 'work-card reveal';
      el.innerHTML =
        '<div class="work-visual">' +
          (p.cover
            ? '<img class="cover-img" src="' + p.cover + '" alt="' + p.title + ' cover">'
            : '<div class="visual-orb" style="background:' + p.grad + '"></div>') +
        '</div>' +
        '<div class="work-body">' +
          '<div class="tags">' + tagHtml(p.tags) + '</div>' +
          '<h3>' + p.title + '</h3>' +
          '<p>' + p.statement + '</p>' +
          '<span class="work-link">View project</span>' +
        '</div>';
      el.addEventListener('click', function () { openCase(p, true); });
      schoolGrid.appendChild(el);
    });
  }

  /* ---------------- "More Work" toggle ---------------- */

  var moreToggle = document.getElementById('more-toggle');
  var moreSection = document.getElementById('more-section');
  if (moreToggle && moreSection) {
    moreToggle.addEventListener('click', function () {
      moreSection.hidden = false;
      document.getElementById('more-toggle-row').style.display = 'none';
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    });
  }

  /* ---------------- Overlay sheet ---------------- */

  var overlay = document.getElementById('overlay');
  var sheetEl = document.getElementById('sheet');

  function openCase(p, isSchool) {
    var html =
      '<button class="closeb" id="sheet-close" aria-label="Close">×</button>' +
      '<div class="cs-tags">' + tagHtml(p.tags) + '</div>' +
      '<h2 class="cs-title">' + p.title + '</h2>' +
      (p.role ? '<div class="role-line">' + p.role + '</div>' : '') +
      '<p class="cs-intro">' + p.intro + '</p>' +
      (p.meta ? '<div class="cs-meta">' + p.meta.map(function (m) {
        return '<div class="fact"><div class="fact-label">' + m[0] + '</div><div class="fact-value">' + m[1] + '</div></div>';
      }).join('') + '</div>' : '') +
      (p.bigstats ? '<div class="bigstats">' + p.bigstats.map(function (s) {
        return '<div><div class="bn">' + s[0] + '</div><div class="bl">' + s[1] + '</div></div>';
      }).join('') + '</div>' : '') +
      '<h3 class="cs-h">The challenge</h3>' +
      '<p class="cs-p">' + p.challenge + '</p>' +
      '<h3 class="cs-h">What I did</h3>' +
      '<ol class="did">' + p.did.map(function (d) { return '<li><b>' + d[0] + '</b> ' + d[1] + '</li>'; }).join('') + '</ol>' +
      (p.images ? '<div class="gallery"><h4 class="cs-h" style="margin:0 0 1.1rem;">Walk through the work <span class="ss-hint">— scroll, the slides stack</span></h4>' +
        '<div class="ss-scroll"><div class="ss-sticky">' + p.images.map(function (im) {
          return '<figure class="ss-card' + (im[2] ? ' ss-team' : '') + '">' +
            (im[2] ? '<span class="ss-badge">' + (typeof im[2] === 'string' ? im[2] : 'Team analysis') + '</span>' : '') +
            '<img src="' + im[0] + '" alt="" data-zoom="' + im[0] + '">' +
            '<figcaption class="ss-cap">' + im[1] + '</figcaption></figure>';
        }).join('') + '</div></div></div>' : '') +
      '<h3 class="cs-h">The results</h3>' +
      '<ul class="res">' + p.results.map(function (r) { return '<li><b>' + r[0] + '</b>' + r[1] + '</li>'; }).join('') + '</ul>' +
      '<div class="ai-note"><b>' + (isSchool ? 'How AI & I worked together.' : 'How I used AI.') + '</b> ' + p.ai + '</div>';

    sheetEl.innerHTML = html;
    overlay.classList.add('open');
    document.body.classList.add('locked');
    sheetEl.parentElement.scrollTop = 0;

    document.getElementById('sheet-close').addEventListener('click', closeCase);
    sheetEl.querySelectorAll('img[data-zoom]').forEach(function (img) {
      img.addEventListener('click', function (e) { zoom(e, img.getAttribute('data-zoom')); });
    });
    if (p.images) initScrollStack(sheetEl.parentElement);
  }

  function closeCase() {
    overlay.classList.remove('open');
    document.body.classList.remove('locked');
  }

  overlay.addEventListener('click', function (e) { if (e.target === overlay) closeCase(); });

  /* ---------------- Stacked-slide gallery ---------------- */

  function initScrollStack(scroller) {
    var scrollEl = scroller.querySelector('.ss-scroll');
    if (!scrollEl) return;
    var sticky = scrollEl.querySelector('.ss-sticky');
    var cards = Array.prototype.slice.call(scrollEl.querySelectorAll('.ss-card'));
    var N = cards.length;

    function update() {
      var STEP = +scrollEl.dataset.step || 300;
      var cardH = +scrollEl.dataset.cardh || 400;
      var scTop = scroller.getBoundingClientRect().top;
      var sTop = scrollEl.getBoundingClientRect().top;
      var scrolled = Math.max(0, (scTop + 86) - sTop);
      var front = scrolled / STEP;
      cards.forEach(function (c, i) {
        var rel = front - i, y, scale, op;
        if (rel <= 0) {
          var e = Math.max(0, Math.min(1, rel + 1));
          y = (1 - e) * cardH * 1.05; scale = 1; op = 1;
        } else {
          y = -Math.min(rel, 6) * 8;
          scale = 1 - Math.min(rel, 5) * 0.03;
          op = Math.max(0.32, 1 - rel * 0.26);
        }
        c.style.transform = 'translateY(' + y + 'px) scale(' + scale + ')';
        c.style.opacity = op;
        c.style.zIndex = i + 1;
      });
    }

    function layout() {
      var cardH = cards[0].offsetHeight || 400;
      var STEP = Math.max(150, Math.round(cardH * 0.48));
      sticky.style.height = cardH + 'px';
      scrollEl.style.height = (cardH + N * STEP + 16) + 'px';
      scrollEl.dataset.step = STEP;
      scrollEl.dataset.cardh = cardH;
      update();
    }

    var imgs = cards.map(function (c) { return c.querySelector('img'); });
    var loaded = 0;
    var done = function () { if (++loaded >= imgs.length) layout(); };
    imgs.forEach(function (im) {
      if (im.complete) done();
      else { im.onload = done; im.onerror = done; }
    });

    if (scroller.__ss) scroller.removeEventListener('scroll', scroller.__ss);
    scroller.__ss = update;
    scroller.addEventListener('scroll', update, { passive: true });
    if (window.__ssResize) window.removeEventListener('resize', window.__ssResize);
    window.__ssResize = layout;
    window.addEventListener('resize', layout);
    layout();
  }

  /* ---------------- Lightbox ---------------- */

  var lightbox = document.getElementById('lightbox');

  function zoom(ev, src) {
    ev.stopPropagation();
    document.getElementById('lightbox-img').src = src;
    lightbox.classList.add('open');
  }

  lightbox.addEventListener('click', function () { lightbox.classList.remove('open'); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      lightbox.classList.remove('open');
      closeCase();
    }
  });
})();
