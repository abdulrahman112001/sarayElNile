import Laptop from "./laptop/Laptop";
import Mobile from "./mobile/Mobile";

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
