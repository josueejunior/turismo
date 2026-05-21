import {
  EventsEditorialSection,
  FinalCtaSection,
  HomeHero,
  ModernBentoSection,
  StaysEditorialSection,
  TasteEditorialSection,
  VisualIndexSection
} from "./components/home-sections";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <VisualIndexSection />
      <ModernBentoSection />
      <EventsEditorialSection />
      <TasteEditorialSection />
      <StaysEditorialSection />
      <FinalCtaSection />
    </main>
  );
}
