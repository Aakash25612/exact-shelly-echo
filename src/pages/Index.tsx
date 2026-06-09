import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { StatsBar } from "@/components/home/StatsBar";
import { ProductsSection } from "@/components/home/ProductsSection";
import { SmartHomeSection } from "@/components/home/SmartHomeSection";
import { BrandSolutionsSection } from "@/components/home/BrandSolutionsSection";
import { NewsroomSection } from "@/components/home/NewsroomSection";
import { StartJourneySection } from "@/components/home/StartJourneySection";
import { EasyStepsSection } from "@/components/home/EasyStepsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <StatsBar />
        <ProductsSection />
        <SmartHomeSection />
        <ShellySolutionsSection />
        <NewsroomSection />
        <StartJourneySection />
        <EasyStepsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
