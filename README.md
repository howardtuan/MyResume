# Howard Tuan Resume Site

這是 Howard Tuan 的個人履歷 / 作品集網站。首頁預設英文，可切換中文；文章區塊會先在首頁顯示精選內容，點「View More / 查看更多」才會進入完整文章頁。

## 如何更新文章

文章資料集中在 `assets/js/writing.js`。之後新增 Medium 或 HackMD 文章時，不需要改首頁或文章頁卡片 HTML。

```js
// assets/js/writing.js
// Medium / 技術實作文章：新增完整物件，放到 articles 陣列開頭。
// categoryKey 目前可用：tech、zerojudge、leetcode、info。
// featured: true 代表會出現在首頁文章區塊；不想放首頁就省略或設成 false。
{
  platform: "HackMD",
  categoryKey: "zerojudge",
  category: "Algorithm / ZeroJudge",
  title: "文章標題",
  url: "https://hackmd.io/@HowN/your-new-note",
  excerpt: "文章摘要，顯示在卡片上。",
  date: "HackMD",
  read: "Algorithm note",
  tags: ["APCS", "ZeroJudge"],
  featured: false
}
```

ZeroJudge 與 LeetCode 題解已改成清單式維護，新增時只要補 slug：

```js
const zeroJudgeNotes = [
  "apcs_d406",
  "apcs_a290"
];

const leetCodeNotes = [
  "leetcode_001",
  "leetcode_041"
];
```

資訊分享文章可以用完整物件新增，或參考目前的 `NoteForIM` 物件使用 `categoryKey: "info"`。

如果你更新了很多文章，但瀏覽器還顯示舊資料，可以把 `index.html` 和 `writing.html` 底部的 `assets/js/writing.js?v=...` 版本號換成新的字串，強制瀏覽器重新載入文章資料。

如果未來新增新的分類，例如 `research`，需要同步改兩個地方：

```html
<!-- writing.html：新增篩選按鈕 -->
<button type="button" data-article-filter="research">Research</button>
```

```js
// assets/js/site-language.js：新增對應的中英文 filter 顯示文字
filters: ["All", "Medium", "HackMD", "Tech", "ZeroJudge", "LeetCode", "Info Sharing", "Research"]
filters: ["全部", "Medium", "HackMD", "技術實作", "ZeroJudge", "LeetCode", "資訊分享", "研究筆記"]
```

## 如何更新履歷 PDF

履歷下載按鈕在 `index.html` 和 `writing.html`，目前使用：

```html
<!-- 英文履歷 -->
<a href="resume/mycv_eng.pdf" target="_blank" rel="noopener noreferrer" data-i18n="resumeEn">Resume EN</a>

<!-- 中文履歷 -->
<a href="resume/mycv_chi.pdf" target="_blank" rel="noopener noreferrer" data-i18n="resumeZh">履歷中文</a>
```

如果只是更新內容，直接用新 PDF 覆蓋 `resume/mycv_eng.pdf` 或 `resume/mycv_chi.pdf` 即可。如果改檔名，就要同步更新兩個 HTML 裡的 `href`。

## 如何更新 Banner 背景輪播照片

首頁背景輪播照片放在 `assets/images/hero-carousel/`。目前有五張圖：

```text
assets/images/hero-carousel/slide-1.jpg
assets/images/hero-carousel/slide-2.jpg
assets/images/hero-carousel/slide-3.jpg
assets/images/hero-carousel/slide-4.jpg
assets/images/hero-carousel/slide-5.jpg
```

新增輪播照片時，先把圖片放進資料夾，再到 `assets/js/site-interactions.js` 更新 `heroSlides`：

```js
const heroSlides = [
  "assets/images/hero-carousel/slide-1.jpg",
  "assets/images/hero-carousel/slide-2.jpg",
  "assets/images/hero-carousel/slide-3.jpg",
  "assets/images/hero-carousel/slide-4.jpg",
  "assets/images/hero-carousel/slide-5.jpg",
  "assets/images/hero-carousel/your-new-photo.jpg"
];
```

