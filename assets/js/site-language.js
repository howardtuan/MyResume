(function () {
  const home = {
    en: {
      title: "Howard Tuan",
      tagline: "National Chung Hsing University, Graduate Institute of MIS<br>Medical Imaging AI | RAG Systems | Product-minded Builder",
      profile: "I am currently studying at the Graduate Institute of Management Information Systems at National Chung Hsing University. My work focuses on <strong>medical imaging AI, RAG question-answering systems, teaching tools, and deployable product development</strong>, with an emphasis on turning technical ideas into workflows people can understand and use.",
      metricNotes: [
        "NCHU MIS Master's Program",
        "Average score 92.4",
        "Programming education and class mentoring",
        "Detection / Segmentation / Classification"
      ],
      education: [
        ["National Chung Hsing University, M.S. in MIS", "Graduate ranking 4/45, average score 92.4, GPA 4.21/4.3.", "Thesis: Deep learning models for thyroid ultrasound nodule detection, segmentation, and benign-malignant classification."],
        ["Chung Yuan Christian University, B.B.A. in MIS", "Graduate ranking 12/113, average score 88.31, GPA 3.92/4.", "Graduation project: Talk2Draw."],
        ["New Taipei Industrial Vocational High School, Data Processing", "Top 6% in class, with foundations in business, accounting, data processing, and web design."]
      ],
      experience: [
        ["Programming Instructor / Orange Apple Programming School", "Teaching APCS, Scratch, Python, JavaScript, HTML, Database, Algorithm, and AI while helping students build programming fundamentals and problem-solving confidence."],
        ["Teaching Assistant / NCHU MIS", "Assisting graduate and undergraduate courses, supporting Python instruction, assignments, and in-class technical guidance."],
        ["AI Workshop Instructor / NCHU MIS", "Designed and delivered Python and AI teaching sessions for students, connecting implementation concepts with hands-on practice."],
        ["AI Intern / Insight & LINE Bot Workflow", "Worked on AI-assisted workflow experiments and LINE Bot integration, translating prototype ideas into usable product flows."],
        ["Software Engineering Intern / Java SPEC Workflow", "Supported Java method analysis and SPEC-oriented development tasks in a software engineering context."]
      ],
      projects: [
        ["Thyroid Ultrasound Nodule Detection, Segmentation, and Classification", "YOLOv11 / ResNet50 / Flask GUI / Medical Imaging"],
        ["SnapDiet Nutrition Assistant", "Nutrition assistant / Image-based meal logging / Zeabur"],
        ["OpenPediCare", "Django / AI summary / Parent portal / PDF output"],
        ["OrangeAppleAssistant", "Python desktop app / AI writing assistant / Teaching workflow"],
        ["Talk2Draw Graduation Project", "Django / Web Speech API / Search / Slides / Ollama"],
        ["LightRAG Harry Potter / Local AI Teaching Assistant", "Graph retrieval / Local LLM / LlamaIndex / Open WebUI"]
      ],
      projectDetails: [
        ["README Summary", "My master's thesis focuses on detecting, segmenting, and classifying thyroid nodules in ultrasound images. The system connects three model modules into a clinical-assistance demo workflow.", ["YOLOv11 locates suspected thyroid nodules.", "ResNet50 / timm classifies ROI images as benign or malignant.", "A Flask GUI turns the research pipeline into a visual workflow."]],
        ["README Summary", "SnapDiet is a nutrition control tool that helps users log meals through photos and chat interactions, then review calories, nutrients, and daily totals.", ["Meal photos lower the friction of daily food tracking.", "Shows calories, protein, fat, carbohydrates, and daily totals.", "The public deployment can be used directly to demonstrate the product experience."]],
        ["README Summary", "OpenPediCare is a pediatric follow-up workspace. After a doctor completes a visit record, the system can generate visit summaries, parent education content, share pages, and PDFs.", ["Built with Django for doctor and parent roles.", "Integrates the browser Web Speech API for transcript workflows.", "Outputs shareable pages and PDFs to improve medical communication."]],
        ["README Summary", "This classroom record and contact-book generation tool is designed for teaching contexts, helping teachers quickly organize student performance and parent communication.", ["Supports question-bank selection and course-session mapping.", "One-click contact-book text copying reduces administration time.", "Built from real teaching pain points rather than as a display-only demo."]],
        ["README Summary", "Talk2Draw turns spoken content into visual information, search results, slides, and outlines by combining speech recognition, intelligent search, charts, presentations, and conversational agents.", ["Transforms natural language into visualized and searchable context.", "Supports spoken presentation and conversation-organizing workflows.", "Explores local Ollama models and tool-routing concepts."]],
        ["README Summary", "These projects show my ability to connect knowledge organization, indexing, graph retrieval, and language-model response workflows.", ["Uses graph retrieval to improve complex relationship queries.", "Builds local RAG systems for course content and assignment Q&A.", "Works with Ollama, vector databases, and document ingestion flows."]]
      ],
      writingIntro: ["Medium / HackMD", "Long-form technical essays, research notes, and teaching memos now live in a dedicated article library so the resume page stays focused."],
      writingLinks: ["View More", "Open Full Library"],
      certs: [
        ["Certifications / Exams", ["TOEIC 745", "Computer Software Application Technician, Level B / C", "Web Design Technician, Level C", "Accounting Manual Bookkeeping Technician, Level C", "Big Data Analysis: Business Strategy Course"]],
        ["Competition Highlights", ["First place, MIS graduation project preliminary contest", "First place, database class competition", "Honorable mention, AI and Big Data Creative Competition", "Golden Craftsman Programming Contest finals", "2023 Data-Driven Innovation Application Competition semifinalist"]]
      ]
    },
    zh: {
      title: "段浩恩 Howard Tuan",
      tagline: "國立中興大學資訊管理研究所<br>Medical Imaging AI | RAG Systems | Product-minded Builder",
      profile: "我目前就讀國立中興大學資訊管理研究所，研究與實作主軸放在 <strong>醫療影像 AI、RAG 問答系統、教學工具與可部署產品開發</strong>，也持續在教學與實習現場把技術轉成能被理解、能被操作的流程。",
      metricNotes: ["NCHU MIS 碩士班", "平均成績 92.4", "程式設計教學與帶班", "Detection / Segmentation / Classification"],
      education: [
        ["國立中興大學 資訊管理學研究所", "畢業排名 4/45，平均成績 92.4，GPA 4.21/4.3。", "論文：基於深度學習模型應用於甲狀腺超音波影像之良惡性結節偵測、分割與分類研究。"],
        ["中原大學 資訊管理學系", "畢業排名 12/113，平均成績 88.31，GPA 3.92/4。", "畢業專題：話中有畫 Talk2Draw。"],
        ["新北高工 資料處理科", "科排 6%，建立商管、會計、資料處理與網頁設計基礎。"]
      ],
      experience: [
        ["兒童程式設計老師 / 橘子蘋果程式學苑", "教授 APCS、Scratch、Python、JavaScript、HTML、Database、Algorithm 與 AI，協助學生建立程式基礎與解題能力。"],
        ["教學助理 / 國立中興大學資訊管理研究所", "協助研究所與大學部課程，支援 Python 教學、作業與課堂技術引導。"],
        ["AI 工作坊講師 / 國立中興大學資訊管理學系", "設計並講授 Python 與 AI 實作課程，讓學生能把概念接到實際操作。"],
        ["AI 實習 / Insight 與 LINE Bot 流程", "參與 AI 輔助流程與 LINE Bot 整合實驗，將原型想法轉成可操作的產品流程。"],
        ["軟體工程實習 / Java SPEC 流程", "協助 Java method 分析與 SPEC 導向開發工作。"]
      ],
      projects: [
        ["甲狀腺超音波結節偵測、分割與分類研究", "YOLOv11 / ResNet50 / Flask GUI / Medical Imaging"],
        ["SnapDiet 飲控小幫手", "Nutrition assistant / Image-based meal logging / Zeabur"],
        ["OpenPediCare", "Django / AI summary / Parent portal / PDF output"],
        ["OrangeAppleAssistant", "Python desktop app / AI writing assistant / Teaching workflow"],
        ["話中有畫 Talk2Draw", "Django / Web Speech API / Search / Slides / Ollama"],
        ["LightRAG Harry Potter / Local AI Teaching Assistant", "Graph retrieval / Local LLM / LlamaIndex / Open WebUI"]
      ],
      projectDetails: [
        ["README 摘要", "碩士論文主題聚焦於甲狀腺超音波影像中的結節偵測、分割與良惡性分類。系統將三個模型模組串成可展示的臨床輔助流程。", ["使用 YOLOv11 進行結節位置偵測。", "以 ResNet50 / timm 對 ROI 進行良惡性二分類。", "整合 Flask GUI，讓研究成果可被視覺化展示。"]],
        ["README 摘要", "SnapDiet 是飲食控制工具，目標是讓使用者透過照片與聊天互動快速記錄餐點，掌握熱量、營養素與當日累計。", ["以餐點照片降低飲食紀錄門檻。", "提供熱量、蛋白質、脂肪、碳水與每日累計資訊。", "已部署公開站點，可直接對外展示產品體驗。"]],
        ["README 摘要", "OpenPediCare 是兒科回診後照護工作區，醫師完成看診紀錄後，可生成回診摘要、家長衛教、分享頁面與 PDF。", ["以 Django 建立醫師與家長雙角色使用情境。", "整合瀏覽器 Web Speech API，支援逐字稿流程。", "輸出可分享頁面與 PDF，提升醫療溝通效率。"]],
        ["README 摘要", "這是一個面向教學現場的課堂紀錄與聯絡簿生成工具，幫助老師快速整理學習表現與家長溝通內容。", ["支援題庫抽題、課程與堂數對應流程。", "一鍵複製聯絡簿文字，減少行政時間。", "建立在真實教學痛點之上，不只是展示型 demo。"]],
        ["README 摘要", "把口說內容即時轉成可理解的視覺資訊、搜尋結果、簡報與大綱，整合語音辨識、智慧搜尋、圖表、簡報與對話代理。", ["自然語言具象化與本機相簿語意選圖。", "口說簡報與對話整理流程。", "支援 Ollama 地端模型與工具路由概念。"]],
        ["README 摘要", "這一類專案呈現的是我在知識整理、索引建立、圖譜檢索與語言模型回應流程上的整合能力。", ["使用圖結構檢索改善複雜角色關係查詢。", "建置地端 RAG 系統支援課程內容與作業規範問答。", "熟悉 Ollama、向量資料庫與文件導入流程。"]]
      ],
      writingIntro: ["Medium / HackMD", "長篇技術文章、研究筆記、教學 memo 集中到獨立文章庫，首頁只保留最新與精選內容。"],
      writingLinks: ["查看更多", "完整文章庫"],
      certs: [
        ["證照 / 檢定", ["TOEIC 745", "電腦軟體應用乙級 / 丙級", "網頁設計丙級", "會計事務人工記帳丙級", "大數據分析：商業策略課程"]],
        ["競賽亮點", ["資訊管理學系專題競賽初賽第一名", "資料庫班級競賽第一名", "人工智慧與大數據創意競賽佳作", "金匠獎程式設計個人賽 / 團體賽決賽", "2023 數據驅動創新應用大賽入圍複賽"]]
      ]
    }
  };

  const page = {
    en: {
      resumeEn: "Resume EN",
      resumeZh: "Resume ZH",
      skip: "Skip to main content",
      back: "Back to resume",
      allArticles: "All Articles",
      articleIntro: "Medium tutorials and HackMD notes for technical builds, ZeroJudge APCS practice, and LeetCode algorithm review.",
      visible: "Visible",
      platforms: "Platforms",
      categories: "Categories",
      mediumComposer: "Article preview composer",
      hackmdComposer: "Note preview composer",
      articleLink: "Article link",
      preview: "Preview",
      search: "Search articles",
      featured: "FEATURED",
      library: "LIBRARY",
      filters: ["All", "Medium", "HackMD", "Tech", "ZeroJudge", "LeetCode"],
      toggle: "中文"
    },
    zh: {
      resumeEn: "英文履歷",
      resumeZh: "中文履歷",
      skip: "跳到主要內容",
      back: "回履歷首頁",
      allArticles: "所有文章",
      articleIntro: "整理 Medium 技術教學與 HackMD 筆記，包含技術實作、ZeroJudge APCS 與 LeetCode 演算法整理。",
      visible: "顯示文章",
      platforms: "平台",
      categories: "分類",
      mediumComposer: "文章預覽",
      hackmdComposer: "筆記預覽",
      articleLink: "文章連結",
      preview: "預覽",
      search: "搜尋文章",
      featured: "精選文章",
      library: "文章庫",
      filters: ["全部", "Medium", "HackMD", "技術實作", "ZeroJudge", "LeetCode"],
      toggle: "EN"
    }
  };

  const setText = (selector, value) => {
    const target = document.querySelector(selector);
    if (target && value !== undefined) {
      target.textContent = value;
    }
  };

  const setHtml = (selector, value) => {
    const target = document.querySelector(selector);
    if (target && value !== undefined) {
      target.innerHTML = value;
    }
  };

  const setList = (selector, values, callback) => {
    document.querySelectorAll(selector).forEach((node, index) => {
      if (values[index]) {
        callback(node, values[index], index);
      }
    });
  };

  const applyHome = (lang) => {
    const copy = home[lang];
    if (!copy || !document.body.classList.contains("home")) {
      return;
    }

    setText("#logo .title", copy.title);
    setHtml("#logo .tagline", copy.tagline);
    setHtml("#profile .lead", copy.profile);

    setList(".metric-note", copy.metricNotes, (node, value) => {
      node.textContent = value;
    });

    setList("#education .info-card", copy.education, (card, value) => {
      card.querySelector("h3").textContent = value[0];
      card.querySelectorAll("p").forEach((paragraph, index) => {
        paragraph.textContent = value[index + 1] || "";
      });
    });

    setList("#experience .timeline-card", copy.experience, (card, value) => {
      card.querySelector("h3").textContent = value[0];
      card.querySelector("p").textContent = value[1];
    });

    setList("#projects .project-tile", copy.projects, (card, value) => {
      card.querySelector("h3").textContent = value[0];
      card.querySelector("summary p").textContent = value[1];
    });

    setList("#projects .project-tile", copy.projectDetails, (card, value) => {
      const readme = card.querySelector(".project-readme");
      if (!readme) {
        return;
      }

      readme.querySelector("h4").textContent = value[0];
      readme.querySelector("p").textContent = value[1];
      readme.querySelectorAll("li").forEach((item, index) => {
        item.textContent = value[2][index] || "";
      });
    });

    setText(".writing-intro h3", copy.writingIntro[0]);
    setText(".writing-intro p", copy.writingIntro[1]);
    setText(".writing-home .split-section-head .glass-link", copy.writingLinks[0]);
    setText(".writing-home .primary-link", copy.writingLinks[1]);

    setList("#certifications .info-card", copy.certs, (card, value) => {
      card.querySelector("h3").textContent = value[0];
      card.querySelectorAll("li").forEach((item, index) => {
        item.textContent = value[1][index] || "";
      });
    });
  };

  const applyPage = (lang) => {
    const copy = page[lang];
    const navLabels = lang === "zh"
      ? ["簡介", "學歷", "經歷", "專案", "文章", "證照", "聯絡"]
      : ["PROFILE", "EDUCATION", "EXPERIENCE", "PROJECTS", "WRITING", "CERTIFICATIONS", "CONTACT"];

    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    setText(".nav-home span", lang === "zh" ? "首頁" : "Home");
    document.querySelectorAll(".nav-center a").forEach((link, index) => {
      if (navLabels[index]) {
        link.textContent = navLabels[index];
      }
    });
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = copy[node.dataset.i18n];
      if (value) {
        node.textContent = value;
      }
    });

    setText(".skip-link", copy.skip);
    setText(".back-link", copy.back);
    setText(".article-hero h1", copy.allArticles);
    setText(".article-hero p", copy.articleIntro);
    setText(".article-stats div:first-child span", copy.visible);
    setText(".article-stats div:nth-child(2) span", copy.platforms);
    setText(".article-stats div:nth-child(3) span", copy.categories);
    setText('[data-platform="medium"] .writing-head p', copy.mediumComposer);
    setText('[data-platform="hackmd"] .writing-head p', copy.hackmdComposer);
    document.querySelectorAll(".writing-composer label").forEach((label) => {
      label.textContent = copy.articleLink;
    });
    document.querySelectorAll("[data-preview-target]").forEach((button) => {
      button.textContent = copy.preview;
    });
    const search = document.getElementById("article-search");
    if (search) {
      search.placeholder = copy.search;
    }
    setText(".article-featured .section-title span", copy.featured);
    setText(".article-index .section-title span", copy.library);

    document.querySelectorAll("[data-article-filter]").forEach((button, index) => {
      if (copy.filters[index]) {
        button.textContent = copy.filters[index];
      }
    });

    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
      button.textContent = copy.toggle;
      button.setAttribute("aria-label", lang === "en" ? "Switch to Chinese" : "切換到英文");
    });
  };

  const applyLanguage = (lang, persist) => {
    const normalized = lang === "zh" ? "zh" : "en";
    applyPage(normalized);
    applyHome(normalized);
    if (persist) {
      localStorage.setItem("site-language", normalized);
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    const initialLang = localStorage.getItem("site-language") || "en";
    applyLanguage(initialLang, false);

    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const current = localStorage.getItem("site-language") || "en";
        applyLanguage(current === "en" ? "zh" : "en", true);
      });
    });
  });
}());
