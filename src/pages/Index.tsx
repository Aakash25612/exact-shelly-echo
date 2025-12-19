import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { StatsBar } from "@/components/home/StatsBar";
import { ProductCategories } from "@/components/home/ProductCategories";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <StatsBar />
        <ProductCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;