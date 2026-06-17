// ── PERSONAL INFO ─────────────────────────────────────
export const INFO = {
    name: "Adhen Firman Firdaus",
    title: "Laravel & PHP Web Developer",
    subtitle: "Fullstack Developer · IT Support Engineer",
    location: "Tangerang, Banten",
    phone: "081515034776",
    email: "adhfir8@gmail.com",
    github: "https://github.com/adhen10",
    linkedin: "https://linkedin.com/in/adhen-firman",
    summary: "PHP & Laravel developer dengan pengalaman nyata di lingkungan perusahaan distribusi import — membangun sistem web untuk 20+ user, mengotomasi integrasi data e-commerce ke Accurate, dan mengelola server production. Adaptif terhadap CodeIgniter maupun Laravel.",
};

// ── SKILLS ────────────────────────────────────────────
export const SKILLS = [
    {
        category: "Backend Development",
        items: ["PHP", "Laravel", "CodeIgniter 3", "MySQL", "REST API", "cPanel"],
        highlight: ["Laravel", "PHP", "CodeIgniter 3"],
    },
    {
        category: "Frontend Development",
        items: ["JavaScript", "HTML", "CSS", "Bootstrap", "Blade Template"],
        highlight: ["JavaScript"],
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "GitHub", "Postman", "VS Code", "Microsoft Excel", "Accurate"],
        highlight: ["Git", "GitHub"],
    },
    {
        category: "IT Support",
        items: ["Hardware", "LAN / WiFi", "CCTV", "Printer", "Server Monitoring"],
        highlight: [],
    },
];

// ── EDUCATION ─────────────────────────────────────────
export const EDUCATION = {
    school: "Universitas Mercu Buana",
    degree: "S1 Informatika",
    period: "2021 – 2025",
    gpa: "3.65",
};

// ── EXPERIENCE ────────────────────────────────────────
export const EXPERIENCE = [
    {
        role: "Web Developer",
        company: "PT Gautama Indah Perkasa",
        period: "Nov 2025 – Sekarang",
        type: "contract",
        label: "Contract",
        active: true,
        context: "Perusahaan importir consumer goods yang mendistribusikan produk ke jaringan mall dan retailer.",
        highlights: [
            "Membangun otomasi import pesanan dari Shopee (100+ SKU/hari) ke sistem internal, lalu export ke format Excel sesuai template Accurate untuk pencatatan akuntansi",
            "Mengintegrasikan data stok dari sistem WMS PRIEDS ke aplikasi internal — memangkas proses input manual yang sebelumnya dilakukan per item",
            "Mengembangkan modul import stok mobile-first berbasis Excel untuk tim sales di lapangan",
            "Maintenance aplikasi, debugging, dan perbaikan bug berdasarkan laporan 20+ user",
            "Mengelola cPanel, monitoring storage server, dan deployment aplikasi production",
            "IT support untuk kebutuhan hardware, software, dan printer seluruh kantor",
        ],
        stack: ["CodeIgniter 3", "PHP", "MySQL", "Excel Integration", "cPanel", "Accurate"],
    },
    {
        role: "Fullstack Web Developer",
        company: "Freelance",
        period: "Apr 2024 – Sekarang",
        type: "freelance",
        label: "Freelance",
        active: true,
        context: "Mengembangkan aplikasi web untuk klien bisnis dan akademik.",
        highlights: [
            "Membangun 3 aplikasi web dari nol hingga production untuk klien bisnis dan akademik",
            "POS System — aplikasi kasir dengan manajemen produk, transaksi real-time, dan laporan penjualan",
            "IT Helpdesk Ticketing — sistem multi-role dengan tracking status dan notifikasi",
            "Blog CMS — manajemen konten dengan autentikasi admin dan kategori",
            "Desain database MySQL dan implementasi REST API di setiap project",
        ],
        stack: ["Laravel", "MySQL", "Git", "JavaScript", "Bootstrap", "REST API"],
    },
    {
        role: "IT Support Intern",
        company: "PT Difan Prima Paint",
        period: "Feb 2023 – Jul 2023",
        type: "intern",
        label: "Internship",
        active: false,
        context: "Magang di divisi IT perusahaan cat.",
        highlights: [
            "Instalasi, konfigurasi, dan pemeliharaan hardware & software perusahaan",
            "Troubleshooting jaringan LAN dan perangkat komputer pengguna",
            "Dokumentasi aset dan permasalahan infrastruktur IT",
        ],
        stack: ["Hardware", "LAN", "Windows", "Troubleshooting"],
    },
    {
        role: "Network Technician & Material Admin",
        company: "Freelance / Usaha Keluarga",
        period: "Apr 2021 – Sekarang",
        type: "parttime",
        label: "Part-time",
        active: true,
        context: "Instalasi jaringan dan administrasi material.",
        highlights: [
            "Instalasi dan konfigurasi jaringan LAN, WiFi, serta CCTV",
            "Crimping dan pengujian kabel jaringan sesuai standar",
            "Administrasi material dan pencatatan kebutuhan proyek",
        ],
        stack: ["LAN", "WiFi", "CCTV", "Network Tools"],
    },
];

// ── PROJECTS ──────────────────────────────────────────
export const PROJECTS = [
    {
        name: "Point of Sale (POS) System",
        desc: "Aplikasi kasir web-based dengan manajemen produk, pemrosesan transaksi real-time, dan laporan penjualan. Dibangun untuk kebutuhan bisnis retail kecil menengah.",
        stack: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
        type: "Web App",
        github: "https://github.com/adhen10",
        demo: "",
        slides: [
            { label: "Dashboard", color: "#4F46E5" },
            { label: "Transaksi", color: "#4338CA" },
            { label: "Laporan", color: "#3730A3" },
        ],
    },
    {
        name: "IT Helpdesk Ticketing System",
        desc: "Sistem tiket IT multi-role dengan tracking status, notifikasi, dan manajemen isu. Dirancang untuk lingkungan perusahaan dengan tim IT dan end-user terpisah.",
        stack: ["Laravel", "MySQL", "PHP", "Blade"],
        type: "Web App",
        github: "https://github.com/adhen10",
        demo: "",
        slides: [
            { label: "Ticket List", color: "#0F766E" },
            { label: "Detail Tiket", color: "#0D9488" },
            { label: "Admin Panel", color: "#14B8A6" },
        ],
    },
    {
        name: "Blog Administration System",
        desc: "CMS blog dengan manajemen artikel, kategori, tag, dan autentikasi admin. Mendukung pengelolaan konten skala menengah dengan antarmuka yang intuitif.",
        stack: ["Laravel", "MySQL", "HTML/CSS", "Blade"],
        type: "Web App",
        github: "https://github.com/adhen10",
        demo: "",
        slides: [
            { label: "Artikel", color: "#7C3AED" },
            { label: "Editor", color: "#6D28D9" },
            { label: "Kategori", color: "#5B21B6" },
        ],
    },
];