import React from "react";
import BLogData from "@/components/molecules/BlogDetails/BLogData";
import HeroSectionBlogs from "@/components/molecules/BlogDetails/HeroBlogDetails";
import RelatedTours from "@/components/molecules/BlogDetails/RelatedTours";
import Blog from "@/components/molecules/Blogs/Blog";

type BlogData = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  image: string;
};

type Props = {
  blogData: {
    data: BlogData[];
  };
};

const BlogDetails: React.FC<Props> = ({ blogData }) => {
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
      <h3 className="font-segoe text-3xl ml-5 md:mb-6 mb-6">
        Related Articles
      </h3>
      <Blog blogData={blogData} />
    </div>
  );
};

export default BlogDetails;
