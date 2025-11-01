import Hero from "../components/hero.client";
import Marquee from "../components/marquee.client";
import ProductGrid from "../components/productGrid.client";
import ThemeToggle from "../components/themeToggle.client";
import Testimonials from "../components/testimonials.client";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      <header className="w-full py-6">
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-lg font-bold">MyStore</div>
          <div className="hidden sm:flex gap-4 items-center">
            <a href="#products" className="text-sm text-foreground/80 hover:underline">Products</a>
            <a href="#about" className="text-sm text-foreground/80 hover:underline">About</a>
            <a href="#" className="text-sm text-foreground/80">Sign in</a>
            <ThemeToggle />
          </div>
          <div className="flex sm:hidden items-center">
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="py-6">
        <Hero />

        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-6">
            <Marquee />
          </div>
        </div>

        <ProductGrid />

        <Testimonials />

        <section id="about" className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold mb-4">Kenapa pilih kami?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 bg-card rounded-lg shadow-sm">
              <h4 className="font-semibold">Performa Cepat</h4>
              <p className="text-sm text-muted-foreground mt-2">Halaman dioptimalkan untuk kecepatan dan SEO.</p>
            </div>
            <div className="p-4 bg-card rounded-lg shadow-sm">
              <h4 className="font-semibold">Desain Cantik</h4>
              <p className="text-sm text-muted-foreground mt-2">Template modern yang mudah dikustomisasi.</p>
            </div>
            <div className="p-4 bg-card rounded-lg shadow-sm">
              <h4 className="font-semibold">Dukungan 24/7</h4>
              <p className="text-sm text-muted-foreground mt-2">Tim support siap membantu kapan pun.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-border mt-12 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">© {new Date().getFullYear()} MyStore. All rights reserved.</div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
