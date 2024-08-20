import Laptop from "@/components/templates/laptop/Laptop";
import Mobile from "@/components/templates/mobile/Mobile";

export default function Home() {
  return (
    <div className="md:p-6 p-0 bg-[#FAFAFA]">
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
