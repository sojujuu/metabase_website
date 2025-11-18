    import { Button } from "@/components/ui/button";
    import { Card } from "@/components/ui/card";
    import { Cloud, Wind, Droplets } from "lucide-react";
    import { Link } from "react-router-dom";
    // import { useEffect } from "react";
    const dashboardPreviewSrc = `${import.meta.env.BASE_URL}dashboard-preview.png`;
    const Index = () => {
        // setiap kali masuk ke beranda, paksa scroll ke paling atas
        // useEffect(() => {
        //     window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        // }, []);scrollTo

        return (
            <div className="animate-page min-h-screen bg-background">
            {/* Header / Navbar */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                    <Cloud className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">AirWeather Jakarta</span>
                    </div>
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
                        Dashboard
                    </a>
                    <a
                        href="#tentang"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        Tentang Penelitian
                    </a>
                    </nav>
                    {/* Mobile menu - simplified for this static site */}
                    <div className="md:hidden flex items-center gap-4">
                    <a href="#dashboard" className="text-sm font-medium text-primary">
                        Dashboard
                    </a>
                    </div>
                </div>
                </div>
            </header>

            {/* Beranda (Hero) Section */}
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
                    Dashboard Monitoring Cuaca Harian dan Kualitas Udara di Kota Jakarta 
                    <span className="text-primary"> menggunakan Pearson Correlation</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Platform interaktif untuk memantau kondisi cuaca harian, tingkat kualitas udara, 
                    dan menganalisis korelasi antara parameter cuaca dengan polutan udara di Jakarta.
                    </p>
                    <div className="pt-4">
                        <Link to="/dashboard">
                            <Button
                                size="lg"
                                className="text-base px-8"
                                // onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
                            >
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Dashboard</h2>
                    <p className="text-muted-foreground">
                    Dashboard interaktif ini menampilkan visualisasi komprehensif yang mencakup persentase hari 
                    sesuai standar WHO untuk berbagai polutan, distribusi kategori Indeks Kualitas Udara (AQI), 
                    matriks korelasi antara parameter cuaca dan polutan, serta analisis korelasi stabil teratas.
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                    Klik gambar dashboard di bawah atau tombol &quot;Lihat Dashboard&quot; di bagian atas untuk membuka versi interaktif.
                    </p>
                </div>

                {/* Kartu preview dashboard yang bisa diklik */}
                <Link
                    to="/dashboard"
                    className="w-full max-w-[1550px]"
                >
                    <Card className="w-full p-2 md:p-4 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-full overflow-hidden rounded-lg border bg-background">
                        <img
                        src={dashboardPreviewSrc}
                        alt="Preview Dashboard Monitoring Cuaca Harian dan Kualitas Udara di Kota Jakarta menggunakan Pearson Correlation"
                        className="w-full h-auto block"
                        />
                    </div>
                    </Card>
                </Link>
                </div>
            </div>
            </section>

            {/* Tentang Penelitian Section */}
            <section id="tentang" className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Tentang Penelitian
                    </h2>

                    <div className="space-y-8">
                        <Card className="p-6 md:p-8">
                        <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                            Penelitian ini berfokus pada pengembangan dan analisis 
                            <span className="font-semibold">
                            {" "}Dashboard Monitoring Cuaca Harian dan Kualitas Udara di Kota Jakarta menggunakan Pearson Correlation
                            </span>. Penelitian ini menganalisis hubungan antara variabel cuaca seperti suhu udara, 
                            kelembapan relatif, curah hujan, durasi penyinaran matahari, dan kecepatan angin dengan 
                            konsentrasi polutan udara harian di Kota Jakarta. Metode korelasi Pearson digunakan untuk 
                            mengukur kekuatan dan arah hubungan antara parameter meteorologi dan tingkat polusi udara, 
                            sehingga hasil analisis dapat mendukung pemantauan kualitas udara di wilayah urban. 
                            Dashboard ini dibangun menggunakan Metabase dan diintegrasikan dengan situs web publik 
                            agar dapat diakses secara luas melalui GitHub Pages.
                        </p>

                        <div className="border-t pt-6 space-y-3">
                            <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold text-foreground mb-1">Peneliti</p>
                                <p className="text-muted-foreground">
                                Onggo Julius Siddharta (NPM 825220085)
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground mb-1">Program Studi / Tahun</p>
                                <p className="text-muted-foreground">
                                Program Studi Sistem Informasi, Universitas Tarumanagara, 2022
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground mb-1">Pembimbing 1</p>
                                <p className="text-muted-foreground">
                                Bapak Dr. Dedi Trisnawarman, S.Si., M.Kom.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground mb-1">Pembimbing 2</p>
                                <p className="text-muted-foreground">
                                Bapak Irvan Lewenusa, S.Kom., M.Kom.
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
                    <p>© 2025 Proyek Analitik AirWeather Jakarta — Dashboard divisualisasikan menggunakan Metabase.</p>
                </div>
                </div>
            </footer>
            </div>
        );
    };

    export default Index;
