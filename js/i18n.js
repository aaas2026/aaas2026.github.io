// ===== AAAS 2026 Internationalization =====
const translations = {
  // ──────────── English ────────────
  en: {
    // Nav
    nav_home: "Home",
    nav_about: "About",
    nav_topics: "Topics",
    nav_dates: "Important Dates",
    nav_speakers: "Speakers",
    nav_registration: "Registration",
    nav_venue: "Venue",
    nav_contact: "Contact",

    // Site
    site_title: "AAAS 2026 - Agentic AI Applications Symposium",

    // Hero
    hero_title: "AAAS 2026 - Agentic AI Applications Symposium",
    hero_subtitle: "2026 Agentic AI Applications Symposium",
    hero_date: "June 15, 2026 | Penghu, Taiwan",
    hero_btn_register: "Register Now",
    hero_btn_speakers: "View Speakers",

    // About
    about_title: "About AAAS 2026",
    about_organizer: "Organized by National Penghu University of Science and Technology (NPU)",
    about_text: "The 2026 Agentic AI Applications Symposium (AAAS 2026), organized by National Penghu University of Science and Technology, brings together researchers, practitioners, and industry leaders to explore the rapidly evolving landscape of agentic artificial intelligence and its real-world applications. This technical forum features invited talks by leading experts, focusing on autonomous AI agents that can perceive, reason, plan, and act in complex real-world environments.",

    // Topics
    topics_title: "Forum Topics",
    topic1_title: "Agentic AI Foundations",
    topic1_desc: "Large Language Model agents, multi-agent systems, autonomous reasoning, planning and decision-making, tool use and function calling.",
    topic2_title: "AI-Powered Robotics",
    topic2_desc: "Robot learning, embodied AI, manipulation, locomotion, human-robot interaction, and collaborative robotics.",
    topic3_title: "Generative AI for Robotics",
    topic3_desc: "Generative models for robot control, scene understanding, sim-to-real transfer, and synthetic data generation.",
    topic4_title: "Autonomous Systems",
    topic4_desc: "Self-driving vehicles, drone navigation, warehouse automation, and multi-robot coordination.",
    topic5_title: "Safety & Ethics",
    topic5_desc: "AI alignment, robustness, explainability, responsible AI deployment, and regulatory frameworks.",
    topic6_title: "Industry Applications",
    topic6_desc: "Smart manufacturing, healthcare robotics, agricultural automation, service robots, and digital twins.",

    // Dates
    dates_title: "Important Dates",
    dates_event: "Event",
    dates_date: "Date",
    date1_event: "Early Bird Registration",
    date1_date: "May 15, 2026",
    date2_event: "Registration Deadline",
    date2_date: "June 1, 2026",
    date3_event: "Symposium Date",
    date3_date: "June 15, 2026",

    // Speakers
    speakers_title: "Invited Speakers",
    speaker1_name: "Professor A",
    speaker1_affil: "Affiliation TBA",
    speaker1_topic: "Topic TBA",
    speaker2_name: "Professor B",
    speaker2_affil: "Affiliation TBA",
    speaker2_topic: "Topic TBA",
    speaker3_name: "Professor C",
    speaker3_affil: "Affiliation TBA",
    speaker3_topic: "Topic TBA",
    speaker4_name: "Professor D",
    speaker4_affil: "Affiliation TBA",
    speaker4_topic: "Topic TBA",

    // Registration
    reg_title: "Registration",
    reg_free: "This forum is free of charge. Please register via the link below.",
    reg_btn: "Register Now",

    // Venue
    venue_title: "Venue",
    venue_name: "National Penghu University of Science and Technology",
    venue_addr: "No. 300, Liu-Ho Rd., Magong City, Penghu County 880, Taiwan",
    venue_desc: "Located on the beautiful Penghu Islands, NPU offers modern conference facilities surrounded by stunning ocean scenery. Penghu is accessible by domestic flights and ferry from Taiwan's main island.",

    // Contact
    contact_title: "Contact Us",
    contact_text: "For inquiries about AAAS 2026, please contact us at:",
    contact_email: "aars2026@gmail.com",
    contact_follow: "Follow us for updates",

    // Footer
    footer_copy: "© 2026 AAAS 2026 Organizing Committee. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use",
    footer_top: "↑ Back to Top",
  },

  // ──────────── 繁體中文 ────────────
  "zh-TW": {
    nav_home: "首頁",
    nav_about: "關於",
    nav_topics: "主題",
    nav_dates: "重要日期",
    nav_speakers: "演講者",
    nav_registration: "報名",
    nav_venue: "會場",
    nav_contact: "聯絡",

    site_title: "AAAS 2026 - AI代理應用論壇",

    hero_title: "AAAS 2026 - AI代理應用論壇",
    hero_subtitle: "2026 AI代理應用論壇",
    hero_date: "2026年6月15日 | 台灣澎湖",
    hero_btn_register: "立即報名",
    hero_btn_speakers: "查看演講者",

    about_title: "關於 AAAS 2026",
    about_organizer: "主辦單位：國立澎湖科技大學",
    about_text: "2026年AI代理應用論壇（AAAS 2026）由國立澎湖科技大學主辦，匯集研究人員、實務工作者及業界領袖，共同探索AI代理技術的快速發展趨勢及其實際應用。本技術論壇邀請頂尖專家進行專題演講，聚焦於能夠在複雜真實環境中感知、推理、規劃和行動的自主AI代理。",

    topics_title: "論壇主題",
    topic1_title: "AI代理基礎",
    topic1_desc: "大型語言模型代理、多代理系統、自主推理、規劃與決策、工具使用與函式呼叫。",
    topic2_title: "AI驅動機器人",
    topic2_desc: "機器人學習、具身AI、操作、移動、人機互動與協作機器人。",
    topic3_title: "生成式AI於機器人應用",
    topic3_desc: "機器人控制的生成模型、場景理解、模擬到現實轉移、合成數據生成。",
    topic4_title: "自主系統",
    topic4_desc: "自動駕駛車輛、無人機導航、倉儲自動化及多機器人協調。",
    topic5_title: "安全與倫理",
    topic5_desc: "AI對齊、穩健性、可解釋性、負責任的AI部署及監管框架。",
    topic6_title: "產業應用",
    topic6_desc: "智慧製造、醫療機器人、農業自動化、服務機器人及數位孿生。",

    dates_title: "重要日期",
    dates_event: "事項",
    dates_date: "日期",
    date1_event: "早鳥報名",
    date1_date: "2026年5月15日",
    date2_event: "報名截止",
    date2_date: "2026年6月1日",
    date3_event: "論壇日期",
    date3_date: "2026年6月15日",

    speakers_title: "特邀演講者",
    speaker1_name: "A 教授",
    speaker1_affil: "單位待公佈",
    speaker1_topic: "講題待公佈",
    speaker2_name: "B 教授",
    speaker2_affil: "單位待公佈",
    speaker2_topic: "講題待公佈",
    speaker3_name: "C 教授",
    speaker3_affil: "單位待公佈",
    speaker3_topic: "講題待公佈",
    speaker4_name: "D 教授",
    speaker4_affil: "單位待公佈",
    speaker4_topic: "講題待公佈",

    reg_title: "報名",
    reg_free: "本論壇免費參加，請透過以下連結報名。",
    reg_btn: "立即報名",

    venue_title: "會場資訊",
    venue_name: "國立澎湖科技大學",
    venue_addr: "台灣澎湖縣馬公市六合路300號 (880)",
    venue_desc: "位於美麗的澎湖群島，國立澎湖科技大學擁有現代化的會議設施，周圍環繞壯麗的海洋景觀。澎湖可從台灣本島搭乘國內航班或渡輪抵達。",

    contact_title: "聯絡我們",
    contact_text: "如有關於 AAAS 2026 的問題，請聯繫：",
    contact_email: "aars2026@gmail.com",
    contact_follow: "關注我們以獲取最新消息",

    footer_copy: "© 2026 AAAS 2026 組織委員會。保留所有權利。",
    footer_privacy: "隱私權政策",
    footer_terms: "使用條款",
    footer_top: "↑ 回到頂端",
  },

  // ──────────── 日本語 ────────────
  ja: {
    nav_home: "ホーム",
    nav_about: "概要",
    nav_topics: "トピック",
    nav_dates: "重要な日程",
    nav_speakers: "講演者",
    nav_registration: "参加登録",
    nav_venue: "会場",
    nav_contact: "お問い合わせ",

    site_title: "AAAS 2026 - エージェントAIアプリケーションシンポジウム",

    hero_title: "AAAS 2026 - エージェントAIアプリケーションシンポジウム",
    hero_subtitle: "2026 エージェントAIアプリケーションシンポジウム",
    hero_date: "2026年6月15日 | 台湾・澎湖",
    hero_btn_register: "参加登録",
    hero_btn_speakers: "講演者を見る",

    about_title: "AAAS 2026について",
    about_organizer: "主催：国立澎湖科技大学（NPU）",
    about_text: "2026年エージェントAIアプリケーションシンポジウム（AAAS 2026）は、国立澎湖科技大学の主催により、研究者、実務者、産業界のリーダーを集め、エージェント型人工知能の急速な発展とその実世界での応用を探究します。本技術フォーラムでは、トップレベルの専門家による招待講演を通じて、複雑な実世界環境で知覚、推論、計画、行動できる自律型AIエージェントに焦点を当てます。",

    topics_title: "フォーラムトピック",
    topic1_title: "エージェントAI基盤",
    topic1_desc: "大規模言語モデルエージェント、マルチエージェントシステム、自律的推論、計画と意思決定、ツール利用と関数呼び出し。",
    topic2_title: "AI駆動ロボティクス",
    topic2_desc: "ロボット学習、身体性AI、マニピュレーション、移動、人間-ロボットインタラクション、協働ロボティクス。",
    topic3_title: "ロボティクスのための生成AI",
    topic3_desc: "ロボット制御のための生成モデル、シーン理解、シミュレーションから現実への転移、合成データ生成。",
    topic4_title: "自律システム",
    topic4_desc: "自動運転車両、ドローンナビゲーション、倉庫自動化、マルチロボット協調。",
    topic5_title: "安全性と倫理",
    topic5_desc: "AIアライメント、ロバスト性、説明可能性、責任あるAI展開、規制フレームワーク。",
    topic6_title: "産業応用",
    topic6_desc: "スマート製造、医療ロボティクス、農業自動化、サービスロボット、デジタルツイン。",

    dates_title: "重要な日程",
    dates_event: "イベント",
    dates_date: "日付",
    date1_event: "早期割引登録",
    date1_date: "2026年5月15日",
    date2_event: "参加登録締切",
    date2_date: "2026年6月1日",
    date3_event: "シンポジウム開催日",
    date3_date: "2026年6月15日",

    speakers_title: "招待講演者",
    speaker1_name: "A 教授",
    speaker1_affil: "所属先未定",
    speaker1_topic: "講演テーマ未定",
    speaker2_name: "B 教授",
    speaker2_affil: "所属先未定",
    speaker2_topic: "講演テーマ未定",
    speaker3_name: "C 教授",
    speaker3_affil: "所属先未定",
    speaker3_topic: "講演テーマ未定",
    speaker4_name: "D 教授",
    speaker4_affil: "所属先未定",
    speaker4_topic: "講演テーマ未定",

    reg_title: "参加登録",
    reg_free: "本フォーラムは無料です。以下のリンクからご登録ください。",
    reg_btn: "今すぐ登録",

    venue_title: "会場情報",
    venue_name: "国立澎湖科技大学",
    venue_addr: "台湾 澎湖県馬公市六合路300号 (880)",
    venue_desc: "美しい澎湖諸島に位置する国立澎湖科技大学は、壮大な海の景色に囲まれた近代的な会議施設を備えています。澎湖へは台湾本島から国内線またはフェリーでアクセスできます。",

    contact_title: "お問い合わせ",
    contact_text: "AAAS 2026に関するお問い合わせは、以下までご連絡ください：",
    contact_email: "aars2026@gmail.com",
    contact_follow: "最新情報はこちら",

    footer_copy: "© 2026 AAAS 2026 組織委員会。全著作権所有。",
    footer_privacy: "プライバシーポリシー",
    footer_terms: "利用規約",
    footer_top: "↑ ページトップへ",
  },

  // ──────────── Bahasa Indonesia ────────────
  id: {
    nav_home: "Beranda",
    nav_about: "Tentang",
    nav_topics: "Topik",
    nav_dates: "Tanggal Penting",
    nav_speakers: "Pembicara",
    nav_registration: "Pendaftaran",
    nav_venue: "Lokasi",
    nav_contact: "Kontak",

    site_title: "AAAS 2026 - Simposium Aplikasi AI Agentik",

    hero_title: "AAAS 2026 - Simposium Aplikasi AI Agentik",
    hero_subtitle: "2026 Simposium Aplikasi AI Agentik",
    hero_date: "15 Juni 2026 | Penghu, Taiwan",
    hero_btn_register: "Daftar Sekarang",
    hero_btn_speakers: "Lihat Pembicara",

    about_title: "Tentang AAAS 2026",
    about_organizer: "Diselenggarakan oleh National Penghu University of Science and Technology (NPU)",
    about_text: "Simposium Aplikasi AI Agentik 2026 (AAAS 2026), diselenggarakan oleh National Penghu University of Science and Technology, mempertemukan peneliti, praktisi, dan pemimpin industri untuk mengeksplorasi perkembangan pesat kecerdasan buatan agentik dan aplikasinya di dunia nyata. Forum teknis ini menampilkan presentasi undangan dari para pakar terkemuka, berfokus pada agen AI otonom yang mampu merasakan, bernalar, merencanakan, dan bertindak di lingkungan dunia nyata yang kompleks.",

    topics_title: "Topik Forum",
    topic1_title: "Fondasi AI Agentik",
    topic1_desc: "Agen model bahasa besar, sistem multi-agen, penalaran otonom, perencanaan dan pengambilan keputusan, penggunaan alat dan pemanggilan fungsi.",
    topic2_title: "Robotika Berbasis AI",
    topic2_desc: "Pembelajaran robot, AI berwujud, manipulasi, lokomotion, interaksi manusia-robot, dan robotika kolaboratif.",
    topic3_title: "AI Generatif untuk Robotika",
    topic3_desc: "Model generatif untuk kontrol robot, pemahaman adegan, transfer sim-ke-real, dan pembuatan data sintetis.",
    topic4_title: "Sistem Otonom",
    topic4_desc: "Kendaraan otonom, navigasi drone, otomasi gudang, dan koordinasi multi-robot.",
    topic5_title: "Keamanan & Etika",
    topic5_desc: "Penyelarasan AI, ketangguhan, penjelasan, penerapan AI yang bertanggung jawab, dan kerangka regulasi.",
    topic6_title: "Aplikasi Industri",
    topic6_desc: "Manufaktur cerdas, robotika kesehatan, otomasi pertanian, robot layanan, dan digital twin.",

    dates_title: "Tanggal Penting",
    dates_event: "Acara",
    dates_date: "Tanggal",
    date1_event: "Pendaftaran Early Bird",
    date1_date: "15 Mei 2026",
    date2_event: "Batas Pendaftaran",
    date2_date: "1 Juni 2026",
    date3_event: "Tanggal Simposium",
    date3_date: "15 Juni 2026",

    speakers_title: "Pembicara Undangan",
    speaker1_name: "Profesor A",
    speaker1_affil: "Afiliasi TBA",
    speaker1_topic: "Topik TBA",
    speaker2_name: "Profesor B",
    speaker2_affil: "Afiliasi TBA",
    speaker2_topic: "Topik TBA",
    speaker3_name: "Profesor C",
    speaker3_affil: "Afiliasi TBA",
    speaker3_topic: "Topik TBA",
    speaker4_name: "Profesor D",
    speaker4_affil: "Afiliasi TBA",
    speaker4_topic: "Topik TBA",

    reg_title: "Pendaftaran",
    reg_free: "Forum ini gratis. Silakan daftar melalui tautan di bawah ini.",
    reg_btn: "Daftar Sekarang",

    venue_title: "Lokasi",
    venue_name: "National Penghu University of Science and Technology",
    venue_addr: "No. 300, Liu-Ho Rd., Magong City, Penghu County 880, Taiwan",
    venue_desc: "Terletak di Kepulauan Penghu yang indah, NPU menawarkan fasilitas konferensi modern dikelilingi pemandangan laut yang menakjubkan. Penghu dapat diakses melalui penerbangan domestik dan feri dari pulau utama Taiwan.",

    contact_title: "Hubungi Kami",
    contact_text: "Untuk pertanyaan tentang AAAS 2026, silakan hubungi kami di:",
    contact_email: "aars2026@gmail.com",
    contact_follow: "Ikuti kami untuk pembaruan",

    footer_copy: "© 2026 Komite Penyelenggara AAAS 2026. Hak cipta dilindungi.",
    footer_privacy: "Kebijakan Privasi",
    footer_terms: "Syarat Penggunaan",
    footer_top: "↑ Kembali ke Atas",
  },

  // ──────────── Tiếng Việt ────────────
  vi: {
    nav_home: "Trang chủ",
    nav_about: "Giới thiệu",
    nav_topics: "Chủ đề",
    nav_dates: "Ngày quan trọng",
    nav_speakers: "Diễn giả",
    nav_registration: "Đăng ký",
    nav_venue: "Địa điểm",
    nav_contact: "Liên hệ",

    site_title: "AAAS 2026 - Hội nghị Ứng dụng AI Tác tử",

    hero_title: "AAAS 2026 - Hội nghị Ứng dụng AI Tác tử",
    hero_subtitle: "2026 Hội nghị Ứng dụng AI Tác tử",
    hero_date: "15 tháng 6, 2026 | Bành Hồ, Đài Loan",
    hero_btn_register: "Đăng ký ngay",
    hero_btn_speakers: "Xem diễn giả",

    about_title: "Về AAAS 2026",
    about_organizer: "Tổ chức bởi Đại học Khoa học và Công nghệ Quốc gia Bành Hồ (NPU)",
    about_text: "Hội nghị Ứng dụng AI Tác tử 2026 (AAAS 2026), do Đại học Khoa học và Công nghệ Quốc gia Bành Hồ tổ chức, quy tụ các nhà nghiên cứu, chuyên gia thực hành và lãnh đạo ngành để khám phá bối cảnh phát triển nhanh chóng của trí tuệ nhân tạo tác tử và các ứng dụng thực tế. Diễn đàn kỹ thuật này có các bài thuyết trình mời từ các chuyên gia hàng đầu, tập trung vào các tác tử AI tự chủ có khả năng nhận thức, suy luận, lập kế hoạch và hành động trong môi trường thực tế phức tạp.",

    topics_title: "Chủ đề diễn đàn",
    topic1_title: "Nền tảng AI Tác tử",
    topic1_desc: "Tác tử mô hình ngôn ngữ lớn, hệ thống đa tác tử, suy luận tự chủ, lập kế hoạch và ra quyết định, sử dụng công cụ và gọi hàm.",
    topic2_title: "Robot học dựa trên AI",
    topic2_desc: "Học robot, AI thể hiện, thao tác, di chuyển, tương tác người-robot và robot hợp tác.",
    topic3_title: "AI Tạo sinh cho Robot",
    topic3_desc: "Mô hình tạo sinh cho điều khiển robot, hiểu cảnh, chuyển đổi mô phỏng sang thực tế, tạo dữ liệu tổng hợp.",
    topic4_title: "Hệ thống tự chủ",
    topic4_desc: "Xe tự lái, điều hướng drone, tự động hóa kho bãi và phối hợp đa robot.",
    topic5_title: "An toàn & Đạo đức",
    topic5_desc: "Căn chỉnh AI, tính bền vững, khả năng giải thích, triển khai AI có trách nhiệm và khung pháp lý.",
    topic6_title: "Ứng dụng công nghiệp",
    topic6_desc: "Sản xuất thông minh, robot y tế, tự động hóa nông nghiệp, robot dịch vụ và bản sao số.",

    dates_title: "Ngày quan trọng",
    dates_event: "Sự kiện",
    dates_date: "Ngày",
    date1_event: "Đăng ký sớm",
    date1_date: "15 tháng 5, 2026",
    date2_event: "Hạn đăng ký",
    date2_date: "1 tháng 6, 2026",
    date3_event: "Ngày diễn đàn",
    date3_date: "15 tháng 6, 2026",

    speakers_title: "Diễn giả mời",
    speaker1_name: "Giáo sư A",
    speaker1_affil: "Đơn vị sẽ công bố",
    speaker1_topic: "Chủ đề sẽ công bố",
    speaker2_name: "Giáo sư B",
    speaker2_affil: "Đơn vị sẽ công bố",
    speaker2_topic: "Chủ đề sẽ công bố",
    speaker3_name: "Giáo sư C",
    speaker3_affil: "Đơn vị sẽ công bố",
    speaker3_topic: "Chủ đề sẽ công bố",
    speaker4_name: "Giáo sư D",
    speaker4_affil: "Đơn vị sẽ công bố",
    speaker4_topic: "Chủ đề sẽ công bố",

    reg_title: "Đăng ký",
    reg_free: "Diễn đàn này miễn phí. Vui lòng đăng ký qua liên kết bên dưới.",
    reg_btn: "Đăng ký ngay",

    venue_title: "Địa điểm",
    venue_name: "Đại học Khoa học và Công nghệ Quốc gia Bành Hồ",
    venue_addr: "Số 300, Đường Liu-Ho, Thành phố Magong, Huyện Bành Hồ 880, Đài Loan",
    venue_desc: "Tọa lạc tại quần đảo Bành Hồ xinh đẹp, NPU cung cấp cơ sở hội nghị hiện đại được bao quanh bởi cảnh biển tuyệt đẹp. Bành Hồ có thể đến bằng chuyến bay nội địa và phà từ đảo chính Đài Loan.",

    contact_title: "Liên hệ",
    contact_text: "Mọi thắc mắc về AAAS 2026, vui lòng liên hệ:",
    contact_email: "aars2026@gmail.com",
    contact_follow: "Theo dõi chúng tôi để cập nhật",

    footer_copy: "© 2026 Ban tổ chức AAAS 2026. Bảo lưu mọi quyền.",
    footer_privacy: "Chính sách bảo mật",
    footer_terms: "Điều khoản sử dụng",
    footer_top: "↑ Về đầu trang",
  },
};

// ===== i18n Engine =====
let currentLang = localStorage.getItem("aaas_lang") || "en";

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("aaas_lang", lang);
  document.documentElement.lang = lang;
  applyTranslations();
  document.querySelectorAll(".lang-switcher button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
  document.title = t("site_title");
}

// Init on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("aaas_lang")) {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith("zh")) currentLang = "zh-TW";
    else if (browserLang.startsWith("ja")) currentLang = "ja";
    else if (browserLang.startsWith("id")) currentLang = "id";
    else if (browserLang.startsWith("vi")) currentLang = "vi";
    else currentLang = "en";
  }
  setLang(currentLang);

  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle) {
    toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  }
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
});
