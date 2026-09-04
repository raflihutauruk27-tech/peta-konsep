import React from 'react';
import { 
    FlaskConical, Beaker, TestTube, Droplets, 
    Zap, Activity, RefreshCcw, Info, ChevronDown, 
    ChevronRight, CheckCircle2, BookOpen, Atom,
    ShieldAlert, Factory, HeartPulse, X,
    ZoomIn, ZoomOut
} from 'lucide-react';

// Data Struktur Peta Konsep dan Konten Materi
const conceptData = {
    id: 'root',
    title: 'ASAM DAN BASA',
    isRoot: true,
    icon: <FlaskConical size={32} />,
    content: {
        title: 'Materi Asam dan Basa',
        description: 'Peta Konsep Pembelajaran Interaktif Kimia',
        details: 'Asam dan basa adalah dua golongan senyawa kimia yang sangat penting dalam kehidupan sehari-hari, industri, dan lingkungan. Konsep asam dan basa telah dipelajari selama berabad-abad dan mengalami perkembangan teori.\n\nSilakan klik berbagai cabang pada peta konsep untuk menjelajahi lebih dalam mengenai teori, sifat, perhitungan, hingga aplikasinya dalam kehidupan.',
        example: 'Pilih salah satu materi di sebelah kiri untuk mulai belajar.'
    },
    children: [
        {
            id: 'pengertian',
            title: '1. Pengertian Asam Basa',
            icon: <BookOpen size={20} />,
            content: {
                title: 'Pengertian Asam dan Basa',
                description: 'Konsep dasar yang membedakan senyawa asam dan basa.',
                details: 'Secara umum dan sederhana, penggolongan asam dan basa dapat dikenali dari rasanya, namun tidak semua zat kimia boleh dicicipi!\n\nAsam (Acid): Zat yang rasanya masam, dapat mengubah warna kertas lakmus biru menjadi merah, dan bersifat korosif (merusak logam).\n\nBasa (Base): Zat yang rasanya pahit, terasa licin seperti sabun jika disentuh, dapat mengubah lakmus merah menjadi biru, dan bersifat kaustik (merusak kulit).',
                example: 'Asam: Jeruk (asam sitrat), Cuka (asam asetat), Aki (asam sulfat).\nBasa: Sabun, Pemutih, Obat maag (Antasida).'
            },
            children: [
                {
                    id: 'pengertian_asam',
                    title: 'Pengertian Asam',
                    content: {
                        title: 'Apa itu Asam?',
                        details: 'Kata "asam" berasal dari bahasa Latin "acidus" yang berarti masam. Secara makroskopis, asam dikenali dari rasanya yang masam dan sifatnya yang korosif terhadap logam dan batuan kapur.',
                        formula: 'Logam + Asam → Garam + Gas Hidrogen (H2)',
                        example: 'Jika Anda meneteskan air perasan jeruk nipis ke atas lantai marmer (kapur), akan timbul gelembung-gelembung gas karena sifat asam yang bereaksi dengan kapur.'
                    }
                },
                {
                    id: 'pengertian_basa',
                    title: 'Pengertian Basa',
                    content: {
                        title: 'Apa itu Basa?',
                        details: 'Dalam bahasa Arab disebut "al-qali" yang berarti abu tanaman. Basa memiliki sifat khas yaitu licin (soapy) jika terkena kulit karena ia dapat melarutkan lemak dan minyak. Basa pekat sangat berbahaya karena bersifat kaustik.',
                        example: 'Abu gosok dari hasil pembakaran kayu bersifat basa, oleh karena itu nenek moyang kita menggunakan abu gosok dicampur minyak untuk membuat sabun tradisional.'
                    }
                }
            ]
        },
        {
            id: 'teori',
            title: '2. Teori Asam Basa',
            icon: <Atom size={20} />,
            content: {
                title: 'Teori Asam dan Basa',
                description: 'Perkembangan sejarah definisi asam dan basa oleh para ilmuwan.',
                details: 'Pengertian asam dan basa berkembang seiring waktu untuk dapat menjelaskan sifat-sifat zat kimia yang semakin kompleks. Ada tiga teori utama yang diajarkan dalam Kimia SMA, yaitu Teori Arrhenius, Brønsted-Lowry, dan Lewis.'
            },
            children: [
                {
                    id: 'teori_arrhenius',
                    title: 'Teori Arrhenius',
                    content: {
                        title: 'Teori Arrhenius (1884)',
                        description: 'Teori berbasis ion dalam larutan air.',
                        details: 'Svante Arrhenius menyatakan bahwa:\n\nAsam: Zat yang dilarutkan dalam air menghasilkan ion Hidrogen (H⁺).\n\nBasa: Zat yang dilarutkan dalam air menghasilkan ion Hidroksida (OH⁻).\n\nKelemahan teori ini adalah HANYA berlaku untuk pelarut air (H₂O).',
                        formula: 'Reaksi Asam:\nHCl (aq) → H⁺(aq) + Cl⁻(aq)\n\nReaksi Basa:\nNaOH (aq) → Na⁺(aq) + OH⁻(aq)'
                    }
                },
                {
                    id: 'teori_bronsted',
                    title: 'Brønsted-Lowry',
                    content: {
                        title: 'Teori Brønsted-Lowry (1923)',
                        description: 'Teori berbasis serah-terima (transfer) proton (H⁺).',
                        details: 'J.N. Brønsted dan T.M. Lowry secara terpisah mengemukakan:\n\nAsam: Zat pendonor (pemberi) proton (H⁺).\n\nBasa: Zat akseptor (penerima) proton (H⁺).\n\nTeori ini memperkenalkan konsep Pasangan Asam-Basa Konjugasi.',
                        formula: 'NH₃ (aq) + H₂O (l) ⇌ NH₄⁺ (aq) + OH⁻ (aq)\n\nDi sini:\n- H₂O adalah Asam (memberi H⁺ ke NH₃)\n- NH₃ adalah Basa (menerima H⁺)\n- NH₄⁺ adalah Asam Konjugasi\n- OH⁻ adalah Basa Konjugasi'
                    }
                },
                {
                    id: 'teori_lewis',
                    title: 'Teori Lewis',
                    content: {
                        title: 'Teori G.N. Lewis (1923)',
                        description: 'Teori paling umum, berbasis serah-terima pasangan elektron.',
                        details: 'Asam: Spesi yang Menerima (akseptor) Pasangan Elektron Bebas (PEB).\n\nBasa: Spesi yang Memberikan (donor) Pasangan Elektron Bebas (PEB).\n\nTeori ini dapat menjelaskan reaksi asam-basa yang tidak melibatkan proton (H⁺) sama sekali.',
                        formula: 'Reaksi antara BF₃ dan NH₃:\n\nBF₃ (Asam Lewis, kurang elektron) + :NH₃ (Basa Lewis, punya 1 Pasangan Elektron Bebas) → F₃B-NH₃ (Ikatan Kovalen Koordinasi)'
                    }
                }
            ]
        },
        {
            id: 'indikator',
            title: '3. Indikator Asam Basa',
            icon: <Droplets size={20} />,
            content: {
                title: 'Indikator Asam dan Basa',
                description: 'Zat yang dapat mengubah warna pada pH tertentu.',
                details: 'Indikator asam-basa adalah suatu senyawa kompleks yang dapat bereaksi dengan asam dan basa. Indikator ini digunakan untuk mengetahui apakah suatu larutan bersifat asam, basa, atau netral, biasanya dengan memberikan perubahan warna yang mencolok pada trayek pH tertentu.'
            },
            children: [
                {
                    id: 'lakmus',
                    title: 'Kertas Lakmus',
                    content: {
                        title: 'Kertas Lakmus',
                        details: 'Lakmus adalah ekstrak tumbuhan (lichenes) yang diresapkan ke dalam kertas.\n\nLakmus Merah:\n- Di larutan Asam: Tetap Merah\n- Di larutan Basa: Berubah Biru\n\nLakmus Biru:\n- Di larutan Asam: Berubah Merah\n- Di larutan Basa: Tetap Biru',
                        example: 'Jika air jeruk diteteskan ke lakmus biru, warnanya akan menjadi merah.'
                    }
                },
                {
                    id: 'indikator_alami',
                    title: 'Indikator Alami',
                    content: {
                        title: 'Indikator Alami',
                        details: 'Ekstrak dari bagian tumbuhan seperti bunga, daun, atau akar yang berwarna pekat dapat digunakan sebagai indikator.\n\nContoh bahan: Ekstrak Kunyit, Bunga Sepatu, Kubis/Kol Ungu, Kulit Manggis.',
                        example: 'Ekstrak Kunyit:\nAsam = Kuning cerah\nBasa = Jingga/Merah kecoklatan'
                    }
                },
                {
                    id: 'indikator_universal',
                    title: 'Indikator Universal',
                    content: {
                        title: 'Indikator Universal',
                        details: 'Campuran dari berbagai macam indikator yang dapat menunjukkan nilai pH suatu larutan (dari pH 1 hingga 14) berdasarkan warna spesifik.',
                        example: 'Biasanya berbentuk gulungan kertas. Setelah dicelupkan ke larutan, kertas dicocokkan dengan pita warna standar untuk mengetahui angka pH yang akurat.'
                    }
                }
            ]
        },
        {
            id: 'kekuatan',
            title: '4. Kekuatan Asam Basa',
            icon: <Zap size={20} />,
            content: {
                title: 'Kekuatan Asam dan Basa',
                description: 'Berdasarkan derajat ionisasinya dalam air.',
                details: 'Tidak semua asam atau basa berbahaya. Kekuatannya bergantung pada seberapa banyak molekul tersebut yang terurai (terionisasi) menjadi ion-ion saat dilarutkan dalam air (Derajat Ionisasi / α).'
            },
            children: [
                {
                    id: 'asam_kuat',
                    title: 'Asam & Basa Kuat',
                    content: {
                        title: 'Asam Kuat dan Basa Kuat',
                        details: 'Zat yang terionisasi sempurna atau hampir sempurna dalam air (α ≈ 1). Artinya, seluruh molekulnya berubah menjadi ion-ion penyebab asam (H⁺) atau basa (OH⁻).\nReaksinya berlangsung satu arah (irreversible).',
                        formula: 'HCl → H⁺ + Cl⁻ (100% terurai)\nNaOH → Na⁺ + OH⁻ (100% terurai)',
                        example: 'Asam Kuat: HCl (asam klorida), H₂SO₄ (asam sulfat), HNO₃ (asam nitrat).\nBasa Kuat: LiOH, NaOH, KOH, Ca(OH)₂, Ba(OH)₂'
                    }
                },
                {
                    id: 'asam_lemah',
                    title: 'Asam & Basa Lemah',
                    content: {
                        title: 'Asam Lemah dan Basa Lemah',
                        details: 'Zat yang hanya terionisasi sebagian kecil dalam air (0 < α < 1). Sebagian besar molekulnya masih tetap utuh.\nReaksinya adalah reaksi kesetimbangan (bolak-balik).',
                        formula: 'CH₃COOH ⇌ H⁺ + CH₃COO⁻ (Hanya sedikit yang terurai)\nNH₃ + H₂O ⇌ NH₄⁺ + OH⁻',
                        example: 'Asam Lemah: CH₃COOH (cuka), HCN, H₂CO₃ (soda).\nBasa Lemah: NH₃ (amonia), Al(OH)₃'
                    }
                }
            ]
        },
        {
            id: 'ph_poh',
            title: '5. pH dan pOH',
            icon: <Activity size={20} />,
            content: {
                title: 'Konsep pH dan pOH',
                description: 'Skala logaritmik untuk mengukur keasaman.',
                details: 'pH (power of Hydrogen) adalah ukuran derajat keasaman suatu larutan. Diperkenalkan oleh Søren Peder Lauritz Sørensen. Angka pH berkisar dari 0 (sangat asam) hingga 14 (sangat basa).'
            },
            children: [
                {
                    id: 'skala_ph',
                    title: 'Skala pH',
                    content: {
                        title: 'Memahami Skala pH',
                        details: 'Skala pH normalnya dari 0 - 14 pada suhu 25°C.\n\n- pH < 7 : Sifat Asam (semakin kecil, semakin kuat asamnya)\n- pH = 7 : Sifat Netral (seperti air murni)\n- pH > 7 : Sifat Basa (semakin besar, semakin kuat basanya)',
                        example: 'pH 1: Asam lambung (kuat)\npH 4: Tomat (lemah)\npH 7: Air mineral (netral)\npH 9: Sabun (lemah)\npH 13: Cairan pembersih pipa (kuat)'
                    }
                },
                {
                    id: 'rumus_ph',
                    title: 'Rumus Perhitungan',
                    content: {
                        title: 'Rumus Menghitung pH dan pOH',
                        details: 'Huruf "p" pada pH singkatan dari operasi matematika logaritma negatif (-log).',
                        formula: 'pH = -log [H⁺]\npOH = -log [OH⁻]\n\nHubungan Keduanya:\npH + pOH = 14 (pada suhu 25°C)'
                    }
                }
            ]
        },
        {
            id: 'penerapan',
            title: '6. Penerapan dalam Kehidupan',
            icon: <HeartPulse size={20} />,
            content: {
                title: 'Penerapan Asam dan Basa',
                description: 'Aplikasi dan kehadiran asam basa di sekitar kita.',
                details: 'Asam dan basa bukan sekadar teori di laboratorium. Keduanya memainkan peran yang sangat krusial dalam metabolisme tubuh kita, alat rumah tangga, makanan, hingga proses industri raksasa.'
            },
            children: [
                {
                    id: 'industri',
                    title: 'Dalam Industri',
                    content: {
                        title: 'Penerapan Dalam Industri',
                        details: 'Asam dan basa kuat merupakan bahan baku utama bagi berbagai macam industri kimia global.',
                        example: '1. Asam Sulfat (H2SO4): Digunakan besar-besaran untuk pembuatan pupuk, pemurnian minyak bumi, dan cairan pengisi aki mobil.\n2. Natrium Hidroksida (NaOH): Dikenal sebagai soda api, digunakan untuk industri kertas, tekstil, dan bahan utama pembuat sabun padat.\n3. Amonia (NH3): Gas basa untuk bahan baku pupuk urea.'
                    }
                },
                {
                    id: 'asam_sehari',
                    title: 'Asam (Sehari-hari)',
                    content: {
                        title: 'Asam dalam Kehidupan Sehari-hari',
                        details: 'Zat asam sering kita jumpai dalam bentuk makanan, minuman, hingga bahan pembersih perabot.',
                        example: '1. Asam Asetat (CH3COOH): Digunakan sebagai cuka dapur untuk penyedap dan pengawet makanan.\n2. Asam Sitrat: Ditemukan pada jeruk, lemon, dan pengatur keasaman makanan kemasan.\n3. Asam Klorida (HCl): Bahan aktif dalam cairan pembersih kerak porselen toilet (Porstex).'
                    }
                },
                {
                    id: 'basa_sehari',
                    title: 'Basa (Sehari-hari)',
                    content: {
                        title: 'Basa dalam Kehidupan Sehari-hari',
                        details: 'Sifat basa yang dapat melarutkan lemak dan kotoran menjadikannya bahan utama produk kebersihan dan perawatan rumah.',
                        example: '1. Sabun dan Deterjen: Mengandung basa untuk mengangkat noda minyak di pakaian/kulit.\n2. Pasta Gigi: Mengandung basa lemah (misal Fluorida/Bikarbonat) untuk menetralkan asam sisa makanan di mulut yang merusak gigi.\n3. Antasida (Obat Maag): Mengandung Magnesium Hidroksida [Mg(OH)2] untuk meredakan nyeri lambung.'
                    }
                },
                {
                    id: 'tubuh_manusia',
                    title: 'Dalam Tubuh Manusia',
                    content: {
                        title: 'Asam Basa dalam Tubuh Manusia',
                        details: 'Tubuh manusia memiliki sistem pengaturan pH yang sangat ketat (sistem penyangga/buffer) agar enzim dapat bekerja optimal.',
                        example: '1. Asam Lambung (HCl): Lambung secara alami memproduksi asam kuat (pH 1.5 - 3) untuk membunuh kuman dari makanan dan mengaktifkan enzim pepsin (pencerna protein).\n2. Darah Manusia: Memiliki pH basa sangat lemah, yaitu dipertahankan ketat di angka 7.35 - 7.45. Jika turun (asidosis) atau naik (alkalosis) sedikit saja, bisa berakibat fatal.\n3. Asam Laktat: Dihasilkan oleh otot tubuh saat berolahraga berat yang menyebabkan rasa pegal.'
                    }
                }
            ]
        }
    ]
};

