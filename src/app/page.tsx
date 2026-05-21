import { MotionReveal } from "@/components/common/MotionReveal";
import {
  BlogSection,
  EventsEditorialSection,
  FinalCtaSection,
  HomeHero,
  InstitutionalSection,
  ModernBentoSection,
  PlacesAndMarketplaceSection,
  StaysEditorialSection,
  TasteEditorialSection,
  VisualIndexSection
} from "@/features/home/sections";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <MotionReveal>
        <VisualIndexSection />
      </MotionReveal>
      <MotionReveal delay={0.05}>
        <ModernBentoSection />
      </MotionReveal>
      <MotionReveal delay={0.1}>
        <EventsEditorialSection />
      </MotionReveal>
      <MotionReveal delay={0.1}>
        <TasteEditorialSection />
      </MotionReveal>
      <MotionReveal delay={0.1}>
        <PlacesAndMarketplaceSection />
      </MotionReveal>
      <MotionReveal delay={0.1}>
        <StaysEditorialSection />
      </MotionReveal>
      <MotionReveal delay={0.1}>
        <InstitutionalSection />
      </MotionReveal>
      <MotionReveal delay={0.1}>
        <BlogSection />
      </MotionReveal>
      <MotionReveal delay={0.1}>
        <FinalCtaSection />
      </MotionReveal>
    </main>
  );
}