文章頁 hero 仍使用 `assets/css/resume.css` 的 `--hero-photo` 當背景；如果也想換文章頁背景，改那個 CSS 變數即可。

## 如何更新中英文文字

語言切換文字集中在 `assets/js/site-language.js`：

```js
// home.en / home.zh：首頁履歷內容
// page.en / page.zh：文章頁、按鈕、篩選器與共用導覽文字
```

如果改首頁卡片順序，記得同步調整 `site-language.js` 裡對應陣列的順序，因為它會照 HTML 卡片順序套用文字。

## 如何更新專案

專案卡片本體在 `index.html` 的 `#projects` 區塊。中英文切換用的標題、摘要與展開內容在 `assets/js/site-language.js`：

```js
// home.en.projects / home.zh.projects：專案卡片未展開的標題與副標
// home.en.projectDetails / home.zh.projectDetails：展開後 README Summary 內容
```

PROJECTS 目前一頁最多 6 個，分頁由 `assets/js/site-interactions.js` 控制：

```js
const pageSize = 6;
```

要新增專案時，直接在 `#projects .project-grid` 裡新增一個 `<details class="project-tile">`；如果超過 6 個，上一頁 / 下一頁會自動出現可用狀態。

## 如何更新獎狀 / 證書

獎狀圖片放在 `assets/images/certificates/`。目前頁面會依照 `index.html` 的卡片順序顯示，第一張固定是 TOEIC，第二張是畢業專題；其他相同類型的獎狀盡量放在相鄰位置，例如系統分析放一起、金匠獎放一起、黑客松放一起、資料 / AI 類放一起。

每張卡片在 `index.html` 的 `#certifications` 區塊：

```html
<button
  type="button"
  class="certificate-card"
  data-certificate-image="assets/images/certificates/your-certificate.jpg"
  data-certificate-title="證書標題"
>
```

`data-certificate-image` 補上圖片路徑後，卡片預覽和點開放大都會自動使用那張圖片。預覽縮圖使用 `object-fit: contain`，所以不管直式或橫式證照都會完整放進同樣大小的外框內。獎狀 / 證書同樣一頁最多 6 個，超過 6 個會自動分頁。

如果改卡片文字，也要同步 `assets/js/site-language.js` 的：

```js
// home.en.certificates / home.zh.certificates
```

## 如何更新 Follow Me 連結

footer 的 Gmail、Instagram、Facebook、LinkedIn、GitHub icon 都在 `index.html` 的 `.social-links`。目前除了 GitHub 外都先用 `href="#"` 預留：

```html
<a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
  <i class="fab fa-instagram"></i>
</a>
```

之後把 `href="#"` 換成你的連結即可，`target="_blank"` 已經都設定好了。

## 導覽邏輯

`WRITING` 導覽連結會先捲到首頁文章區塊：

```html
<!-- index.html -->
<a href="#writing">WRITING</a>

<!-- writing.html -->
<a href="index.html#writing">WRITING</a>
```

完整文章頁入口則在首頁文章區塊內的「View More / 查看更多」與「Open Full Library / 完整文章庫」。

---

## Original Template Credit

Initio - Free, multipurpose html5 template
=============

Initio is a fully featured html5 theme which will help you create a stylish personal or company site. 
6 page layout templates should cover all your development needs. 
Font Awesome 4, parallax effects and more are included (but can be turned off of course)


License
-------
**Creative Commons Attribution 3.0** - http://creativecommons.org/licenses/by/3.0/


Bug tracker
-----------

Found a bug? Please create an issue here on GitHub! 
https://github.com/pozh/Initio/issues



Credits
-------
* Design and development: **Sergey Pozhilov** - http://pozhilov.com
* More free templates by Sergey: http://gettemplate.com

Photos used in the template
-------
* http://www.publicdomainpictures.net/view-image.php?image=19999
* http://www.publicdomainpictures.net/view-image.php?image=6354
* http://imcreator.com/free/business/macbook-computer
* http://unsplush.com
