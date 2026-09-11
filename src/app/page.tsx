import GameHeader from "@/components/GameHeader";
import HeroShowcase from "@/components/HeroShowcase";
import AboutGame from "@/components/AboutGame";
import Features from "@/components/Features";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <GameHeader />
      <HeroShowcase />
      <AboutGame />
      <Features />
      <ScreenshotGallery />
      <Footer />
    </main>
  );
}
