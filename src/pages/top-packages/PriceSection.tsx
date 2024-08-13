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

// Sample data
const pricePlansData: PricePlan[] = [
  {
    title: "Plan 1",
    period: "Sep - May",
    plans: [
      { name: "Basic Plan", price: "$29" },
      { name: "Standard Plan", price: "$49" },
      { name: "Premium Plan", price: "$99" },
    ],
  },
  {
    title: "Plan 2",
    period: "Sep - May",
    plans: [
      { name: "Basic Plan", price: "$29" },
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
    <div>
      <h2 className="text-3xl font-segoe text-start mt-9 mb-6">
        Prices & Accommodation
      </h2>
      <div className="flex flex-col space-y-4">
        {pricePlansData.map((plan, index) => (
          <div key={index} className="flex justify-between space-x-4">
            <PricePlanCard title={`${plan.title} - Option 1`}>
              <p className="m-4 font-segoe">{plan.period}</p>
              <div className="flex flex-col space-y-4">
                {plan.plans.map((p, i) => (
                  <div
                    key={i}
                    className="bg-[#FFF9F9] p-4 rounded-lg flex justify-around items-center text-center"
                  >
                    <FaUser className="text-2xl text-yellow-800" />
                    <p className="text-lg font-segoe mb-2">{p.name}</p>
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
                    className="bg-[#FFF9F9] p-4 rounded-lg flex justify-around items-center text-center"
                  >
                    <FaUser className="text-2xl text-yellow-800" />
                    <p className="text-lg font-segoe mb-2">{p.name}</p>
                    <p className="font-semibold">{p.price}</p>
                  </div>
                ))}
              </div>
            </PricePlanCard>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-segoe text-start mt-9 mb-6">
        Travelers Photos
      </h2>
    </div>
  );
};

export default PricePlans;
