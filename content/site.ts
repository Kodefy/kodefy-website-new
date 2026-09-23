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
  expectations: {
    labels: string[];
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
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
      label: "Trusted by businesses across industries.",
      logosLabel: "Selected client brands",
    },
    expectations: {
      labels: ["Professional Websites", "SEO Foundations", "Analytics Setup"],
      title: "What you can expect",
      body:
        "Kodefy helps businesses look more professional online, become easier to find in search, and understand the actions that matter. Every project starts with business needs, a focused scope, and work that is easy to understand.",
      primary: "Discuss your project",
      secondary: "See our work",
    },
    metrics: [
      { value: "2020", label: "Established" },
      { value: "30+", label: "Finished projects" },
      { value: "20+", label: "Happy clients" },
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
        title: "Professional Websites",
        body:
          "Professional landing pages, company profiles, portfolios, and catalog websites built to explain your offer clearly and turn interest into enquiries.",
        price: "Starting from Rp1.5 million",
      },
      {
        number: "02",
        title: "SEO Foundations",
        body:
          "SEO setup, technical audits, and ongoing optimization that make important pages easier for search engines to understand and improve over time.",
        price: "Starting from Rp1.5 million",
      },
      {
        number: "03",
        title: "Analytics Setup",
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
      title: "Turn your website into a business growth engine.",
      body:
        "A website is more than a visual presence. Built with the right focus, it helps potential customers understand your business, build trust, and take the next step to contact you.",
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
      title: "From business needs to a website ready to use.",
      body:
        "We guide you through every step, so the process stays simple and easy to follow.",
    },
    process: [
      { number: "01", title: "Consultation", body: "We discuss your business, goals, audience, and current challenges." },
      { number: "02", title: "Scope & proposal", body: "You receive a defined scope, deliverables, timeline, and price." },
      { number: "03", title: "Design & development", body: "The approved direction is translated into a responsive, working experience." },
      { number: "04", title: "Review & Revision", body: "You review the work and provide focused feedback within the agreed scope." },
      { number: "05", title: "Launch", body: "The project is launched and handed over." },
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
      label: "Dipercaya oleh bisnis dari berbagai industri.",
      logosLabel: "Pilihan brand klien",
    },
    expectations: {
      labels: ["Website Profesional", "Fondasi SEO", "Setup Analitik"],
      title: "Yang bisa Anda harapkan",
      body:
        "Kodefy membantu bisnis memiliki website yang terlihat profesional, lebih mudah ditemukan di Google, dan dapat diukur dengan jelas. Setiap pekerjaan dimulai dari kebutuhan bisnis, scope yang terarah, dan hasil yang mudah dipahami.",
      primary: "Diskusikan proyek Anda",
      secondary: "Lihat karya kami",
    },
    metrics: [
      { value: "2020", label: "Mulai beroperasi" },
      { value: "30+", label: "Project selesai" },
      { value: "20+", label: "Klien" },
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
        title: "Website Profesional",
        body:
          "Landing page, company profile, portfolio, dan website katalog profesional untuk menjelaskan penawaran dengan jelas dan mengubah ketertarikan menjadi inquiry.",
        price: "Mulai dari Rp1,5 juta",
      },
      {
        number: "02",
        title: "Fondasi SEO",
        body:
          "SEO setup, technical audit, dan optimasi berkelanjutan agar halaman penting lebih mudah dipahami mesin pencari dan dikembangkan dari waktu ke waktu.",
        price: "Mulai dari Rp1,5 juta",
      },
      {
        number: "03",
        title: "Setup Analitik",
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
      title: "Ubah website Anda menjadi mesin pertumbuhan bisnis.",
      body:
        "Website bukan sekadar tampilan. Dengan fokus yang tepat, website membantu calon pelanggan memahami bisnis Anda, membangun kepercayaan, dan mengambil langkah untuk menghubungi Anda.",
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
      title: "Dari konsultasi hingga website siap digunakan.",
      body:
        "Kami memandu Anda di setiap langkah agar prosesnya tetap sederhana dan mudah diikuti.",
    },
    process: [
      { number: "01", title: "Konsultasi", body: "Kami membahas bisnis, tujuan, audiens, dan tantangan Anda saat ini." },
      { number: "02", title: "Scope & proposal", body: "Anda menerima scope, deliverables, timeline, dan harga." },
      { number: "03", title: "Desain & development", body: "Arah yang disetujui diterjemahkan menjadi pengalaman responsif yang berfungsi." },
      { number: "04", title: "Review & Revisi", body: "Anda meninjau hasil dan memberi feedback terarah dalam scope yang disepakati." },
      { number: "05", title: "Peluncuran", body: "Website diluncurkan dan diserahkan." },
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

export const servicesPageContent: Record<
  Locale,
  {
    hero: {
      body: string;
      highlightedTitle: string;
      primaryCta: string;
      secondaryCta: string;
      title: string;
    };
    overview: {
      body: string;
      primaryCta: string;
      secondaryCta: string;
      services: { body: string; title: string }[];
      title: string;
    };
    details: {
      body: string;
      imageAlt: string;
      imageSrc: string;
      labels: string[];
      slug: string;
      title: string;
    }[];
    seo: { description: string; title: string };
  }
> = {
  en: {
    seo: {
      title: "Website, SEO & Analytics Services | Kodefy",
      description:
        "Explore Kodefy's professional website, SEO foundation, and analytics setup services for businesses that want a clearer, more measurable digital presence.",
    },
    hero: {
      title: "Websites, SEO, and analytics",
      highlightedTitle: "that work for your business.",
      body:
        "We help businesses build a more professional, discoverable, and measurable digital foundation so their website does more than look good: it supports growth.",
      primaryCta: "Discuss your needs",
      secondaryCta: "Explore services",
    },
    overview: {
      title: "The essentials for a stronger digital presence.",
      body:
        "Start with the service your business needs now, then add support as your priorities grow.",
      primaryCta: "Discuss your project",
      secondaryCta: "View service details",
      services: [
        {
          title: "Professional Websites",
          body:
            "Company profile, landing page, e-commerce, and portfolio websites that explain your offer clearly and turn interest into enquiries.",
        },
        {
          title: "SEO Foundations",
          body:
            "SEO setup, technical SEO audits, and monthly SEO growth to make important pages easier to find and improve over time.",
        },
        {
          title: "Analytics Setup",
          body:
            "Practical tracking for key actions such as contact clicks, forms, and campaign landing pages, so decisions are based on useful data.",
        },
      ],
    },
    details: [
      {
        slug: "website-development",
        title: "A website that makes your business easier to understand.",
        body:
          "We design and build focused websites that make your offer clear, build confidence, and give prospective customers a practical next step.",
        labels: ["Company Profile", "Landing Page", "E-commerce", "Portfolio"],
        imageSrc:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "A website shown on a laptop screen",
      },
      {
        slug: "seo",
        title: "SEO support built around the pages that matter.",
        body:
          "From a sound initial setup to ongoing growth, we help search engines understand your important pages and help the right people discover them.",
        labels: ["SEO Setup", "Technical SEO Audit", "Monthly SEO Growth"],
        imageSrc:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Laptop displaying search performance data",
      },
      {
        slug: "analytics",
        title: "Measurement that gives your team clearer direction.",
        body:
          "We set up practical analytics around the actions that matter, so you can see how visitors engage and make decisions with more confidence.",
        labels: ["Analytics Setup"],
        imageSrc:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Analytics dashboard shown on a laptop",
      },
    ],
  },
  id: {
    seo: {
      title: "Layanan Website, SEO & Analitik | Kodefy",
      description:
        "Jelajahi layanan website profesional, fondasi SEO, dan setup analitik Kodefy untuk bisnis yang ingin memiliki kehadiran digital yang lebih jelas dan terukur.",
    },
    hero: {
      title: "Website, SEO, dan analitik",
      highlightedTitle: "yang bekerja untuk bisnis Anda.",
      body:
        "Kami membantu bisnis membangun fondasi digital yang lebih profesional, mudah ditemukan, dan terukur agar website tidak hanya terlihat baik, tetapi juga mendukung pertumbuhan.",
      primaryCta: "Diskusikan kebutuhan Anda",
      secondaryCta: "Lihat layanan",
    },
    overview: {
      title: "Fondasi penting untuk kehadiran digital yang lebih kuat.",
      body:
        "Mulai dari layanan yang paling dibutuhkan bisnis Anda saat ini, lalu tambahkan dukungan seiring prioritas berkembang.",
      primaryCta: "Diskusikan proyek Anda",
      secondaryCta: "Lihat detail layanan",
      services: [
        {
          title: "Website Profesional",
          body:
            "Website company profile, landing page, e-commerce, dan portfolio untuk menjelaskan penawaran dengan jelas dan mengubah ketertarikan menjadi inquiry.",
        },
        {
          title: "Fondasi SEO",
          body:
            "SEO setup, technical SEO audit, dan monthly SEO growth agar halaman penting lebih mudah ditemukan dan terus berkembang dari waktu ke waktu.",
        },
        {
          title: "Setup Analitik",
          body:
            "Tracking praktis untuk aksi penting seperti klik kontak, formulir, dan campaign landing page agar keputusan didukung data yang berguna.",
        },
      ],
    },
    details: [
      {
        slug: "website-development",
        title: "Website yang membuat bisnis Anda lebih mudah dipahami.",
        body:
          "Kami merancang dan membangun website yang terarah untuk menjelaskan penawaran, membangun kepercayaan, dan memberi calon pelanggan langkah berikutnya yang jelas.",
        labels: ["Company Profile", "Landing Page", "E-commerce", "Portfolio"],
        imageSrc:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Website ditampilkan pada layar laptop",
      },
      {
        slug: "seo",
        title: "Dukungan SEO untuk halaman yang paling penting bagi bisnis Anda.",
        body:
          "Dari setup awal yang tepat hingga pertumbuhan berkelanjutan, kami membantu mesin pencari memahami halaman penting Anda dan membantu audiens yang tepat menemukannya.",
        labels: ["SEO Setup", "Technical SEO Audit", "Monthly SEO Growth"],
        imageSrc:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Laptop menampilkan data performa pencarian",
      },
      {
        slug: "analytics",
        title: "Pengukuran yang memberi tim Anda arah lebih jelas.",
        body:
          "Kami menyiapkan analitik praktis untuk aksi yang penting, agar Anda dapat melihat bagaimana pengunjung berinteraksi dan mengambil keputusan dengan lebih yakin.",
        labels: ["Setup Analitik"],
        imageSrc:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Dashboard analitik ditampilkan pada laptop",
      },
    ],
  },
};

export const portfolioPageContent: Record<
  Locale,
  {
    hero: {
      body: string;
      primaryCta: string;
      secondaryCta: string;
      title: string;
    };
    list: {
      deliveryLabel: string;
      typeLabel: string;
    };
    seo: { description: string; title: string };
  }
> = {
  en: {
    seo: {
      title: "Portfolio | Kodefy",
      description:
        "Explore selected Kodefy website projects across different industries and business sizes.",
    },
    hero: {
      title: "Projects we have worked on.",
      body:
        "Our portfolio covers different industries and business sizes, from public companies to private businesses across a range of sectors.",
      primaryCta: "Discuss your project",
      secondaryCta: "View portfolio",
    },
    list: {
      typeLabel: "Website type",
      deliveryLabel: "Delivery",
    },
  },
  id: {
    seo: {
      title: "Portofolio | Kodefy",
      description:
        "Lihat pilihan proyek website Kodefy dari berbagai industri dan skala bisnis.",
    },
    hero: {
      title: "Proyek yang kami kerjakan.",
      body:
        "Portofolio kami mencakup berbagai industri dan skala bisnis, mulai dari perusahaan Tbk hingga perusahaan swasta di sejumlah sektor.",
      primaryCta: "Diskusikan proyek Anda",
      secondaryCta: "Lihat portofolio",
    },
    list: {
      typeLabel: "Jenis website",
      deliveryLabel: "Layanan",
    },
  },
};

export const aboutPageContent: Record<
  Locale,
  {
    hero: {
      body: string;
      primaryCta: string;
      secondaryCta: string;
      title: string;
    };
    story: {
      body: string;
      cta: string;
      imageAlt: string;
      imageSrc: string;
      title: string;
    };
    whyChooseUs: {
      body: string;
      cta: string;
      imageAlt: string;
      imageSrc: string;
      title: string;
    };
    values: {
      title: string;
      items: {
        title: string;
        body: string;
      }[];
    };
    remoteCollaboration: {
      title: string;
      emailLabel: string;
      phoneLabel: string;
      whatsappCta: string;
    };
    team: {
      title: string;
      members: {
        name: string;
        role: string;
        body: string;
        imageSrc: string;
        imageAlt: string;
      }[];
    };
    seo: { description: string; title: string };
  }
> = {
  en: {
    seo: {
      title: "About Kodefy | Website, SEO & Analytics",
      description:
        "Learn how Kodefy helps businesses build clear, professional websites that support their growth.",
    },
    hero: {
      title: "The place to build a clear, professional website.",
      body:
        "Since 2020, Kodefy has helped businesses build websites that fit their needs, are easy for potential customers to understand, and are ready to support business growth.",
      primaryCta: "Discuss your project",
      secondaryCta: "How we work",
    },
    story: {
      title: "About Kodefy.",
      body:
        "After working as a freelancer and full-time, Brian saw many businesses spend their digital budgets on drawn-out, inefficient work. Scopes were often unclear, work was repeated, and costs kept increasing without results that matched the investment.\n\nKodefy was built to offer a better way: websites, SEO, and analytics shaped around what a business actually needs, with clear scope and sensible costs. The goal is simple, to help brands and businesses grow without unnecessary spending.",
      cta: "Discuss your project",
      imageSrc:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "People discussing work around a table",
    },
    whyChooseUs: {
      title: "Why brands and businesses choose us.",
      body:
        "Kodefy has worked with businesses across different industries and sizes. We focus on the website, SEO, and analytics work that is genuinely needed, without adding processes or features that do not make a difference. Clear scope and open communication help your digital budget go toward the work that matters.",
      cta: "Explore our services",
      imageSrc: "/assets/projects/lievee.webp",
      imageAlt: "Lievee website project",
    },
    values: {
      title: "The values we work by.",
      items: [
        {
          title: "Trust",
          body: "Trust starts with clarity. We align goals, scope, and priorities from the beginning so the project stays organised, communication stays clear, and outcomes match your business targets.",
        },
        {
          title: "Transparency",
          body: "We work with open roadmaps, measurable milestones, and regular updates so you always know the progress, decisions, and next steps without guesswork.",
        },
        {
          title: "Collaboration",
          body: "Our way of working is practical and responsive. Feedback is acted on in every phase so decisions are more efficient, revisions stay focused, and your website is ready sooner.",
        },
      ],
    },
    remoteCollaboration: {
      title: "Work together, from anywhere.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      whatsappCta: "Chat on WhatsApp",
    },
    team: {
      title: "Our team.",
      members: [
        {
          name: "Brian",
          role: "Founder & Digital Lead",
          body:
            "Web developer specialist and founder of Kodefy, helping brands and businesses grow in the digital world.",
          imageSrc:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85",
          imageAlt: "Temporary portrait placeholder for Brian",
        },
        {
          name: "Christine",
          role: "Content & Brand Manager",
          body:
            "Content & Brand Manager at Kodefy, managing the content and social media you see across our social channels.",
          imageSrc:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
          imageAlt: "Temporary portrait placeholder for Christine",
        },
      ],
    },
  },
  id: {
    seo: {
      title: "Tentang Kodefy | Website, SEO & Analitik",
      description:
        "Kenali bagaimana Kodefy membantu bisnis membangun website yang jelas, profesional, dan mendukung pertumbuhan.",
    },
    hero: {
      title: "Tempatnya buat website yang jelas dan profesional.",
      body:
        "Sejak 2020, Kodefy membantu bisnis membangun website yang sesuai kebutuhan, mudah dipahami calon pelanggan, dan siap mendukung pertumbuhan bisnis.",
      primaryCta: "Diskusikan proyek Anda",
      secondaryCta: "Lihat cara kerja kami",
    },
    story: {
      title: "Tentang Kodefy.",
      body:
        "Setelah bekerja sebagai freelancer dan full-time, Brian melihat banyak bisnis menghabiskan anggaran digital untuk proses yang berbelit dan tidak efisien. Scope sering tidak jelas, pekerjaan berulang, dan biaya terus bertambah tanpa hasil yang sepadan.\n\nKodefy dibangun untuk menawarkan cara kerja yang lebih baik: website, SEO, dan analitik yang dibuat sesuai kebutuhan bisnis, dengan scope yang jelas dan biaya yang masuk akal. Tujuannya sederhana, membantu brand dan bisnis bertumbuh tanpa pengeluaran yang tidak perlu.",
      cta: "Diskusikan proyek Anda",
      imageSrc:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "Orang-orang berdiskusi di meja kerja",
    },
    whyChooseUs: {
      title: "Kenapa brand dan bisnis memilih kami.",
      body:
        "Kodefy telah bekerja dengan bisnis dari berbagai industri dan skala. Kami fokus pada website, SEO, dan analitik yang benar-benar dibutuhkan, tanpa menambah proses atau fitur yang tidak memberi dampak. Scope yang jelas dan komunikasi yang terbuka membantu anggaran digital Anda digunakan untuk hal yang lebih tepat.",
      cta: "Lihat layanan kami",
      imageSrc: "/assets/projects/lievee.webp",
      imageAlt: "Proyek website Lievee",
    },
    values: {
      title: "Nilai yang kami pegang.",
      items: [
        {
          title: "Kepercayaan",
          body: "Kepercayaan dimulai dari kejelasan. Kami menyepakati tujuan, scope, dan prioritas sejak awal agar proyek berjalan rapi, komunikasi tetap jelas, dan hasilnya sesuai target bisnis Anda.",
        },
        {
          title: "Transparansi",
          body: "Kami bekerja dengan roadmap terbuka, milestone terukur, dan update rutin sehingga Anda selalu tahu progres, keputusan, dan langkah berikutnya tanpa tebak-tebakan.",
        },
        {
          title: "Kolaborasi",
          body: "Cara kerja kami dibuat praktis dan responsif. Feedback ditindaklanjuti di setiap fase agar keputusan lebih efisien, revisi tetap terarah, dan website lebih cepat siap digunakan.",
        },
      ],
    },
    remoteCollaboration: {
      title: "Bekerja bersama, dari mana saja.",
      emailLabel: "Email",
      phoneLabel: "Nomor telepon",
      whatsappCta: "Chat via WhatsApp",
    },
    team: {
      title: "Tim kami.",
      members: [
        {
          name: "Brian",
          role: "Founder & Digital Lead",
          body:
            "Web developer specialist dan founder dari Kodefy, membantu brand dan bisnis berkembang di dalam dunia digital.",
          imageSrc:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85",
          imageAlt: "Placeholder foto sementara untuk Brian",
        },
        {
          name: "Christine",
          role: "Content & Brand Manager",
          body:
            "Content & brand manager di kodefy, mengelola konten, media sosial yang anda lihat di media sosial kami.",
          imageSrc:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
          imageAlt: "Placeholder foto sementara untuk Christine",
        },
      ],
    },
  },
};
