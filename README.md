# Howard Tuan Resume Site

這是 Howard Tuan 的個人履歷 / 作品集網站。首頁預設英文，可切換中文；文章區塊會先在首頁顯示精選內容，點「View More / 查看更多」才會進入完整文章頁。

## 如何更新文章

文章資料集中在 `assets/js/writing.js` 的 `articles` 陣列。之後新增 Medium 或 HackMD 文章時，只要新增一個物件，不需要改首頁或文章頁 HTML。

```js
// assets/js/writing.js
// 新增文章時複製這段，放到 articles 陣列中。
// categoryKey 目前可用：tech、zerojudge、leetcode。
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

如果未來新增新的分類，例如 `research`，需要同步改兩個地方：

```html
<!-- writing.html：新增篩選按鈕 -->
<button type="button" data-article-filter="research">Research</button>
```

```js
// assets/js/site-language.js：新增對應的中英文 filter 顯示文字
filters: ["All", "Medium", "HackMD", "Tech", "ZeroJudge", "LeetCode", "Research"]
filters: ["全部", "Medium", "HackMD", "技術實作", "ZeroJudge", "LeetCode", "研究筆記"]
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

## 如何更新 Banner 背景照片

首頁與文章頁 banner 背景由 `assets/css/resume.css` 的 CSS 變數控制：

```css
/* 換背景照片時，把圖片放到 assets/images/，再改這一行 */
--hero-photo: url("../images/mac.jpg");
```

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
