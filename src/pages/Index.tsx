import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { StatsBar } from "@/components/home/StatsBar";
import { ProductsSection } from "@/components/home/ProductsSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { NewsroomSection } from "@/components/home/NewsroomSection";
import { StartJourneySection } from "@/components/home/StartJourneySection";
import { CompatibilitySection } from "@/components/home/CompatibilitySection";
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
        <UseCasesSection />
        <NewsroomSection />
        <StartJourneySection />
        <CompatibilitySection />
        <EasyStepsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;