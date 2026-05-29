import { MotionReveal } from "@/components/common/MotionReveal";
import {
  BlogSection,
  EventsEditorialSection,
  HomeHero,
  InstitutionalSection,
  PlacesAndMarketplaceSection,
  StaysEditorialSection,
  TasteEditorialSection,
} from "@/features/home/sections";

export default function Home() {
  return (
    <main>
      <HomeHero />
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
    </main>
  );
}