// Komponen Panel Informasi di sisi kanan (Desktop) atau popup menyamping (Mobile)
const InfoPanel = ({ selectedData, isMobilePanelOpen, setIsMobilePanelOpen }) => {
    if (!selectedData) return null;

    const data = selectedData.content;

    const PanelContent = () => (
        // Tema Gelap Panel: bg-slate-800
        <div className="h-full flex flex-col bg-slate-800 lg:rounded-2xl lg:shadow-xl lg:border border-slate-700 overflow-hidden relative shadow-black/30">
            {/* Header Panel */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white relative shrink-0">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-xl font-bold mb-1 leading-tight">{data.title || selectedData.title}</h2>
                        {data.description && <p className="text-blue-100 text-sm">{data.description}</p>}
                    </div>
                    {/* Tombol Tutup untuk Mobile */}
                    <button 
                        onClick={() => setIsMobilePanelOpen(false)}
                        className="lg:hidden p-1 bg-white/20 hover:bg-white/30 rounded-full transition-colors ml-4 shrink-0"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Isi Panel */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6 custom-scrollbar text-slate-300">
                {data.details && (
                    <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center">
                            <Info size={14} className="mr-1" /> Penjelasan
                        </h3>
                        <div className="text-slate-200 text-sm leading-relaxed whitespace-pre-line bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                            {data.details}
                        </div>
                    </div>
                )}
                
                {data.formula && (
                    <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center">
                            <Activity size={14} className="mr-1" /> Rumus / Reaksi
                        </h3>
                        <div className="bg-black/40 text-emerald-400 p-4 rounded-xl font-mono text-sm shadow-inner whitespace-pre-line overflow-x-auto border border-emerald-900/30">
                            {data.formula}
                        </div>
                    </div>
                )}

                {data.example && (
                    <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center">
                            <TestTube size={14} className="mr-1" /> Contoh
                        </h3>
                        <div className="bg-indigo-900/20 border border-indigo-500/20 p-4 rounded-xl text-indigo-300 text-sm whitespace-pre-line leading-relaxed">
                            {data.example}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <>
            {/* Tampilan Desktop (Sidebar Kanan Fixed) */}
            <div className="hidden lg:block w-96 h-[calc(100vh-6rem)] sticky top-24 shrink-0 transition-all duration-300 transform translate-x-0">
                <PanelContent />
            </div>

            {/* Tampilan Mobile/Tablet (Side Drawer Menyamping dari Kanan) */}
            <div className={`lg:hidden fixed inset-y-0 right-0 z-50 flex transform transition-transform duration-300 ease-in-out ${isMobilePanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Overlay Hitam Transparan */}
                <div 
                    className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMobilePanelOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    style={{ width: '100vw', right: 0 }}
                    onClick={() => setIsMobilePanelOpen(false)}
                />
                
                {/* Panel Samping (Drawer) */}
                <div className="w-[85vw] sm:w-96 h-full shadow-2xl z-10 relative bg-slate-800">
                    <PanelContent />
                </div>
            </div>
        </>
    );
};

// Komponen Rekursif untuk merender setiap simpul pada peta konsep
const TreeNode = ({ 
    node, 
    level = 0, 
    expandedNodes, 
    toggleExpand, 
    selectedNodeId, 
    handleSelect, 
    visitedNodes 
}) => {
    const isExpanded = expandedNodes.has(node.id);
    const isSelected = selectedNodeId === node.id;
    const isVisited = visitedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;

    // Styling dinamis berdasarkan level (Tema Gelap)
    const isRoot = node.isRoot;
    
    // Level 0: Judul Utama (Indigo)
    // Level 1: Sub-Bab (Emerald/Teal)
    // Level 2: Sub-Materi (Amber/Orange)
    let bgClass = isRoot 
        ? "bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-indigo-400 shadow-indigo-900/50" 
        : level === 1 
            ? "bg-gradient-to-br from-teal-700 to-emerald-600 text-white border-teal-500 shadow-teal-900/20 hover:brightness-110"
            : "bg-gradient-to-br from-amber-600 to-orange-500 text-white border-orange-400 shadow-orange-900/20 hover:brightness-110";

    if (isSelected && !isRoot) {
        // Efek cincin pendaran jika terpilih (Glowing effect)
        bgClass += " ring-2 ring-white ring-offset-2 ring-offset-slate-800 scale-105";
    }

    const handleClick = () => {
        handleSelect(node);
        if (hasChildren) {
            toggleExpand(node.id, level); // Kirim level untuk logika accordion
        }
    };

    return (
        <div className="flex flex-col items-center relative">
            {/* Kotak Materi (Node) */}
            <button
                onClick={handleClick}
                className={`
                    relative z-10 group flex flex-col items-center justify-center 
                    w-44 sm:w-52 p-3 sm:p-4 text-center
                    rounded-xl shadow-lg transition-all duration-300 border-2
                    ${bgClass}
                    ${isRoot ? 'hover:scale-105' : 'hover:-translate-y-1'}
                `}
            >
                {/* Indikator Status Kunjungan */}
                <div className="absolute top-2 right-2">
                    {isVisited && !isRoot && <CheckCircle2 size={16} className="text-white/80" />}
                </div>

                {/* Ikon */}
                {node.icon && (
                    <div className={`bg-black/20 text-white p-2.5 rounded-xl mb-2 shrink-0 shadow-inner`}>
                        {node.icon}
                    </div>
                )}
                
                {/* Judul Teks */}
                <div className={`font-semibold leading-tight drop-shadow-md ${isRoot ? 'text-lg' : 'text-sm'}`}>
                    {node.title}
                </div>

                {/* Tombol Expand/Collapse */}
                {hasChildren && (
                    <div className={`mt-3 w-full flex justify-center border-t border-white/20 pt-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDown size={18} className="text-white/70 group-hover:text-white" />
                    </div>
                )}
            </button>

            {/* Container untuk Anak-anak (Submateri) Menyebar Ke Samping */}
            {hasChildren && isExpanded && (
                <div className="flex flex-col items-center animate-in fade-in slide-in-from-top-2 duration-300 origin-top relative z-0">
                    
                    {/* Garis Vertikal Lurus Dari Induk (Ke Bawah) - Warna Abu Gelap */}
                    <div className="w-px h-8 bg-slate-500"></div>
                    
                    {/* Barisan Anak (Melebar Secara Horizontal) */}
                    <div className="flex flex-row items-start justify-center">
                        {node.children.map((child, index) => {
                            const isFirst = index === 0;
                            const isLast = index === node.children.length - 1;
                            const isOnly = node.children.length === 1;

                            return (
                                <div key={child.id} className="relative flex flex-col items-center px-2 sm:px-4">
                                    
                                    {/* Garis Horizontal Penghubung (T-Shape/Mendatar) */}
                                    {!isOnly && (
                                        <div className="absolute top-0 left-0 w-full flex h-8 -z-10">
                                            {/* Sisi Kiri (Tembus jika anak pertama) */}
                                            <div className={`w-1/2 border-t-2 border-slate-500 ${isFirst ? 'border-transparent' : ''}`}></div>
                                            {/* Sisi Kanan (Tembus jika anak terakhir) */}
                                            <div className={`w-1/2 border-t-2 border-slate-500 ${isLast ? 'border-transparent' : ''}`}></div>
                                        </div>
                                    )}
                                    
                                    {/* Garis Vertikal Lurus Turun ke Kotak Anak */}
                                    <div className="w-px h-8 bg-slate-500 -z-10"></div>
                                    
                                    {/* Pemanggilan Rekursif (Membuat kotak anak) */}
                                    <TreeNode
                                        node={child}
                                        level={level + 1}
                                        expandedNodes={expandedNodes}
                                        toggleExpand={toggleExpand}
                                        selectedNodeId={selectedNodeId}
                                        handleSelect={handleSelect}
                                        visitedNodes={visitedNodes}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default function App() {
    const [expandedNodes, setExpandedNodes] = React.useState(new Set());
    const [selectedNode, setSelectedNode] = React.useState(conceptData);
    const [visitedNodes, setVisitedNodes] = React.useState(new Set(['root']));
    const [isMobilePanelOpen, setIsMobilePanelOpen] = React.useState(false);
    
    // State untuk Zoom Peta Konsep
    const [zoom, setZoom] = React.useState(1);
    const mapContainerRef = React.useRef(null);

    // Helper: Mendapatkan ID dari seluruh keturunan sebuah node (rekursif)
    const getAllDescendantIds = (node, ids = []) => {
        if (node.children) {
            node.children.forEach(child => {
                ids.push(child.id);
                getAllDescendantIds(child, ids);
            });
        }
        return ids;
    };

    const toggleExpand = (nodeId, level) => {
        setExpandedNodes(prev => {
            const newSet = new Set(prev);
            
            if (newSet.has(nodeId)) {
                // COLLAPSE: Jika ditutup, hapus node ini dan HAPUS JUGA semua keturunannya agar saat dibuka lagi mulai dari awal
                newSet.delete(nodeId);
                
                // Cari node dari data (Fungsi pencarian sederhana)
                const findNode = (data, id) => {
                    if (data.id === id) return data;
                    if (data.children) {
                        for (let child of data.children) {
                            const found = findNode(child, id);
                            if (found) return found;
                        }
                    }
                    return null;
                };
                
                const targetNode = findNode(conceptData, nodeId);
                if (targetNode) {
                    const descendantIds = getAllDescendantIds(targetNode);
                    descendantIds.forEach(id => newSet.delete(id));
                }
            } else {
                // EXPAND: Jika Level 1 (Sub-bab) dibuka, tutup Sub-bab Level 1 lainnya (Accordion effect)
                if (level === 1) {
                    // Cari semua sub-bab level 1 dari root
                    const siblingNodes = conceptData.children;
                    siblingNodes.forEach(sibling => {
                        if (sibling.id !== nodeId && newSet.has(sibling.id)) {
                            // Hapus saudara ini dan keturunannya
                            newSet.delete(sibling.id);
                            const siblingDescendants = getAllDescendantIds(sibling);
                            siblingDescendants.forEach(id => newSet.delete(id));
                        }
                    });
                }
                newSet.add(nodeId);
            }
            return newSet;
        });
    };

    const handleSelect = (node) => {
        setSelectedNode(node);
        setVisitedNodes(prev => new Set(prev).add(node.id));
        setIsMobilePanelOpen(true);
    };

    const resetMap = () => {
        setExpandedNodes(new Set());
        setSelectedNode(conceptData);
        setZoom(1); // Reset zoom
        if (mapContainerRef.current) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Fungsi Pengendali Zoom
    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 2)); // Maksimal Zoom 200%
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.4)); // Minimal Zoom 40%

    return (
        // Tema Utama: Background Gelap (bg-slate-900)
        <div className="min-h-screen bg-slate-900 font-sans text-slate-100 selection:bg-indigo-500/30" ref={mapContainerRef}>
            
            {/* Header (Sticky Nav) - Gelap */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-40 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="bg-indigo-600 p-2 rounded-lg text-white">
                            <FlaskConical size={24} />
                        </div>
                        <h1 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
                            Kimia Interaktif
                        </h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center text-slate-400 text-sm">
                            <CheckCircle2 size={16} className="text-emerald-500 mr-1" />
                            <span>Materi: {visitedNodes.size - 1} dipelajari</span>
                        </div>
                        <button 
                            onClick={resetMap}
                            className="flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium rounded-lg transition-colors border border-slate-600"
                        >
                            <RefreshCcw size={16} className="mr-2" />
                            <span className="hidden sm:inline">Reset Peta</span>
                            <span className="sm:hidden">Reset</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Layout Utama */}
            <main className="max-w-[100vw] 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-start relative">
                
                {/* Area Kiri: Peta Konsep (Akan bisa di-scroll secara horizontal) */}
                <div className="flex-1 w-full lg:pr-6 flex flex-col min-w-0">
                    
                    {/* Legenda Singkat - Gelap */}
                    <div className="mb-6 p-4 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-slate-300 flex items-start w-full shadow-sm">
                        <Info size={20} className="shrink-0 mr-3 text-indigo-400 mt-0.5" />
                        <div>
                            <p className="font-semibold mb-1 text-slate-200">Panduan Penggunaan:</p>
                            <ul className="list-disc list-inside space-y-1 text-slate-400">
                                <li>Klik kotak utama <strong>ASAM DAN BASA</strong> untuk memulai.</li>
                                <li>Pilih satu sub-bab. Sub-bab lain akan menutup otomatis.</li>
                                <li>Bila cabang melebar, geser (scroll horizontal) dan atur zoom untuk melihat semua materi.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Area Peta Konsep (Horizontal Scrollable) */}
                    <div className="w-full flex-1 bg-slate-800 rounded-2xl border border-slate-700 shadow-lg overflow-auto custom-scrollbar relative min-h-[650px]">
                        
                        {/* Panel Kontrol Zoom (Mengambang/Sticky di pojok kiri) */}
                        <div className="sticky top-4 left-4 z-30 flex items-center bg-slate-900/90 backdrop-blur-md p-1.5 rounded-xl border border-slate-600 shadow-2xl w-max">
                            <button onClick={handleZoomOut} disabled={zoom <= 0.4} className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition-all" title="Perkecil">
                                <ZoomOut size={18} />
                            </button>
                            <button onClick={() => setZoom(1)} className="text-slate-200 text-xs font-bold w-12 text-center cursor-pointer hover:text-blue-400 transition-colors" title="Kembalikan ukuran normal">
                                {Math.round(zoom * 100)}%
                            </button>
                            <button onClick={handleZoomIn} disabled={zoom >= 2} className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition-all" title="Perbesar">
                                <ZoomIn size={18} />
                            </button>
                        </div>

                        {/* Wrapper minimum content agar cabang tidak terpotong + Implementasi Zoom transform */}
                        <div 
                            className="min-w-max p-8 sm:p-12 pb-32 flex justify-center items-start transition-transform duration-300 ease-out origin-top"
                            style={{ transform: `scale(${zoom})` }}
                        >
                            <TreeNode 
                                node={conceptData} 
                                level={0} 
                                expandedNodes={expandedNodes} 
                                toggleExpand={toggleExpand}
                                selectedNodeId={selectedNode ? selectedNode.id : null}
                                handleSelect={handleSelect}
                                visitedNodes={visitedNodes}
                            />
                        </div>
                    </div>
                    
                    {/* Whitespace ekstra bawah agar scroll lega */}
                    <div className="h-20 w-full"></div>
                </div>

                {/* Area Kanan/Mobile Drawer: Panel Informasi */}
                <InfoPanel 
                    selectedData={selectedNode} 
                    isMobilePanelOpen={isMobilePanelOpen}
                    setIsMobilePanelOpen={setIsMobilePanelOpen}
                />

            </main>
        </div>
    );
}