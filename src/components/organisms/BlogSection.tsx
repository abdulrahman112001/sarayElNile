import React from "react";
import Blog from "../molecules/Blogs/Blog";
import Loader from "../molecules/Loader";

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

const BlogSection: React.FC<Props> = ({ blogData }) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-center text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer md:p-10 p-5">
        All Articles
      </div>
      <div>
        {blogData?.data?.length > 0 ? <Blog blogData={blogData} /> : <Loader />}
      </div>
    </div>
  );
};

export default BlogSection;
