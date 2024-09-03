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
import fetchData from "../helper/FetchData";
import { ToursData } from "@/types/tour";

interface HomeProps {
  toursData: ToursData; // Ensure this matches the type from `types/tour`
}

export default function Home({ toursData }: HomeProps) {
  console.log("🚀 ~ Home ~ toursData:", toursData);

  return (
    <>
      <HeroSection />
      <OffersSection />
      <WhyUsSection />
      <ToursSection toursData={toursData} />
      {/* <DestinationSection />
      <AttractionsSection />
      <ExcursionsSection /> */}
      {/* <AdventuresSection /> */}
      <PeaopleSaySection />
    </>
  );
}

export async function getServerSideProps() {
  const data: ToursData = await fetchData("tours");
  return {
    props: {
      toursData: data, // Ensure the whole object is passed
    },
  };
}
