// components/TermsSection.tsx

import React from "react";

type ContentItem = {
  title: string;
  description: string;
};

const contentItems: ContentItem[] = [
  {
    title: "A Guide to Igniting Your Imagination",
    description:
      "Uncover the secrets to sparking creativity and turning your ideas into reality. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.",
  },
  {
    title: "Unlock Your Creative Potential",
    description:
      "Explore innovative techniques and unleash your creative prowess. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsam, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.",
  },
  {
    title: "Mastering the Art of Imagination",
    description:
      "Learn the skills and strategies to master the art of imagination. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsam, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.",
  },
  {
    title: "Inspiration for Every Creative Soul",
    description:
      "Find inspiration for your creative journey and connect with a community of like-minded individuals. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsam, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.",
  },
];

const TermsSection: React.FC = () => {
  return (
    <div className="bg-white sm:px-6 p-4 font-segoe mt-20 lg:mt-28">
      <div className="">
        <div>
          <h2 className="lg:text-4xl text-2xl font-segoe text-gray-800 mb-4">
            Explore Our Content Section
          </h2>
          <p className="text-gray-500 text-sm mt-4">
            Discover inspiring articles that ignite your imagination and
            creativity. Duis accumsan, nunc et tempus blandit, metus mi
            consectetur felis turpis vitae ligula.
          </p>
        </div>
        <hr className="my-10" />
        <div className="grid gap-16">
          {contentItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl font-segoe text-gray-800">
                {item.title}
              </h3>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsSection;
