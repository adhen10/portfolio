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
        name: "E-Commerce Shopee Integrator",
        desc: "Otomasi import pesanan dari Shopee ke sistem internal dan export ke format Accurate. Memangkas proses manual dari berjam-jam menjadi hitungan menit.",
        longDesc: "Sistem integrasi e-commerce yang dikembangkan untuk PT Gautama Indah Perkasa. Mengotomasi alur data mulai dari pesanan masuk di Shopee, diproses ke sistem internal WMS, hingga diekspor ke software akuntansi Accurate sesuai format yang ditentukan.",
        highlights: [
            "Import otomatis 100+ pesanan Shopee per hari via API",
            "Parsing dan mapping data ke format Excel template Accurate",
            "Integrasi dengan WMS PRIEDS untuk sinkronisasi stok",
            "Error handling dan notifikasi jika ada data bermasalah",
            "Riwayat sinkronisasi dan log audit per transaksi",
        ],
        stack: ["CodeIgniter 3", "PHP", "MySQL", "Excel Integration", "Accurate"],
        type: "Integration",
        category: "backend",
        year: "2025",
        featured: true,
        github: "",
        demo: "",
        slides: [
            { label: "Import Shopee", color: "#EE4D2D", image: "/project-shopee.svg" },
            { label: "Data Mapping", color: "#C73E20", image: "/project-shopee.svg" },
            { label: "Export Accurate", color: "#B03216", image: "/project-shopee.svg" },
        ],
    },
    {
        name: "Jualin",
        desc: "Modern web application built with Laravel, Livewire, and Volt featuring reactive components and dynamic UI interactions.",
        longDesc: "A contemporary web application showcasing modern Laravel stack with Livewire and Volt for building interactive, real-time user experiences without writing JavaScript.",
        highlights: [
            "Reactive components with Livewire 3.6.4",
            "Dynamic UI with Volt framework integration",
            "Role-based access control with Spatie Laravel Permission",
            "Clean and maintainable component architecture",
            "Production-ready with Laravel 13.0",
        ],
        stack: ["Laravel", "Livewire", "Volt", "PHP", "MySQL"],
        type: "Web App",
        category: "fullstack",
        year: "2026",
        featured: false,
        github: "https://github.com/adhen10/jualin",
        demo: "",
        slides: [
            { label: "Dashboard", color: "#FF2D20", image: "/project-jualin.svg" },
            { label: "Components", color: "#E02E1E", image: "/project-jualin.svg" },
            { label: "Livewire", color: "#C82B1B", image: "/project-jualin.svg" },
        ],
    },
    {
        name: "SmartFEFO",
        desc: "Intelligent Warehouse Management System powered by an automated FEFO algorithm for optimized inventory rotation and spoilage prevention.",
        longDesc: "A comprehensive warehouse management solution that enforces FEFO (First Expired, First Out) protocol to minimize product spoilage, automate stock rotation, and maintain accurate warehouse-floor data in real-time.",
        highlights: [
            "Automated FEFO Routing for intelligent stock deduction",
            "Real-Time Stock Reconciliation (Opname) module",
            "Browser-Native QR/Barcode Scanner integration",
            "Print-Ready QR Label Generation without PDF dependencies",
            "Immutable Audit Trail for accountability",
            "Role-Based Access Control (RBAC) with strict operational boundaries",
            "Scheduled Background Automation with Laravel Task Scheduler",
        ],
        stack: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL", "QR Code"],
        type: "Web App",
        category: "fullstack",
        year: "2024",
        featured: true,
        github: "https://github.com/adhen10/SmartFEFO",
        demo: "",
        slides: [
            { label: "Login", color: "#4F46E5", image: "/smartfefo/login.png" },
            { label: "Dashboard", color: "#7C3AED", image: "/smartfefo/dashboard.png" },
            { label: "QR Scanner", color: "#A78BFA", image: "/smartfefo/scan_camera_qrcode.png" },
            { label: "Stock Opname", color: "#8B5CF6", image: "/smartfefo/koreksi_stok_opname.png" },
            { label: "Penerimaan Barang", color: "#6D28D9", image: "/smartfefo/pengiriman_barang_masuk.png" },
            { label: "FEFO Checkout", color: "#5B21B6", image: "/smartfefo/pengeluaran_barang.png" },
            { label: "QR Labels", color: "#4C1D95", image: "/smartfefo/qrcode_barang_masuk.png" },
            { label: "Hasil Scan", color: "#3F0F5C", image: "/smartfefo/hasil_scan.png" },
        ],
    },
];