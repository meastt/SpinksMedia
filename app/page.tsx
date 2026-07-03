import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PhoneScrollSection } from "@/components/PhoneScrollSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PackagesSection } from "@/components/PackagesSection";
import { OutOfStatePackages } from "@/components/OutOfStatePackages";
import { MetricsBanner } from "@/components/MetricsBanner";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-black)] overflow-clip">
      <Header />
      <HeroSection />
      <PhoneScrollSection />
      <ProcessSection />
      <PackagesSection />
      <OutOfStatePackages />
      <MetricsBanner />
      <TestimonialsSlider />
      <FAQSection />
      <CTASection />
      <Footer />
      <ThemeSwitcher />
    </main>
  );
}
