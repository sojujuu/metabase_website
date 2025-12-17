import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const DashboardPage = () => {
    const [loading, setLoading] = useState(true);

    // ref untuk nentuin posisi kartu dashboard
    const cardRef = useRef<HTMLDivElement | null>(null);

    // setiap kali halaman dashboard dimount, scroll ke posisi kartu
    useEffect(() => {
        if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        // posisi kartu relatif terhadap halaman, + scrollY sekarang
        // lalu dikurangi sedikit supaya ada jarak tipis dari navbar
        const targetY = rect.top + window.scrollY - 16; // atur offset di sini

        window.scrollTo({
            top: targetY,
            left: 0,
            behavior: "auto", // bisa diganti "smooth" kalau mau animasi
        });
        }
    }, []);

    return (
        <div className="min-h-screen bg-background pt-4 md:pt-6 pb-6">
        <div className="w-full px-1 sm:px-2 lg:px-4 text-center">

            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
                Dashboard Monitoring Cuaca Harian dan Kualitas Udara di Kota Jakarta
                <br className="hidden md:block" />
                <span className="text-primary">menggunakan Pearson Correlation</span>
            </h3>

            <p>ㅤ</p>

            {/* wrapper kartu yang dipakai sebagai patokan scroll */}
            <div ref={cardRef}>
                <Card className="w-full max-w-[1800px] mx-auto p-1 md:p-2 shadow-lg">
                    <div className="relative w-full overflow-hidden rounded-lg flex justify-center">
                        {/* Overlay loading – tetap full lebar kartu */}
                        {loading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/80 backdrop-blur-md z-20 animate-fadeIn">
                            <div className="relative flex items-center justify-center">
                                <div className="h-10 w-10 border-4 border-primary/30 rounded-full animate-spin"></div>
                                <div className="absolute h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin-slow"></div>
                            </div>
                            <p className="text-sm text-foreground/80 tracking-wide animate-pulse">
                                Memuat dashboard Metabase...
                            </p>
                            </div>
                        )}

                        {/* Wrapper yang di-scale kayak zoom 80% */}
                        <div
                            className="origin-top"
                            style={{
                            transform: "scale(0.8)",       // efek kira-kira sama dengan zoom 80%
                            transformOrigin: "top center",
                            width: "125%",                 // kompensasi supaya lebarnya tetap penuh
                            }}
                        >
                            <iframe
                            src="https://ciliately-unreprimanded-christen.ngrok-free.dev/public/dashboard/cefd60e4-7272-42d0-a8d6-0dd9d7b9e24e?bordered=false&titled=false"
                            className="w-full h-[1000px] border-0 rounded-lg"
                            title="Metabase Dashboard - AirWeather Jakarta"
                            allowFullScreen
                            loading="lazy"
                            onLoad={() => {
                                setTimeout(() => setLoading(false), 200);
                            }}
                            />
                        </div>
                    </div>
                </Card>
            </div>

            {/* link kecil di bawah untuk balik */}
            <div className="mt-3 text-center">
            <Link
                to="/"
                className="text-primary text-xs md:text-sm hover:underline"
            >
                ← Kembali ke Beranda
            </Link>
            </div>
        </div>
        </div>
    );
};

export default DashboardPage;
