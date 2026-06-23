import { AppShell } from "@/components/layout/app-shell";
import { HeroSection } from "@/components/home/hero-section";
import { LearningPaths } from "@/components/home/learning-paths";
import { CurriculumRoadmap } from "@/components/home/curriculum-roadmap";
import { FeaturesSection } from "@/components/home/features-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <AppShell showSidebar={false} showBreadcrumb={false}>
      <HeroSection />
      <LearningPaths />
      <CurriculumRoadmap />
      <FeaturesSection />
      <CTASection />
    </AppShell>
  );
}
