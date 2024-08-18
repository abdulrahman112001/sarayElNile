import React from "react";
import { FaUser } from "react-icons/fa";

// Define the type for a price plan
type PricePlan = {
  title: string;
  period: string;
  plans: {
    name: string;
    price: string;
  }[];
};


const pricePlansData: PricePlan[] = [
  {
    title: "Plan 1",
    period: "Sep - May",
    plans: [
      { name: "Normal Plan", price: "$29" },
      { name: "Standard Plan", price: "$49" },
      { name: "Premium Plan", price: "$99" },
    ],
  },
  {
    title: "Plan 2",
    period: "Sep - May",
    plans: [
      { name: "Normal Plan", price: "$29" },
      { name: "Standard Plan", price: "$49" },
      { name: "Premium Plan", price: "$99" },
    ],
  },
  // Add more plans as needed
];

const PricePlanCard: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div className="w-full bg-white rounded-lg p-4">
      <h2 className="text-xl font-segoe my-4 text-center">{title}</h2>
      {children}
    </div>
  );
};

const PricePlans: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-segoe text-start mt-6 md:mt-9 mb-4 md:mb-6">
        Prices & Accommodation
      </h2>
      <div className="flex flex-col space-y-8">
        {pricePlansData.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0"
          >
            <PricePlanCard title={`${plan.title} - Option 1`}>
              <p className="m-4 font-segoe">{plan.period}</p>
              <div className="flex flex-col space-y-4">
                {plan.plans.map((p, i) => (
                  <div
                    key={i}
                    className="bg-[#FFF9F9] p-3 md:p-4 rounded-lg flex flex-col md:flex-row justify-around items-center text-center space-y-2 md:space-y-0"
                  >
                    <FaUser className="text-xl md:text-2xl text-yellow-800" />
                    <p className="text-base md:text-lg font-segoe">{p.name}</p>
                    <p className="font-semibold">{p.price}</p>
                  </div>
                ))}
              </div>
            </PricePlanCard>
            <PricePlanCard title={`${plan.title} - Option 2`}>
              <p className="m-4 font-segoe">{plan.period}</p>
              <div className="flex flex-col space-y-4">
                {plan.plans.map((p, i) => (
                  <div
                    key={i}
                    className="bg-[#FFF9F9] p-3 md:p-4 rounded-lg flex flex-col md:flex-row justify-around items-center text-center space-y-2 md:space-y-0"
                  >
                    <FaUser className="text-xl md:text-2xl text-yellow-800" />
                    <p className="text-base md:text-lg font-segoe">{p.name}</p>
                    <p className="font-semibold">{p.price}</p>
                  </div>
                ))}
              </div>
            </PricePlanCard>
          </div>
        ))}
      </div>
      <h2 className="text-2xl md:text-3xl font-segoe text-start mt-6 md:mt-9 mb-4 md:mb-6">
        Travelers Photos
      </h2>
    </div>
  );
};

export default PricePlans;
