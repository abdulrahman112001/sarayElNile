import { places } from "@/data";

const RandomButtons = ({DetailTour}) => {
  return (
    <div className=" mx-auto p-4 mt-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {DetailTour?.tags?.map((place, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded p-1 text-center inline-block"
          >
            <span className="text-sm text-black font-segoe font-semibold">
              {place}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomButtons;
