import FilterSidebar from "@/components/atoms/Filters/Filters";
import SearchInput from "@/components/atoms/Search/Search";
import TravelPackagePage from "@/components/atoms/TravelCardSearch/TravelCardSearch";
import Mobile from "./mobile/Mobile";
import Laptop from "./laptop/Laptop";

export default function Home() {
  return (
    <div className="p-6 bg-[#FAFAFA]">
      {/* Mobile view */}
      <div className="block lg:hidden">
        <Mobile />
      </div>

      {/* Laptop view */}
      <div className="hidden lg:block">
        <Laptop />
      </div>
    </div>
  );
}
