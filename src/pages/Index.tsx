import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Wind, Droplets } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
              Dashboard Monitoring Cuaca Harian dan Kualitas Udara di Kota Jakarta{" "}
              <span className="text-primary"> menggunakan Pearson Correlation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Platform interaktif untuk memantau kondisi cuaca harian, tingkat kualitas udara,
              dan menganalisis korelasi antara parameter cuaca dengan polutan udara di Jakarta.
            </p>
            <div className="pt-4">
              <Button
                size="lg"
                className="text-base px-8"
                onClick={() =>
                  document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Lihat Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-16 md:py-24 bg-section-bg">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dashboard</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Dashboard interaktif ini menampilkan visualisasi komprehensif yang mencakup persentase hari
            sesuai standar WHO untuk berbagai polutan, distribusi kategori Indeks Kualitas Udara (AQI),
            matriks korelasi antara parameter cuaca dan polutan, serta analisis korelasi stabil teratas.
          </p>
        </div>

        {/* Card lebar penuh */}
        <div className="w-full">
          <Card className="shadow-lg card-no-pad">
            <CardContent className="p-0">
              <div className="metabase-shell">
                <iframe
                  id="metabaseDash"
                  className="metabase-frame"
                  title="Metabase Dashboard - AirWeather Jakarta"
                  src="https://ciliately-unreprimanded-christen.ngrok-free.dev/public/dashboard/cefd60e4-7272-42d0-a8d6-0dd9d7b9e24e?bordered=false&titled=false"
                  loading="lazy"
                  allow="fullscreen"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tentang Penelitian Section */}
      <section id="tentang" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tentang Penelitian</h2>

            <div className="space-y-8">
              <Card className="p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Penelitian ini menganalisis hubungan antara berbagai variabel cuaca—seperti suhu udara,
                  kelembapan relatif, curah hujan, durasi penyinaran matahari, kecepatan angin, dan tekanan
                  udara—dengan konsentrasi polutan udara harian di Kota Jakarta. Menggunakan metode korelasi
                  Pearson, analisis ini bertujuan mengidentifikasi pola dan kekuatan hubungan antara kondisi
                  meteorologi dan tingkat polusi udara, memberikan wawasan penting untuk pemahaman kualitas
                  udara urban dan implikasinya terhadap kesehatan masyarakat.
                </p>

                <div className="border-t pt-6 space-y-3">
                  {/* EDIT SECTION */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Peneliti</p>
                      <p className="text-muted-foreground">[Nama Peneliti]</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Program Studi / Fakultas</p>
                      <p className="text-muted-foreground">[Nama Program Studi]</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Pembimbing 1</p>
                      <p className="text-muted-foreground">[Nama Pembimbing 1]</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Pembimbing 2</p>
                      <p className="text-muted-foreground">[Nama Pembimbing 2]</p>
                    </div>
                  </div>
                  {/* END EDIT SECTION */}
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
