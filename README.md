# Valerie Tian — Portfolio Website

个人作品集网站,纯静态 HTML/CSS,无需构建工具。

## 文件结构

```
index.html                    首页(Hero / 数据亮点 / 案例 / 方法论 / 能力 / 关于 / 联系)
work/marketcrunch.html        案例:MarketCrunch AI 内容增长
work/helios.html              案例:UCLA Health & SF Travel 跨市场增长 + La Mer 流程再造
work/creator-partnerships.html 案例:Lancôme & L'Oréal KOL 策略
work/iphone17.html            案例:iPhone 17 舆情分析 + AI campaign
css/style.css                 全站样式
js/main.js                    交互动画(开场 loader、光标圆点、GSAP 滚动动画)
assets/Valerie-Tian-Resume.pdf 简历(替换此文件即可更新下载链接)
```

## 设计语言(参照 marimba.design)

- 字体:Geist(正文)+ Instrument Serif(标题,斜体点缀)
- 配色:米灰底 `#F0EFE9`,橄榄绿文字 `#3A4A16`,渐变球体点缀色
- 布局:全屏竖向网格线、左上 logo + 右上竖排导航、大衬线标题
- 交互:开场 loader、自定义光标圆点、GSAP 入场/滚动/漂浮动画、鼠标视差

## 本地预览

```bash
cd "/Users/vvaleriee/Projects/My Website"
python3 -m http.server 4173
# 浏览器打开 http://localhost:4173
```

## 部署(免费)

推荐 Netlify Drop:打开 https://app.netlify.com/drop ,把整个文件夹拖进去即可上线。
也可以用 GitHub Pages 或 Vercel。

## 待补充素材(页面中有虚线占位框标注位置)

- [ ] 个人照片(About 区域)
- [ ] 各案例的可视化素材:数据截图、工作流程图、内容示例
- [ ] 代表性短视频作品(MarketCrunch 案例)
- [ ] 客户/主管推荐语(可加在首页)
