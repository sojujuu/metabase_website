import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cloud, Wind, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const dashboardPreviewSrc = `${import.meta.env.BASE_URL}dashboard-preview.png?v=2`;

type GoogleUser = {
    name?: string;
    email?: string;
    picture?: string;
};

const STORAGE_KEY = "airweather_google_user";

const Index = () => {
    const [user, setUser] = useState<GoogleUser | null>(null);

    useEffect(() => {
        try {
        const raw = localStorage.getItem(STORAGE_KEY);
        setUser(raw ? JSON.parse(raw) : null);
        } catch {
        setUser(null);
        }
    }, []);

    const handleLogout = () => {
        if (user?.email && window.google) {
        window.google.accounts.id.revoke(user.email, () => {});
        }

        localStorage.removeItem(STORAGE_KEY);
        window.location.reload();
    };

    return (
        <div className="animate-page min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                <Cloud className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">AirWeather Jakarta</span>
                </div>

                <div className="flex items-center gap-4">
                <nav className="hidden md:flex items-center gap-6">
                    <a
                    href="#beranda"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                    Beranda
                    </a>
                    <a
                    href="#dashboard"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                    Preview Dashboard
                    </a>
                    <a
                    href="#tentang"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                    Tentang Penelitian
                    </a>
                </nav>

                {user && (
                    <div className="flex items-center gap-3">
                    <span className="hidden md:inline text-sm font-medium text-muted-foreground max-w-[160px] truncate">
                        {user.name}
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={handleLogout}
                    >
                        Keluar
                    </Button>
                    </div>
                )}
                </div>
            </div>

            {/* Mobile nav */}
            <div className="flex items-center justify-between pb-2 md:hidden">
                <nav className="flex items-center gap-4 text-sm">
                <a href="#beranda" className="text-muted-foreground">
                    Beranda
                </a>
                <a href="#dashboard" className="text-primary font-medium">
                    Preview Dashboard
                </a>
                <a href="#tentang" className="text-muted-foreground">
                    Tentang
                </a>
                </nav>
            </div>
            </div>
        </header>

        {/* Hero Section */}
        <section id="beranda" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-hero-from/10 to-hero-to/10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                <Wind className="h-8 w-8 md:h-12 md:w-12 text-primary" />
                <Droplets className="h-8 w-8 md:h-12 md:w-12 text-accent" />
                <Cloud className="h-8 w-8 md:h-12 md:w-12 text-primary" />
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Dashboard Monitoring Cuaca Harian dan Kualitas Udara di Kota Jakarta{" "}
                <span className="text-primary">menggunakan Pearson Correlation</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Platform interaktif untuk memantau kondisi cuaca harian, tingkat kualitas udara,
                dan menganalisis korelasi antara parameter cuaca dengan polutan udara di Jakarta.
                </p>

                <div className="pt-4">
                <Link to="/dashboard">
                    <Button size="lg" className="text-base px-8">
                    Lihat Dashboard
                    </Button>
                </Link>
                </div>
            </div>
            </div>
        </section>

        {/* Dashboard Section */}
        <section id="dashboard" className="py-16 md:py-24 bg-section-bg">
            <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col items-center">
                <div className="text-center mb-12 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Preview Dashboard</h2>

                <p className="text-muted-foreground">
                    Dashboard interaktif ini menampilkan visualisasi komprehensif yang mencakup persentase hari
                    sesuai standar WHO, distribusi kategori AQI, tren bulanan polutan per tahun,
                    matriks korelasi cuaca dan polutan, serta analisis kestabilan korelasi.
                </p>

                <p className="mt-3 text-sm text-muted-foreground">
                    Klik gambar di bawah untuk membuka dashboard interaktif.
                </p>
                </div>

                <Link to="/dashboard" className="w-full max-w-[1550px]">
                <Card className="w-full p-2 md:p-4 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-full overflow-hidden rounded-lg border bg-background">
                    <img
                        src={dashboardPreviewSrc}
                        alt="Preview Dashboard Monitoring Cuaca Harian dan Kualitas Udara"
                        className="w-full h-auto block"
                    />
                    </div>
                </Card>
                </Link>
            </div>
            </div>
        </section>

        {/* Tentang Penelitian */}
        <section id="tentang" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Tentang Penelitian
                </h2>

                <div className="space-y-8">
                <Card className="p-6 md:p-8">
                    <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                    Penelitian ini merancang dan mengimplementasikan dasbor analitik publik untuk
                    memantau cuaca harian dan kualitas udara di Kota Jakarta dengan mengintegrasikan
                    data cuaca BMKG dan data Indeks Standar Pencemar Udara (ISPU) Satu Data Jakarta
                    periode 2014–2024. Hubungan antara variabel meteorologi (suhu, kelembapan,
                    curah hujan, penyinaran matahari, dan angin) dengan polutan udara (PM₁₀, SO₂,
                    NO₂, CO, dan O₃) dianalisis menggunakan korelasi Pearson sebagai metode utama
                    dan korelasi peringkat Spearman sebagai metode pendukung untuk memvalidasi arah
                    hubungan yang dihasilkan.
                    </p>

                    {/* Hasil utama singkat */}
                    <p className="text-muted-foreground leading-relaxed text-justify">
                    Hasil analisis yang ditampilkan pada dasbor menunjukkan bahwa tingkat
                    kepatuhan terhadap ambang batas WHO 2021 berbeda cukup jauh antar polutan:
                    CO memiliki persentase hari sesuai standar tertinggi, sekitar 93,53%, sedangkan
                    PM₁₀ hanya sekitar 21,35%. Temuan ini mengindikasikan bahwa partikulat kasar
                    (PM₁₀) masih menjadi faktor dominan yang menurunkan kualitas udara di Jakarta.
                    Pola tren bulanan juga memperlihatkan bahwa PM₁₀ dan O₃ cenderung meningkat
                    pada periode pertengahan tahun yang lebih kering (sekitar Maret–Juni), sementara
                    CO, NO₂, dan SO₂ relatif lebih stabil sepanjang tahun.
                    </p>

                    {/* Insight korelasi + kesimpulan sistem */}
                    <p className="text-muted-foreground leading-relaxed text-justify">
                    Matriks korelasi Pearson dan Spearman pada dasbor memperlihatkan contoh pola
                    hubungan seperti suhu rata-rata yang berkorelasi positif dengan ozon (O₃) dan
                    curah hujan yang berkorelasi negatif dengan PM₁₀, sedangkan kelembapan rata-rata
                    dan arah angin maksimum muncul berulang kali sebagai pasangan korelasi yang
                    stabil terhadap O₃ dan PM₁₀. Secara keseluruhan, penelitian ini menyimpulkan
                    bahwa dasbor yang dibangun mampu menyajikan gambaran komprehensif hubungan
                    cuaca–polusi udara di Jakarta dalam bentuk visual yang mudah dibaca, telah
                    teruji melalui pengujian blackbox dan User Acceptance Test (UAT), serta berhasil
                    diintegrasikan ke situs web publik menggunakan Metabase dan GitHub Pages dengan
                    autentikasi Google sebagai lapisan akses awal.
                    </p>
                    
                    <div className="border-t pt-6 space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                        <p className="font-semibold text-foreground mb-1">Peneliti</p>
                        <p className="text-muted-foreground">
                            Onggo Julius Siddharta (825220085)
                        </p>
                        </div>

                        <div>
                        <p className="font-semibold text-foreground mb-1">Program Studi / Tahun</p>
                        <p className="text-muted-foreground">
                            Sistem Informasi, Universitas Tarumanagara, 2022
                        </p>
                        </div>

                        <div>
                        <p className="font-semibold text-foreground mb-1">Pembimbing 1</p>
                        <p className="text-muted-foreground">
                            Dr. Dedi Trisnawarman, S.Si., M.Kom.
                        </p>
                        </div>

                        <div>
                        <p className="font-semibold text-foreground mb-1">Pembimbing 2</p>
                        <p className="text-muted-foreground">
                            Irvan Lewenusa, S.Kom., M.Kom.
                        </p>
                        </div>
                    </div>
                    </div>
                </Card>
                </div>
            </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-section-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-sm text-muted-foreground">
                <p>
                © 2025 Proyek Analitik AirWeather Jakarta — Dashboard divisualisasikan dengan Metabase.
                </p>
            </div>
            </div>
        </footer>
        </div>
    );
};

export default Index;
