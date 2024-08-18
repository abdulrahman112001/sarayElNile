import {
  AdventuresSection,
  AttractionsSection,
  DestinationSection,
  ExcursionsSection,
  HeroSection,
  OffersSection,
  PeaopleSaySection,
  ToursSection,
  WhyUsSection,
} from "@/components/organisms";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OffersSection />
      <WhyUsSection />
      <ToursSection />
      {/* <DestinationSection />
      <AttractionsSection />
      <ExcursionsSection />
      <AdventuresSection /> */}
      <PeaopleSaySection />
    </>
  );
}
