import FilterSidebar from "@/components/atoms/Filters/Filters";
import SearchInput from "@/components/atoms/Search/Search";
import TravelPackagePage from "@/components/atoms/TravelCardSearch/TravelCardSearch";

export default function Home() {
  return (
    <div className="p-6 bg-[#FAFAFA]">
      {/* Search Bar */}
      <div className="mt-16">
        <SearchInput />
      </div>

      {/* Main Content Layout: Filters on the left, Cards on the right */}
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-1/4">
          <FilterSidebar />
        </div>

        {/* Travel Packages */}
        <div className="w-full md:w-3/4">
          <TravelPackagePage />
        </div>
      </div>
    </div>
  );
}
