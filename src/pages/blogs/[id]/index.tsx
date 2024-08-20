import BLogData from "@/components/molecules/BlogDetails/BLogData";
import HeroSectionBlogs from "@/components/molecules/BlogDetails/HeroBlogDetails";
import RelatedTours from "@/components/molecules/BlogDetails/RelatedTours";
import React from "react";

type Props = {};

const BlogDetails: React.FC<Props> = (props) => {
  return (
    <div className="mt-16 bg-[#FAFAFA]">
      <HeroSectionBlogs />

      <div className="flex flex-col lg:flex-row w-full mt-11 px-0">
        <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
          <BLogData />
        </div>
        <div className="w-full lg:w-1/3">
          <RelatedTours />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
