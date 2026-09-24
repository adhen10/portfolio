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
        name: "E-Commerce Multi-Marketplace Integration System",
        desc: "Sistem integrasi pesanan multi-marketplace (Shopee, TikTok, Blibli, Lazada) dengan arsitektur config-driven — 11 toko/platform berbeda berbagi 1 sistem inti tanpa duplikasi kode, otomatis export ke format Accurate.",
        longDesc: "Sistem integrasi e-commerce yang dikembangkan bertahap untuk PT Gautama Indah Perkasa, dimulai dari 1 toko Shopee dan berkembang menjadi platform terpadu untuk 11 toko di 4 marketplace berbeda (6 toko Shopee, 5 toko TikTok, Blibli, Lazada). Tantangan utamanya bukan cuma integrasi data, tapi merancang arsitektur yang bisa menampung perbedaan struktur antar marketplace: Shopee memisahkan tiap toko ke tabel sendiri, sementara TikTok berbagi 1 tabel dengan kolom pembeda toko — sistem dirancang mengakomodasi kedua pola ini lewat konfigurasi, bukan percabangan kode. Proses debugging berulang kali menemukan bahwa marketplace mengubah struktur export Excel mereka tanpa pemberitahuan (kolom bergeser, baris deskripsi tersisip, jumlah kolom berubah drastis), yang mendorong migrasi total dari pembacaan kolom berbasis posisi tetap ke pencocokan berbasis nama header — pola yang terbukti stabil lalu diterapkan konsisten ke semua marketplace.",
        highlights: [
            "Arsitektur config-driven: 1 model + 1 controller melayani banyak toko lewat file konfigurasi, menghindari duplikasi kode di 11 toko berbeda (6 Shopee, 5 TikTok)",
            "Menangani 2 pola struktur data berbeda dalam 1 sistem — tabel terpisah per toko (Shopee) vs tabel bersama dengan kolom pembeda (TikTok) — tanpa mencampur logic keduanya",
            "Migrasi parsing Excel dari pembacaan kolom posisi-tetap ke pencocokan nama header dinamis, setelah berulang kali menemukan marketplace mengubah format export tanpa pemberitahuan",
            "Sistem peringatan visual (bukan penolakan data) untuk item tanpa batch number/tanggal kadaluwarsa — semua baris tetap tersimpan, ditandai untuk ditindaklanjuti tim gudang",
            "Export otomatis ke format Accurate (template 104 kolom) dengan flag anti-duplikat per PO dan filter kurir, mencegah data pesanan terkirim dobel ke sistem akuntansi",
            "Perbaikan bug performa & integritas data kritis: auto-size 104 kolom yang menyebabkan buffering lama, serta race condition di mana status \"sudah export\" bisa ter-update di database sebelum file benar-benar selesai terkirim ke user",
        ],
        stack: ["CodeIgniter 3", "PHP", "MySQL", "PhpSpreadsheet", "AJAX", "Bootstrap", "Accurate"],
        type: "Integration / Multi-Platform Architecture",
        category: "backend",
        year: "2026",
        featured: true,
        github: "",
        demo: "",
        slides: [
            { label: "Multi-Platform Config Architecture", color: "#EE4D2D", image: "/project-shopee.svg" },
            { label: "Header-Based Excel Parsing", color: "#C73E20", image: "/project-shopee.svg" },
            { label: "Export Accurate & Anti-Duplicate", color: "#B03216", image: "/project-shopee.svg" },
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
    },
    {
        name: "Stock Ecommerce Allocation & Multi-Marketplace Sync",
        desc: "Modul alokasi stok gudang ke ecommerce (Shopee, Shopee Belanja di Rumah, Bharatmart) — otomatis generate file mass-update siap upload per marketplace.",
        longDesc: "Modul internal yang menggantikan proses manual Excel untuk menghitung alokasi stok ecommerce dari data WMS PRIEDS. Aturan bisnis (filter expired, threshold qty, alokasi persentase, tiered rounding) di-reverse-engineer dari hasil kerja manual tim lalu divalidasi hingga 100% match sebelum dikodekan, dengan arsitektur snapshot terpisah agar tidak mengganggu tabel stok yang dipakai channel lain.",
        highlights: [
            "Sinkronisasi stok otomatis dari PRIEDS dengan aturan bisnis terkonfigurasi (expired filter, minimum threshold, persentase alokasi)",
            "Generate file mass-update siap upload langsung per marketplace — struktur & metadata file asli dipertahankan agar diterima sistem marketplace",
            "Mendukung multi-platform dengan kolom pencocokan SKU berbeda per marketplace, didesain mudah ditambah platform baru",
            "Preview alokasi stok di dashboard sebelum file digenerate, untuk verifikasi manual",
            "Debugging & perbaikan file Excel dengan struktur XML non-standar hasil export marketplace",
        ],
        stack: ["CodeIgniter 3", "PHP", "MySQL", "PhpSpreadsheet", "Bootstrap"],
        type: "Integration / Automation Tool",
        category: "backend",
        year: "2026",
        featured: true,
        github: "",
        demo: "",
        slides: [
            { label: "Dashboard & Preview Alokasi", color: "#00994D", image: "/project-stock-ecommerce.svg" },
            { label: "Sync dari PRIEDS", color: "#1F4E78", image: "/project-stock-ecommerce.svg" },
            { label: "Mass Update per Marketplace", color: "#EE4D2D", image: "/project-stock-ecommerce.svg" },
        ],
    },
];