import type { Locale } from "@/lib/routes";

export const business = {
  name: "Kodefy",
  email: "hello@kodefy.id",
  phoneDisplay: "+62 813 1211 560",
  phoneInternational: "+628131211560",
  whatsapp: "https://wa.me/628131211560",
  location: "Tangerang Selatan, Indonesia",
  founded: "2020",
  github: "https://github.com/kodefy-web",
} as const;

export const clients = [
  { name: "Astha International", logo: "/assets/clients/astha.png" },
  { name: "Cursus International", logo: "/assets/clients/cursus.png" },
  { name: "Lievee", logo: "/assets/clients/lievee.svg" },
  { name: "Ningwei Trading", logo: "/assets/clients/ningwei-trading.png" },
  { name: "Qijian Technology", logo: "/assets/clients/qijian.png" },
  {
    name: "Sukses Pamerindo Utama",
    logo: "/assets/clients/sukses-pamerindo.webp",
  },
  {
    name: "Xingxiang Industrial",
    logo: "/assets/clients/xingxiang-industrial.png",
  },
] as const;

type HomeContent = {
  seo: { title: string; description: string };
  navigation: { services: string; work: string; process: string; pricing: string };
  cta: { primary: string; secondary: string };
  hero: {
    title: string;
    highlightedTitle: string;
    body: string;
    projectLabel: string;
    projectName: string;
  };
  trust: { label: string; logosLabel: string };
  metrics: { value: string; label: string }[];
  servicesIntro: { eyebrow: string; title: string; body: string };
  services: { number: string; title: string; body: string; price: string }[];
  workIntro: { eyebrow: string; title: string; body: string };
  projects: {
    name: string;
    type: string;
    summary: string;
    delivery: string;
    image: string;
    alt: string;
  }[];
  whyIntro: { eyebrow: string; title: string; body: string };
  reasons: { title: string; body: string }[];
  processIntro: { eyebrow: string; title: string; body: string };
  process: { number: string; title: string; body: string }[];
  pricingIntro: { eyebrow: string; title: string; body: string; note: string };
  pricing: { name: string; price: string; description: string; featured?: boolean }[];
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    whatsappLabel: string;
    emailLabel: string;
    expectation: string;
  };
  footer: {
    summary: string;
    navigate: string;
    contact: string;
    legal: string;
    terms: string;
    privacy: string;
    rights: string;
  };
};

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    seo: {
      title: "Website, SEO & Analytics for Growing Businesses | Kodefy",
      description:
        "Kodefy helps businesses build credible websites, strengthen their SEO foundations, and set up practical analytics with clear scope and transparent starting prices.",
    },
    navigation: {
      services: "Services",
      work: "Work",
      process: "Process",
      pricing: "Pricing",
    },
    cta: {
      primary: "Discuss your project",
      secondary: "See our work",
    },
    hero: {
      title: "Build a digital presence that makes your business",
      highlightedTitle: "easier to trust.",
      body:
        "Kodefy creates professional websites, stronger SEO foundations, and clear analytics setups for businesses that want to be understood and contacted online.",
      projectLabel: "Featured delivery",
      projectName: "Qijian Technology",
    },
    trust: {
      label: "Supporting businesses with focused digital work since 2020",
      logosLabel: "Selected client brands",
    },
    metrics: [
      { value: "2020", label: "Established" },
      { value: "7", label: "Client brands represented" },
      { value: "3", label: "Core solution areas" },
    ],
    servicesIntro: {
      eyebrow: "What we help with",
      title: "The essentials for a stronger digital presence.",
      body:
        "Choose a focused starting point or combine services into a scope that fits your business priorities.",
    },
    services: [
      {
        number: "01",
        title: "Website development",
        body:
          "Professional landing pages, company profiles, portfolios, and catalog websites built to explain your offer clearly and turn interest into enquiries.",
        price: "Starting from Rp1.5 million",
      },
      {
        number: "02",
        title: "SEO foundations & growth",
        body:
          "SEO setup, technical audits, and ongoing optimization that make important pages easier for search engines to understand and improve over time.",
        price: "Starting from Rp1.5 million",
      },
      {
        number: "03",
        title: "Analytics setup",
        body:
          "Practical measurement foundations for important actions such as contact clicks, forms, and campaign landing pages without guesswork.",
        price: "Starting from Rp500 thousand",
      },
    ],
    workIntro: {
      eyebrow: "Selected work",
      title: "Real websites, built around real businesses.",
      body:
        "A selection of company profile projects that show how we turn a business story into a clear, credible digital experience.",
    },
    projects: [
      {
        name: "Qijian Technology",
        type: "Company profile website",
        summary:
          "A focused corporate presence for a technology business operating across global trade pathways.",
        delivery: "Delivered: responsive company profile website",
        image: "/assets/projects/qijian-technology.webp",
        alt: "Qijian Technology company profile website project",
      },
      {
        name: "Lievee",
        type: "Company profile website",
        summary:
          "A professional website presentation for a business providing technology and security solutions.",
        delivery: "Delivered: structured company profile website",
        image: "/assets/projects/lievee.webp",
        alt: "Lievee company profile website project",
      },
      {
        name: "Sukses Pamerindo Utama",
        type: "Company profile website",
        summary:
          "A visual business website that presents exhibition booth capabilities and brand-building services.",
        delivery: "Delivered: responsive company profile website",
        image: "/assets/projects/sukses-pamerindo.webp",
        alt: "Sukses Pamerindo Utama company profile website project",
      },
    ],
    whyIntro: {
      eyebrow: "Why Kodefy",
      title: "A clear engagement, from first conversation to launch.",
      body:
        "Good digital work starts with clarity: what your business needs, what will be delivered, and what happens next.",
    },
    reasons: [
      {
        title: "Transparent starting prices",
        body: "Useful price anchors help you assess fit before investing time in a sales conversation.",
      },
      {
        title: "Scope shaped around the business",
        body: "Recommendations begin with your goals and constraints, not a preselected stack or oversized feature list.",
      },
      {
        title: "SEO-conscious implementation",
        body: "Structure, metadata, performance, and crawlability are considered as part of the website foundation.",
      },
      {
        title: "Direct communication",
        body: "You get a clear line of communication for decisions, reviews, and practical next steps.",
      },
    ],
    processIntro: {
      eyebrow: "How it works",
      title: "A simple path from idea to launch.",
      body:
        "Every project is different, but the working rhythm stays clear so you always know what comes next.",
    },
    process: [
      { number: "01", title: "Consultation", body: "We discuss your business, goals, audience, and current challenges." },
      { number: "02", title: "Scope & proposal", body: "You receive a defined scope, deliverables, timeline, and price." },
      { number: "03", title: "Design & development", body: "The approved direction is translated into a responsive, working experience." },
      { number: "04", title: "Review", body: "You review the work and provide focused feedback within the agreed scope." },
      { number: "05", title: "Launch", body: "After approval and final payment, the project is prepared for delivery or deployment." },
    ],
    pricingIntro: {
      eyebrow: "Starting prices",
      title: "Know the baseline before we talk.",
      body:
        "These anchors reflect the current starter-level packages. Final pricing depends on scope, content, integrations, and complexity.",
      note: "All prices are starting points in Indonesian rupiah.",
    },
    pricing: [
      { name: "Landing page", price: "Rp1.9 million", description: "A focused page for one offer or campaign.", featured: true },
      { name: "Company profile", price: "Rp3.5 million", description: "A credible multi-section business website." },
      { name: "Portfolio website", price: "Rp1.5 million", description: "A clear showcase for work and capabilities." },
      { name: "E-commerce catalog", price: "Rp6 million", description: "A product catalog with enquiry-based checkout." },
      { name: "SEO setup", price: "Rp1.5 million", description: "A cleaner baseline for priority pages." },
      { name: "Technical SEO audit", price: "Rp2 million", description: "Diagnosis and a prioritized technical roadmap." },
      { name: "Monthly SEO growth", price: "Rp1.5 million / month", description: "Ongoing optimization with a defined monthly scope." },
      { name: "Analytics setup", price: "Rp500 thousand", description: "Essential measurement and event-tracking setup." },
    ],
    contact: {
      eyebrow: "Start a conversation",
      title: "Tell us what you want your digital presence to do better.",
      body:
        "Share a short overview of your business, the challenge you want to solve, and your preferred timeline. We’ll help identify a sensible next step.",
      whatsappLabel: "Chat on WhatsApp",
      emailLabel: "Email Kodefy",
      expectation: "No long forms. Start with a direct conversation.",
    },
    footer: {
      summary: "Websites, SEO, and analytics foundations for growing businesses.",
      navigate: "Navigate",
      contact: "Contact",
      legal: "Legal",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      rights: "All rights reserved.",
    },
  },
  id: {
    seo: {
      title: "Website, SEO & Analitik untuk Bisnis Bertumbuh | Kodefy",
      description:
        "Kodefy membantu bisnis membangun website yang kredibel, memperkuat fondasi SEO, dan menyiapkan analitik praktis dengan scope jelas dan harga awal transparan.",
    },
    navigation: {
      services: "Layanan",
      work: "Karya",
      process: "Proses",
      pricing: "Harga",
    },
    cta: {
      primary: "Diskusikan proyek Anda",
      secondary: "Lihat karya kami",
    },
    hero: {
      title: "Jasa pembuatan website yang membuat calon pelanggan",
      highlightedTitle: "lebih yakin menghubungi bisnis Anda.",
      body:
        "Kodefy membantu bisnis membangun kehadiran digital yang lebih meyakinkan dan terukur melalui website profesional, fondasi SEO, dan setup analitik yang jelas agar calon pelanggan lebih mudah menemukan, memahami, dan menghubungi bisnis Anda.",
      projectLabel: "Proyek pilihan",
      projectName: "Qijian Technology",
    },
    trust: {
      label: "Mendukung bisnis dengan pekerjaan digital yang terarah sejak 2020",
      logosLabel: "Pilihan brand klien",
    },
    metrics: [
      { value: "2020", label: "Mulai beroperasi" },
      { value: "7", label: "Brand klien ditampilkan" },
      { value: "3", label: "Area solusi utama" },
    ],
    servicesIntro: {
      eyebrow: "Yang kami bantu",
      title: "Fondasi penting untuk kehadiran digital yang lebih kuat.",
      body:
        "Mulai dari satu kebutuhan yang terarah atau gabungkan layanan sesuai prioritas bisnis Anda.",
    },
    services: [
      {
        number: "01",
        title: "Pengembangan website",
        body:
          "Landing page, company profile, portfolio, dan website katalog profesional untuk menjelaskan penawaran dengan jelas dan mengubah ketertarikan menjadi inquiry.",
        price: "Mulai dari Rp1,5 juta",
      },
      {
        number: "02",
        title: "Fondasi & pertumbuhan SEO",
        body:
          "SEO setup, technical audit, dan optimasi berkelanjutan agar halaman penting lebih mudah dipahami mesin pencari dan dikembangkan dari waktu ke waktu.",
        price: "Mulai dari Rp1,5 juta",
      },
      {
        number: "03",
        title: "Setup analitik",
        body:
          "Fondasi pengukuran praktis untuk aksi penting seperti klik kontak, formulir, dan campaign landing page agar keputusan tidak sekadar berdasarkan dugaan.",
        price: "Mulai dari Rp500 ribu",
      },
    ],
    workIntro: {
      eyebrow: "Karya pilihan",
      title: "Website nyata, dibuat untuk bisnis nyata.",
      body:
        "Pilihan proyek company profile yang menunjukkan bagaimana cerita bisnis diterjemahkan menjadi pengalaman digital yang jelas dan kredibel.",
    },
    projects: [
      {
        name: "Qijian Technology",
        type: "Website company profile",
        summary:
          "Kehadiran korporat yang terarah untuk bisnis teknologi yang bergerak dalam jalur perdagangan global.",
        delivery: "Dikerjakan: website company profile responsif",
        image: "/assets/projects/qijian-technology.webp",
        alt: "Proyek website company profile Qijian Technology",
      },
      {
        name: "Lievee",
        type: "Website company profile",
        summary:
          "Presentasi website profesional untuk bisnis yang menyediakan solusi teknologi dan keamanan.",
        delivery: "Dikerjakan: website company profile terstruktur",
        image: "/assets/projects/lievee.webp",
        alt: "Proyek website company profile Lievee",
      },
      {
        name: "Sukses Pamerindo Utama",
        type: "Website company profile",
        summary:
          "Website bisnis visual yang menampilkan kapabilitas booth pameran dan layanan penguatan brand.",
        delivery: "Dikerjakan: website company profile responsif",
        image: "/assets/projects/sukses-pamerindo.webp",
        alt: "Proyek website company profile Sukses Pamerindo Utama",
      },
    ],
    whyIntro: {
      eyebrow: "Mengapa Kodefy",
      title: "Kerja sama yang jelas, sejak percakapan pertama hingga peluncuran.",
      body:
        "Pekerjaan digital yang baik dimulai dari kejelasan: apa yang bisnis Anda butuhkan, apa yang akan dikerjakan, dan apa langkah berikutnya.",
    },
    reasons: [
      {
        title: "Harga awal transparan",
        body: "Acuan harga membantu Anda menilai kecocokan sebelum meluangkan waktu untuk percakapan penjualan.",
      },
      {
        title: "Scope disesuaikan dengan bisnis",
        body: "Rekomendasi dimulai dari tujuan dan batasan Anda, bukan pilihan teknologi atau daftar fitur berlebihan.",
      },
      {
        title: "Implementasi sadar SEO",
        body: "Struktur, metadata, performa, dan crawlability dipertimbangkan sebagai bagian dari fondasi website.",
      },
      {
        title: "Komunikasi langsung",
        body: "Anda mendapat jalur komunikasi yang jelas untuk keputusan, review, dan langkah praktis berikutnya.",
      },
    ],
    processIntro: {
      eyebrow: "Cara kerja",
      title: "Jalur sederhana dari ide hingga peluncuran.",
      body:
        "Setiap proyek berbeda, tetapi ritme kerja tetap jelas agar Anda selalu tahu apa yang terjadi selanjutnya.",
    },
    process: [
      { number: "01", title: "Konsultasi", body: "Kami membahas bisnis, tujuan, audiens, dan tantangan Anda saat ini." },
      { number: "02", title: "Scope & proposal", body: "Anda menerima scope, deliverables, timeline, dan harga yang terdefinisi." },
      { number: "03", title: "Desain & development", body: "Arah yang disetujui diterjemahkan menjadi pengalaman responsif yang berfungsi." },
      { number: "04", title: "Review", body: "Anda meninjau hasil dan memberi feedback terarah dalam scope yang disepakati." },
      { number: "05", title: "Peluncuran", body: "Setelah persetujuan dan pelunasan, proyek disiapkan untuk diserahkan atau diluncurkan." },
    ],
    pricingIntro: {
      eyebrow: "Harga mulai",
      title: "Ketahui acuannya sebelum kita bicara.",
      body:
        "Acuan berikut mengikuti paket tingkat starter saat ini. Harga akhir bergantung pada scope, konten, integrasi, dan kompleksitas.",
      note: "Seluruh harga adalah harga mulai dalam rupiah Indonesia.",
    },
    pricing: [
      { name: "Landing page", price: "Rp1,9 juta", description: "Halaman terarah untuk satu penawaran atau campaign.", featured: true },
      { name: "Company profile", price: "Rp3,5 juta", description: "Website bisnis multi-section yang kredibel." },
      { name: "Website portfolio", price: "Rp1,5 juta", description: "Presentasi karya dan kapabilitas yang jelas." },
      { name: "Katalog e-commerce", price: "Rp6 juta", description: "Katalog produk dengan alur checkout berbasis inquiry." },
      { name: "SEO setup", price: "Rp1,5 juta", description: "Baseline SEO yang lebih rapi untuk halaman prioritas." },
      { name: "Technical SEO audit", price: "Rp2 juta", description: "Diagnosis dan roadmap teknis yang diprioritaskan." },
      { name: "SEO bulanan", price: "Rp1,5 juta / bulan", description: "Optimasi berkelanjutan dengan scope bulanan yang jelas." },
      { name: "Setup analitik", price: "Rp500 ribu", description: "Setup pengukuran dan event tracking esensial." },
    ],
    contact: {
      eyebrow: "Mulai percakapan",
      title: "Ceritakan apa yang ingin ditingkatkan dari kehadiran digital Anda.",
      body:
        "Bagikan gambaran singkat bisnis, tantangan yang ingin diselesaikan, dan target waktu Anda. Kami akan membantu menentukan langkah berikutnya yang masuk akal.",
      whatsappLabel: "Chat via WhatsApp",
      emailLabel: "Email Kodefy",
      expectation: "Tanpa formulir panjang. Mulai dengan percakapan langsung.",
    },
    footer: {
      summary: "Fondasi website, SEO, dan analitik untuk bisnis yang bertumbuh.",
      navigate: "Navigasi",
      contact: "Kontak",
      legal: "Legal",
      terms: "Syarat & Ketentuan",
      privacy: "Kebijakan Privasi",
      rights: "Hak cipta dilindungi.",
    },
  },
};

export const legalSeo = {
  terms: {
    en: {
      title: "Terms of Service | Kodefy",
      description: "Terms governing website, SEO, analytics, and related digital services provided by Kodefy.",
    },
    id: {
      title: "Syarat & Ketentuan Layanan | Kodefy",
      description: "Ketentuan layanan website, SEO, analitik, dan layanan digital terkait yang diberikan oleh Kodefy.",
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy | Kodefy",
      description: "How Kodefy collects, uses, stores, and protects personal information.",
    },
    id: {
      title: "Kebijakan Privasi | Kodefy",
      description: "Cara Kodefy mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi.",
    },
  },
} as const;
