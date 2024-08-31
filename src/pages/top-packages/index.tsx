import Laptop from "@/components/templates/laptop/Laptop";
import Mobile from "@/components/templates/mobile/Mobile";
import fetchData from "@/helper/FetchData";

export default function Home({toursData}) {
  console.log("🚀 ~ Home ~ toursData:", toursData)
  return (
    <div className="md:p-6 p-0 bg-[#FAFAFA]">
      {/* Mobile view */}
      <div className="block lg:hidden">
        <Mobile />
      </div>

      {/* Laptop view */}
      <div className="hidden lg:block">
        <Laptop toursData={toursData}/>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const toursData = await fetchData("tours");

  return {
    props: {
      toursData,
    },
  };
}
