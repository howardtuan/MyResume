(function () {
  const home = {
    en: {
      title: "Howard Tuan",
      tagline: "National Chung Hsing University, Graduate Institute of MIS<br>Medical Imaging AI | RAG Systems | Product-minded Builder",
      pageTitle: "Howard Tuan | AI & Software Engineer",
      pageDescription: "Howard Tuan's portfolio and resume, featuring medical imaging AI, LLM/RAG, backend systems, and deployable AI products.",
      profile: "I am an M.S. candidate in Management Information Systems at National Chung Hsing University, graduating in August 2026. I focus on <strong>medical imaging AI, LLM/RAG, backend systems, and cloud deployment</strong>, with end-to-end experience spanning model development, API engineering, and production launches.",
      metrics: [
        ["4 / 45", "Program Ranking", "NCHU MIS | GPA 4.21 / 4.3"],
        ["0.84 / ≈0.90", "Thesis mAP / Dice", "Thyroid ultrasound detection and segmentation"],
        ["3 weeks / 5 models", "Production Launch", "Medical AI × LINE Bot"],
        ["Nearly 500", "Product Adoption", "SnapDiet LINE friends in its first month"]
      ],
      sectionTitles: {
        education: "EDUCATION",
        experience: "WORK EXPERIENCE",
        projects: "PROJECTS",
        leetcode: "LEETCODE",
        github: "GITHUB",
        writing: "WRITING",
        certificates: "AWARDS & CERTIFICATES"
      },
      education: [
        ["National Chung Hsing University, M.S. in MIS", "Program ranking 4/45, average score 92.4, GPA 4.21/4.3.", "Thesis: Deep learning models for thyroid ultrasound nodule detection, segmentation, and benign-malignant classification."],
        ["Chung Yuan Christian University, B.B.A. in MIS", "Graduate ranking 12/113, average score 88.31, GPA 3.92/4.", "Graduation project: Talk2Draw."],
        ["New Taipei Industrial Vocational High School, Data Processing", "Top 6% in class, with foundations in business, accounting, data processing, and web design."]
      ],
      educationDates: ["2024 - 2026 (Expected Aug 2026)", "2020 - 2024", "2017 - 2020"],
      experience: [
        ["AI Software Engineering Intern / Health GeneTech Corporation", "Built medical-image inference services with YOLO, Python, and Django; integrated five AI models with a LINE Bot and launched the product in three weeks."],
        ["Software Engineering Intern / Cathay Life Taoyuan Software Development Center", "Developed a Java reverse-engineering tool that reduced SPEC generation for a single method to about five seconds."],
        ["Online Programming Instructor / Orange Apple Programming School", "Taught Scratch, Python, HTML/CSS, JavaScript, databases, algorithms, and APCS over five years while using AI to streamline post-class administration."],
        ["Teaching Assistant / NCHU MIS", "Supported data mining, big data analytics, and AI courses through materials, grading, student mentoring, and Python labs."],
        ["AI & Data Science Workshop Instructor / NCHU Affiliated Senior High School", "Designed interactive Python labs that guided high school students from data processing to data mining and machine learning."],
        ["Early Teaching & Student Leadership", "Combined experience as a Minecraft Education instructor, MIS Student Association treasurer, and Magic Club education director."]
      ],
      experienceDates: ["Feb 2026 - Mar 2026", "Feb 2024 - Jun 2024", "Aug 2021 - Aug 2026", "Sep 2024 - Jul 2026", "Dec 2025 & Jan 2026", "Sep 2020 - Jun 2023"],
      experienceAlts: ["Cancell Insight platform and LINE Bot integration", "CODE2SPEC documentation automation interface", "Orange Apple online programming class", "NCHU teaching assistant session", "AI and data science workshop"],
      experienceDetails: [
        ["Medical imaging AI brought to production", "I worked across wound-image models, backend APIs, and LINE Bot delivery, migrating existing Cancell Insight Web capabilities into an accessible service.", ["Integrated five AI models, LINE Messaging API, and data flows, completing development and production launch in three weeks.", "Prepared wound-image data, tested and validated YOLO models, and built inference APIs with Django.", "Contributed to a smart-healthcare industry-academia project with China Medical University and used Git for development, testing, and fixes."]],
        ["Software documentation automation", "I combined static code analysis with AI document generation to parse Java method logic and produce consistent SPEC documents.", ["Reduced analysis and document generation for a single method to approximately five seconds.", "Developed Java functionality and analyzed program architecture for an enterprise internal system.", "Used Git throughout requirements discussions, implementation, testing, and issue resolution."]],
        ["Five years of teaching and workflow improvement", "I adapted small-group lessons, projects, and APCS preparation to students of different ages and skill levels.", ["Provided real-time debugging and technical guidance to build independent problem-solving skills.", "Designed teaching materials, exercises, and assessments, continuously improving them from student feedback.", "Built an AI learning-record assistant that cut each post-class write-up from minutes to tens of seconds and is used in daily teaching."]],
        ["Course support and an on-premises RAG assistant", "I helped students connect preprocessing, modeling, and interpretation, then turned recurring questions into a self-service course tool.", ["Supported course planning, materials, grading, mentoring, and hands-on technical assistance.", "Built an on-premises RAG assistant with Open WebUI, ChromaDB, and a local LLM for course and assignment Q&A.", "Extended it with quiz generation and chapter summaries; the work received Ministry of Education project support and a departmental honorable mention."]],
        ["AI workshop design and instruction", "I translated data science and machine learning into activities high school students could immediately run, observe, and discuss.", ["Created interactive Python labs that lowered the barrier to AI and data mining.", "Used datasets and model outputs to explain analytical workflows and result interpretation.", "Structured each workshop into concept, practice, discussion, and recap stages."]],
        ["Teaching, organization, and public communication", "These earlier experiences are grouped to preserve the capability story without adding several separate resume sections.", ["Taught Minecraft Education through loops, conditions, functions, and variables, guiding students to complete game projects.", "Managed event budgets, purchasing, reimbursements, and cross-team resource allocation as MIS Student Association treasurer.", "Planned lessons and materials as Magic Club education director, developing leadership, public speaking, and improvisation skills."]]
      ],
      projects: [
        ["Thyroid Ultrasound Nodule Detection, Segmentation, and Classification", "YOLO / CNN / Transformer / Medical Imaging"],
        ["SnapDiet Nutrition Assistant", "OpenAI Vision / LINE Bot / Django / PostgreSQL / Docker"],
        ["OpenPediCare", "Django / AI summary / Parent portal / PDF output"],
        ["Orange Apple AI Learning-Record Assistant", "Teaching workflow / LLM / Web app / Production use"],
        ["Talk2Draw", "Django / Web Speech API / Search / Slides / Ollama"],
        ["LightRAG Harry Potter / Local AI Teaching Assistant", "Graph retrieval / Local LLM / LlamaIndex / Open WebUI"]
      ],
      projectChips: ["Master's Thesis", "Product", "Healthcare", "EdTech", "Capstone", "RAG"],
      projectLinkLabels: [[], ["Live Site"], ["GitHub / README"], ["Live Site"], ["GitHub / README"], ["LightRAG Repo", "LlamaIndex Repo"]],
      thesisButton: "Full Thesis",
      projectDetails: [
        ["Project Summary", "In collaboration with a medical partner, I built a thyroid ultrasound dataset and connected nodule detection, segmentation, and benign/malignant classification into a clinical-assistance workflow.", ["Used YOLO-series models for nodule detection and image segmentation.", "Combined CNN and Transformer models for benign/malignant classification.", "Achieved 0.84 detection mAP@50:95 and an approximately 0.90 segmentation Dice score."]],
        ["Project Summary", "SnapDiet analyzes meal photos, returns nutritional estimates, and logs daily intake. It is deployed on Zeabur and remains in active operation.", ["Integrates OpenAI Vision, LINE Messaging API, PostgreSQL, Docker, and Django.", "Reached nearly 500 LINE Official Account friends within its first month.", "Improved recommendations with a registered dietitian and independently delivered requirements, development, containerization, and deployment."]],
        ["README Summary", "OpenPediCare is a pediatric follow-up workspace. After a doctor completes a visit record, the system can generate visit summaries, parent education content, share pages, and PDFs.", ["Built with Django for doctor and parent roles.", "Integrates the browser Web Speech API for transcript workflows.", "Outputs shareable pages and PDFs to improve medical communication."]],
        ["Project Summary", "This system combines course data with a few student-performance keywords to generate consistent, natural post-class learning records and is used in daily teaching.", ["Stores course materials, key concepts, and assessment prompts so outputs reflect the actual lesson.", "Uses an LLM to generate complete learning records from the selected course and a few keywords.", "Reduced post-class administration from several minutes to tens of seconds while improving consistency."]],
        ["Project Summary", "As team lead and primary developer, I integrated semantic analysis, visual information, search, presentation, and conversation features; the project won first place in the departmental capstone competition.", ["Transforms natural language into visual and searchable context.", "Supports spoken presentations and conversation-organizing workflows.", "Owned scheduling, work allocation, backend architecture, API integration, and overall system integration."]],
        ["Project Summary", "These projects combine graph retrieval for complex relationship queries with an on-premises assistant for student access to course materials and assignments.", ["Uses graph retrieval to improve complex relationship queries.", "Built the course assistant with Open WebUI, ChromaDB, and a local LLM.", "Extended it with quiz generation and summaries; it received teaching-practice project support and a departmental honorable mention."]]
      ],
      writingIntro: ["Medium / HackMD", "Long-form technical essays, research notes, and teaching memos now live in a dedicated article library so the resume page stays focused."],
      writingLinks: ["View More", "Open Full Library"],
      leetcode: {
        profileLink: "Open Profile",
        metrics: [
          ["Global Ranking", "Public profile rank"],
          ["Solved Problems", "accepted submissions"],
          ["Contest Rating", "Top"]
        ],
        difficulties: ["Easy", "Medium", "Hard"],
        calendar: ["Submission Activity", "submissions across", "active days"],
        submissions: ["Recent Submissions", "Latest public attempts from LeetCode"]
      },
      certificates: [
        ["TOEIC 745", "English proficiency certificate"],
        ["Graduation Project Competition", "First place"],
        ["Systems Analysis and Design", "Third place"],
        ["Systems Analysis and Design", "Excellence class award"],
        ["Golden Craftsman Award", "Individual finalist"],
        ["Golden Craftsman Award", "Team finalist"],
        ["ChatGPT System Hackathon", "System development participation"],
        ["ChatBot Hackathon", "Completion certificate"],
        ["AI and Big Data Competition", "Honorable mention"],
        ["Data-driven Innovation", "Application workshop"],
        ["Database Competition", "First place"],
        ["Excel Power Tools", "Data analysis course certificate"],
        ["Academic Excellence Award", "Department second place"]
      ],
      footerLabels: ["CONTACT", "FOLLOW ME", "TOP PROJECT", "NOW WORKING"]
    },
    zh: {
      title: "段浩恩 Howard Tuan",
      tagline: "國立中興大學資訊管理研究所<br>Medical Imaging AI | RAG Systems | Product-minded Builder",
      pageTitle: "段浩恩 Howard Tuan｜AI 與軟體工程",
      pageDescription: "段浩恩 Howard Tuan 的個人履歷與作品集，聚焦醫療影像 AI、LLM/RAG、後端系統與可部署 AI 產品。",
      profile: "我是國立中興大學資訊管理研究所碩士生，預計 2026 年 8 月畢業。專注於 <strong>醫療影像 AI、LLM/RAG、後端系統與雲端部署</strong>，具備從模型開發、API 建置到產品上線的端到端實作經驗。",
      metrics: [
        ["4 / 45", "碩班排名", "中興資管所｜GPA 4.21 / 4.3"],
        ["0.84 / ≈0.90", "論文 mAP / Dice", "甲狀腺超音波偵測與分割"],
        ["3 週 / 5 模型", "產品上線", "醫療 AI × LINE Bot"],
        ["近 500 位", "產品採用", "SnapDiet 上線首月 LINE 好友"]
      ],
      sectionTitles: {
        education: "學歷",
        experience: "工作經驗",
        projects: "專案",
        leetcode: "LEETCODE",
        github: "GITHUB",
        writing: "文章",
        certificates: "獎狀 / 證書"
      },
      education: [
        ["國立中興大學 資訊管理學研究所", "碩班排名 4/45，平均成績 92.4，GPA 4.21/4.3。", "論文：基於深度學習模型應用於甲狀腺超音波影像之良惡性結節偵測、分割與分類研究。"],
        ["中原大學 資訊管理學系", "畢業排名 12/113，平均成績 88.31，GPA 3.92/4。", "畢業專題：話中有畫。"],
        ["新北高工 資料處理科", "科排 6%，建立商管、會計、資料處理與網頁設計基礎。"]
      ],
      educationDates: ["2024 - 2026（預計 2026 年 8 月畢業）", "2020 - 2024", "2017 - 2020"],
      experience: [
        ["AI 軟體工程實習生 / 健細胞科技", "以 YOLO、Python 與 Django 開發醫療影像推論服務，3 週內完成 5 個 AI 模型與 LINE Bot 整合並正式上線。"],
        ["軟體工程實習生 / 國泰人壽軟體桃園開發中心", "開發 Java 程式逆向分析工具，將單一 Method 的 SPEC 文件生成時間縮短至平均約 5 秒。"],
        ["線上程式設計老師 / 橘子蘋果程式學苑", "五年教授 Scratch、Python、HTML/CSS、JavaScript、資料庫、演算法與 APCS，並以 AI 工具改善課後行政流程。"],
        ["教學助理 / 國立中興大學資訊管理學系", "支援資料探勘、大數據分析與 AI 課程的教材整理、作業評分、學生輔導及 Python 實作。"],
        ["AI 與資料科學工作坊講師 / 國立中興大學附中", "規劃互動式 Python 實作，帶領高中學生從資料處理進入資料探勘與機器學習。"],
        ["早期教學與學生領導經驗", "整合 Minecraft Education 程式教學、資管系系學會總務長與魔術社教學長經歷。"]
      ],
      experienceDates: ["2026 年 2 月－3 月", "2024 年 2 月－6 月", "2021 年 8 月－2026 年 8 月", "2024 年 9 月－2026 年 7 月", "2025 年 12 月、2026 年 1 月", "2020 年 9 月－2023 年 6 月"],
      experienceAlts: ["Cancell Insight 平台與 LINE Bot 整合畫面", "CODE2SPEC 文件自動化介面", "橘子蘋果線上程式課堂", "國立中興大學教學助理課程畫面", "AI 與資料科學工作坊教學現場"],
      experienceDetails: [
        ["醫療影像 AI 與產品落地", "參與傷口辨識模型、後端 API 與 LINE Bot 的完整開發流程，將既有 Cancell Insight Web 功能轉為可直接使用的服務。", ["整合 5 個 AI 模型、LINE Messaging API 與資料流程，3 週內開發完成並正式上線。", "使用 YOLO 參與傷口影像資料整理、模型測試與效能驗證；以 Django 建置推論 API。", "參與中國醫藥大學產學合作智慧醫療專案，使用 Git 完成功能開發、測試與問題修正。"]],
        ["軟體文件自動化", "結合靜態程式分析與 AI 文件生成，自動解析 Java Method 邏輯並產生一致的 SPEC 文件。", ["將單一 Method 的分析與文件產出時間縮短至平均約 5 秒。", "使用 Java 進行企業內部系統功能開發與程式架構分析。", "以 Git 參與需求討論、功能開發、測試與問題修正，熟悉企業軟體工程流程。"]],
        ["五年教學與流程改善", "依學生年齡與程度規劃小班課程、專題任務與 APCS 訓練，把抽象概念轉成可操作的練習。", ["提供即時除錯、學習引導與技術諮詢，培養學生的邏輯思考與自主解題能力。", "設計教材、練習題與驗收活動，並依學習回饋持續調整課程節奏。", "開發 AI 聯絡簿生成系統，將每次課程紀錄由數分鐘縮短至數十秒，已用於日常教學。"]],
        ["課程支援與地端 RAG 助教", "協助學生串起資料前處理、模型訓練與結果解讀，並把重複問答轉為可自主查詢的課程工具。", ["支援課程規劃、教材整理、作業批改、學生輔導與實作技術支援。", "以 Open WebUI、ChromaDB 與本地 LLM 建置 RAG 助教，支援教材與作業問答。", "系統延伸至自動出題與章節摘要，獲教育部教學實踐研究計畫支持及系上專題競賽佳作。"]],
        ["AI 工作坊設計與授課", "把資料科學與機器學習概念拆成高中生能立即操作、觀察並討論的活動。", ["以互動式 Python 實作降低第一次接觸 AI 與資料探勘的門檻。", "使用資料集與模型輸出引導學生理解分析流程及結果意義。", "將課程組織為概念、實作、討論與成果整理四個階段。"]],
        ["教學、組織與公開表達", "將三段較早期但具延續性的經歷整合呈現，保留能力脈絡而不增加過多獨立欄位。", ["於夢想機器人教室教授 Minecraft Education，以迴圈、條件、函式與變數帶領學生完成遊戲專案。", "擔任資管系系學會總務長，負責活動預算、採購核銷、資源配置與跨部門協作。", "擔任魔術社教學長，規劃社課與教材、帶領社員學習，培養公開表達、領導與臨場應變能力。"]]
      ],
      projects: [
        ["甲狀腺超音波結節偵測、分割與分類研究", "YOLO / CNN / Transformer / Medical Imaging"],
        ["SnapDiet 飲控小幫手", "OpenAI Vision / LINE Bot / Django / PostgreSQL / Docker"],
        ["OpenPediCare", "Django / AI summary / Parent portal / PDF output"],
        ["橘子蘋果 AI 聯絡簿生成系統", "Teaching workflow / LLM / Web app / Production use"],
        ["話中有畫", "Django / Web Speech API / Search / Slides / Ollama"],
        ["LightRAG Harry Potter / Local AI Teaching Assistant", "Graph retrieval / Local LLM / LlamaIndex / Open WebUI"]
      ],
      projectChips: ["碩士論文", "產品", "醫療科技", "教育科技", "畢業專題", "RAG"],
      projectLinkLabels: [[], ["線上體驗"], ["GitHub / README"], ["線上體驗"], ["GitHub / README"], ["LightRAG 程式庫", "LlamaIndex 程式庫"]],
      thesisButton: "論文全文",
      projectDetails: [
        ["專案摘要", "與醫療單位合作建立甲狀腺超音波資料集，串接結節偵測、分割與良惡性分類，形成可展示的臨床輔助流程。", ["使用 YOLO 系列模型進行結節位置偵測與影像分割。", "結合 CNN 與 Transformer 完成良惡性分類。", "偵測 mAP@50:95 達 0.84、分割 Dice Score 約 0.90。"]],
        ["專案摘要", "SnapDiet 讓使用者拍攝餐點後即可取得營養分析並記錄每日飲食，已部署至 Zeabur 並持續維運。", ["整合 OpenAI Vision、LINE Messaging API、PostgreSQL、Docker 與 Django。", "上線一個月內累積近 500 位 LINE 官方帳號好友。", "與專業營養師合作改善分析與建議，獨立完成需求、開發、容器化及部署。"]],
        ["README 摘要", "OpenPediCare 是兒科回診後照護工作區，醫師完成看診紀錄後，可生成回診摘要、家長衛教、分享頁面與 PDF。", ["以 Django 建立醫師與家長雙角色使用情境。", "整合瀏覽器 Web Speech API，支援逐字稿流程。", "輸出可分享頁面與 PDF，提升醫療溝通效率。"]],
        ["專案摘要", "依課程資料與少量學生表現關鍵字自動生成自然、一致的課後紀錄，已實際用於日常教學。", ["建立課程教材、重點知識與驗收問題資料，讓輸出貼合實際教學內容。", "以 LLM 根據課程與少量表現關鍵字產生完整學習紀錄。", "將原本數分鐘的課後行政流程縮短至數十秒，提升內容一致性。"]],
        ["專案摘要", "擔任團隊組長與主要開發者，整合語意分析、視覺資訊、搜尋、簡報與對話功能；作品獲系上畢業專題競賽第一名。", ["將自然語言轉成視覺化且可搜尋的資訊。", "支援口說簡報與對話整理流程。", "負責時程規劃、工作分配、後端架構、API 串接與整體系統整合。"]],
        ["專案摘要", "整合圖譜檢索與地端課程問答：一套處理複雜關係查詢，一套支援學生自主查詢教材與作業。", ["使用圖結構檢索改善複雜角色關係查詢。", "以 Open WebUI、ChromaDB 與本地 LLM 建置課程 RAG 助教。", "導入課程後延伸自動出題與摘要，獲教學實踐研究計畫支持及系上佳作。"]]
      ],
      writingIntro: ["Medium / HackMD", "長篇技術文章、研究筆記、教學 memo 集中到獨立文章庫，首頁只保留最新與精選內容。"],
      writingLinks: ["查看更多", "完整文章庫"],
      leetcode: {
        profileLink: "開啟 LeetCode",
        metrics: [
          ["全球排名", "公開個人頁排名"],
          ["已解題目", "次通過提交"],
          ["競賽分數", "前"]
        ],
        difficulties: ["簡單", "中等", "困難"],
        calendar: ["提交活躍紀錄", "次提交，分布於", "個活躍日"],
        submissions: ["最近提交", "LeetCode 上最新的公開提交紀錄"]
      },
      certificates: [
        ["TOEIC 745", "英文能力檢定"],
        ["畢業專題競賽", "第一名"],
        ["系統分析與設計", "第三名"],
        ["系統分析與設計", "卓越班級獎"],
        ["金匠獎", "個人賽入圍決賽"],
        ["金匠獎", "團體賽入圍決賽"],
        ["ChatGPT 系統開發黑客松", "系統開發參與證明"],
        ["ChatBot 黑客松", "完賽證明"],
        ["AI 與大數據創意競賽", "佳作"],
        ["數據驅動創新應用大賽", "工作坊證明"],
        ["資料庫競賽", "第一名"],
        ["Excel Power Tools", "資料分析課程證書"],
        ["系學績優獎", "第二名"]
      ],
      footerLabels: ["聯絡方式", "社群連結", "代表專案", "目前主軸"]
    }
  };

  const page = {
    en: {
      resumeEn: "Resume EN",
      resumeZh: "Resume ZH",
      skip: "Skip to main content",
      back: "Back to resume",
      allArticles: "All Articles",
      articleIntro: "Medium tutorials and HackMD notes for technical builds, ZeroJudge APCS practice, LeetCode algorithm review, and information sharing.",
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
      filters: ["All", "Medium", "HackMD", "Tech", "ZeroJudge", "LeetCode", "Info Sharing"],
      pagerPrev: "Previous",
      pagerNext: "Next",
      toggle: "中文"
    },
    zh: {
      resumeEn: "英文履歷",
      resumeZh: "中文履歷",
      skip: "跳到主要內容",
      back: "回履歷首頁",
      allArticles: "所有文章",
      articleIntro: "整理 Medium 技術教學與 HackMD 筆記，包含技術實作、ZeroJudge APCS、LeetCode 演算法與資訊分享文章。",
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
      filters: ["全部", "Medium", "HackMD", "技術實作", "ZeroJudge", "LeetCode", "資訊分享"],
      pagerPrev: "上一頁",
      pagerNext: "下一頁",
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
    document.title = copy.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.pageDescription);
    setText("#education .section-title span", copy.sectionTitles.education);
    setText("#experience .section-title span", copy.sectionTitles.experience);
    setText("#projects .section-title span", copy.sectionTitles.projects);
    setText("#leetcode .section-title span", copy.sectionTitles.leetcode);
    setText("#github .section-title span", copy.sectionTitles.github);
    setText("#writing .section-title span", copy.sectionTitles.writing);
    setText("#certifications .section-title span", copy.sectionTitles.certificates);

    setList("#profile .metric-box", copy.metrics, (card, value) => {
      card.querySelector(".metric-number").textContent = value[0];
      card.querySelector(".metric-label").textContent = value[1];
      card.querySelector(".metric-note").textContent = value[2];
    });

    setList("#education .info-card", copy.education, (card, value) => {
      card.querySelector("h3").textContent = value[0];
      card.querySelectorAll("p").forEach((paragraph, index) => {
        paragraph.textContent = value[index + 1] || "";
      });
    });
    setList("#education .info-card time", copy.educationDates, (node, value) => {
      node.textContent = value;
    });

    setList("#experience .timeline-card", copy.experience, (card, value) => {
      card.querySelector("h3").textContent = value[0];
      card.querySelector("summary > p").textContent = value[1];
    });
    setList("#experience .timeline-badge", copy.experienceDates, (node, value) => {
      node.textContent = value;
    });
    setList("#experience .experience-visual img", copy.experienceAlts, (node, value) => {
      node.alt = value;
    });

    setList("#experience .timeline-card", copy.experienceDetails, (card, value) => {
      const detail = card.querySelector(".experience-detail");
      if (!detail) {
        return;
      }

      detail.querySelector("h4").textContent = value[0];
      detail.querySelector("p").textContent = value[1];
      detail.querySelectorAll("li").forEach((item, index) => {
        item.textContent = value[2][index] || "";
      });
    });

    setList("#projects .project-tile", copy.projects, (card, value) => {
      card.querySelector("h3").textContent = value[0];
      card.querySelector("summary p").textContent = value[1];
    });
    setList("#projects .project-chip", copy.projectChips, (node, value) => {
      node.textContent = value;
    });
    setList("#projects .project-tile", copy.projectLinkLabels, (card, values) => {
      card.querySelectorAll(".project-links a").forEach((link, index) => {
        if (values[index]) {
          link.textContent = values[index];
        }
      });
    });

    setText("[data-thesis-button]", copy.thesisButton);

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

    setText("#leetcode .split-section-head .glass-link", copy.leetcode.profileLink);
    setList("#leetcode .leetcode-metric", copy.leetcode.metrics, (card, value, index) => {
      card.querySelector(".metric-label").textContent = value[0];
      if (index === 1) {
        card.querySelector("[data-leetcode-accepted-label]").textContent = value[1];
      } else if (index === 2) {
        card.querySelector("[data-leetcode-top-label]").textContent = value[1];
      } else {
        card.querySelector(".metric-note").textContent = value[1];
      }
    });
    setList("#leetcode .difficulty-row", copy.leetcode.difficulties, (row, value) => {
      row.querySelector(".difficulty-name").textContent = value;
    });
    setText("#leetcode .leetcode-calendar-card h3", copy.leetcode.calendar[0]);
    setText("[data-leetcode-calendar-total-label]", copy.leetcode.calendar[1]);
    setText("[data-leetcode-calendar-days-label]", copy.leetcode.calendar[2]);
    setText("#leetcode .leetcode-submissions-card h3", copy.leetcode.submissions[0]);
    setText("#leetcode .leetcode-submissions-card .leetcode-card-head p", copy.leetcode.submissions[1]);

    setList("#certifications .certificate-card", copy.certificates, (card, value) => {
      card.dataset.certificateTitle = value[0];
      card.querySelector("strong").textContent = value[0];
      card.querySelector("span:last-child").textContent = value[1];
    });

    document.querySelectorAll(".footer-shell h4").forEach((heading, index) => {
      if (copy.footerLabels[index]) {
        heading.textContent = copy.footerLabels[index];
      }
    });
  };

  const applyPage = (lang) => {
    const copy = page[lang];
    const navLabels = lang === "zh"
      ? ["簡介", "學歷", "經歷", "專案", "GITHUB", "LEETCODE", "文章", "獎狀證書", "聯絡"]
      : ["PROFILE", "EDUCATION", "EXPERIENCE", "PROJECTS", "GITHUB", "LEETCODE", "WRITING", "CERTS", "CONTACT"];

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

    document.querySelectorAll("[data-page-prev] span").forEach((node) => {
      node.textContent = copy.pagerPrev;
    });
    document.querySelectorAll("[data-page-next] span").forEach((node) => {
      node.textContent = copy.pagerNext;
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
    window.dispatchEvent(new CustomEvent("site-language-change", { detail: { lang: normalized } }));
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
