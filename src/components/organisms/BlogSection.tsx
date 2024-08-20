import React from "react";
import Blog from "../molecules/Blogs/Blog";

type Props = {};

const BlogSection = ({blogData}: Props) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer md:p-10 p-5">
        All Articles
      </div>
      <div>
        <Blog blogData={blogData} />
      </div>
    </div>
  );
};

export default BlogSection;
