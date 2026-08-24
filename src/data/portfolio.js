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
    summary: "PHP & Laravel developer dengan pengalaman nyata di lingkungan perusahaan distribusi import — membangun sistem web untuk 20+ user, mengotomasi integrasi data e-commerce ke Accurate, mengolah sistem ETL multi-source Excel, dan mengelola server production. Adaptif terhadap CodeIgniter maupun Laravel.",
};

// ── SKILLS ────────────────────────────────────────────
export const SKILLS = [
    {
        category: "Backend Development",
        items: ["PHP", "Laravel", "CodeIgniter 3", "MySQL", "REST API", "cPanel", "ETL Processing"],
        highlight: ["Laravel", "PHP", "CodeIgniter 3"],
    },
    {
        category: "Frontend Development",
        items: ["JavaScript", "HTML", "CSS", "Bootstrap", "Blade Template", "DataTables Server-Side"],
        highlight: ["JavaScript"],
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "GitHub", "Postman", "VS Code", "Microsoft Excel", "PhpSpreadsheet", "Accurate"],
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
            "Merancang & mengimplementasikan modul Report Sales Batch (ETL Engine) untuk mengonsolidasi 4 file Excel terpisah (DO Header, Item Detail, Stock Log Batch, & Rincian Pesanan) secara otomatis ke dalam Flat Table MySQL",
            "Menerapkan DataTables Server-Side Processing (AJAX) pada Report Sales Batch sehingga merender puluhan ribu baris data transaksi hanya dalam hitungan milidetik",
            "Membangun otomasi import pesanan dari Shopee (100+ SKU/hari) ke sistem internal, lalu export ke format Excel sesuai template Accurate untuk pencatatan akuntansi",
            "Mengintegrasikan data stok dari sistem WMS PRIEDS ke aplikasi internal — memangkas proses input manual yang sebelumnya dilakukan per item",
            "Mengembangkan modul import stok mobile-first berbasis Excel untuk tim sales di lapangan",
            "Maintenance aplikasi, debugging, dan perbaikan bug berdasarkan laporan 20+ user serta mengelola cPanel & deployment production",
        ],
        stack: ["CodeIgniter 3", "PHP", "MySQL", "PhpSpreadsheet", "AJAX", "DataTables Server-Side", "Accurate"],
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
        name: "PT Elkia Jaya Trading - Corporate Landing Page",
        desc: "Website landing page resmi PT Elkia Jaya Trading yang berfokus pada layanan ekspor-impor, perdagangan internasional, dan penyediaan barang berkualitas tinggi secara global.",
        longDesc: "Landing page korporat interaktif berbasis Next.js App Router dan TypeScript. Dirancang dengan desain modern dan responsif untuk memperkuat branding perusahaan perdagangan internasional, dilengkapi komponen FAQ, testimoni, dan integrasi WhatsApp Direct Chat.",
        highlights: [
            "Membangun antarmuka landing page interaktif dengan fitur penjelas layanan ekspor-impor, keunggulan perusahaan, dan alur kerja bisnis.",
            "Mengintegrasikan komponen FAQ interaktif, testimoni, serta tombol WhatsApp melayang (floating WA) untuk mempermudah prospek bisnis menghubungi perusahaan.",
            "Menggunakan Next.js App Router & TypeScript untuk memastikan performa yang cepat, SEO-friendly, dan kode yang terstruktur."
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
        type: "Full-Stack / Company Profile",
        category: "fullstack",
        year: "2026",
        featured: true,
        github: "",
        demo: "https://elkiajayatrading.vercel.app",
        slides: [
            { label: "Hero & Landing Page", color: "#0070F3", image: "/elkiajayatrading/hero.png" },
            { label: "Jenis Pelayanan", color: "#0F172A", image: "/elkiajayatrading/jenisPelayanan.png" },
            { label: "Mengapa Memilih Kami", color: "#1E293B", image: "/elkiajayatrading/why.png" },
            { label: "Alur & Cara Kerja", color: "#334155", image: "/elkiajayatrading/caraKerja.png" },
            { label: "Review & Testimoni", color: "#25D366", image: "/elkiajayatrading/review.png" },
            { label: "Footer & Direct Contact", color: "#000000", image: "/elkiajayatrading/footer.png" }
        ]
    },
    {
        name: "Report Sales Batch ETL System",
        desc: "Sistem pengolah & integrasi data otomatis untuk mengonsolidasi 4 file Excel terpisah (Header, Detail, Stock Log, Pesanan) menjadi satu Flat Table terstruktur berbasis DataTables Server-Side.",
        longDesc: "Modul ETL (Extract, Transform, Load) internal untuk PT Gautama Indah Perkasa yang dirancang untuk mengotomasi pengolahan ribuan baris data penjualan & stok batch dari 4 file Excel berbeda. Menggunakan arsitektur Flat Table Denormalized dan AJAX Server-Side Processing sehingga pencarian dan ekspor ribuan data dapat dilakukan serba instan di bawah 1 detik.",
        highlights: [
            "Pengolahan otomatis (ETL) 4 file Excel sekaligus (DO Header, Item Details, Stock Log Batch, Rincian Pesanan)",
            "Pencocokan data presisi berbasis Regex DO Pattern Extraction & SKU Mapping",
            "Arsitektur Flat Table Denormalized + Compound Indexing untuk optimasi query skala besar",
            "Penerapan DataTables Server-Side Processing (AJAX) — loading halaman & pencarian < 1 detik",
            "UI ringkas per DO Number dengan modal popup detail SKU & Batch Expired Date",
            "Fitur ekspor otomatis ke format Excel dan pembersihan data (Truncate) aman"
        ],
        stack: ["CodeIgniter 3", "PHP", "MySQL", "PhpSpreadsheet", "AJAX", "DataTables Server-Side", "Bootstrap"],
        type: "Integration / ETL Tool",
        category: "backend",
        year: "2026",
        featured: true,
        github: "",
        demo: "",
        slides: [
            { label: "ETL Architecture & Table UI", color: "#E60073", image: "/project-sales-batch.svg" },
            { label: "Multi-Excel Data Reconciliation", color: "#3C8DBC", image: "/project-sales-batch.svg" },
            { label: "Server-Side Performance", color: "#FF7733", image: "/project-sales-batch.svg" },
        ],
    },
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
        name: "SmartFEFO",
        desc: "Sistem Manajemen Gudang Cerdas berbasis algoritma FEFO otomatis untuk optimalisasi rotasi stok dan pencegahan barang kadaluwarsa.",
        longDesc: "Solusi komprehensif manajemen gudang yang menerapkan protokol FEFO (First Expired, First Out) untuk meminimalkan risiko barang kadaluwarsa, mengotomatisasi rotasi stok, serta menyajikan data operasional gudang secara akurat dan real-time.",
        highlights: [
            "Pengurangan stok otomatis berbasis algoritma FEFO cerdas",
            "Modul Rekonsiliasi Stok (Stock Opname) secara real-time",
            "Integrasi Pemindai QR/Barcode native di peramban web",
            "Pencetakan Label QR langsung tanpa ketergantungan dokumen PDF",
            "Jejak Audit (Audit Trail) permanen untuk akuntabilitas data",
            "Kontrol Akses Berbasis Peran (RBAC) dengan batasan operasional yang ketat",
            "Otomatisasi tugas latar belakang dengan Laravel Task Scheduler",
        ],
        stack: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL", "QR Code"],
        type: "Aplikasi Web",
        category: "fullstack",
        year: "2026",
        featured: true,
        github: "https://github.com/adhen10/SmartFEFO",
        demo: "",
        slides: [
            { label: "Login", color: "#4F46E5", image: "/smartfefo/login.png" },
            { label: "Dashboard", color: "#7C3AED", image: "/smartfefo/dashboard.png" },
            { label: "Pemindai QR", color: "#A78BFA", image: "/smartfefo/scan_camera_qrcode.png" },
            { label: "Stok Opname", color: "#8B5CF6", image: "/smartfefo/koreksi_stok_opname.png" },
            { label: "Penerimaan Barang", color: "#6D28D9", image: "/smartfefo/pengiriman_barang_masuk.png" },
            { label: "Pengeluaran Barang (FEFO)", color: "#5B21B6", image: "/smartfefo/pengeluaran_barang.png" },
            { label: "Label QR", color: "#4C1D95", image: "/smartfefo/qrcode_barang_masuk.png" },
            { label: "Hasil Pemindaian", color: "#3F0F5C", image: "/smartfefo/hasil_scan.png" },
        ],
    }
];