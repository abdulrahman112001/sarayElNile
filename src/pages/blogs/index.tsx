import HeroBlog from "@/components/molecules/Blogs/HeroBlog";
import InterestsSection from "@/components/molecules/Blogs/Intersts";
import { DestinationSection } from "@/components/organisms";
import BlogSection from "@/components/organisms/BlogSection";
import fetchData from "@/helper/FetchData";
import React from "react";

type Blog = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  image: string;
};

type Props = {
  blogData: {
    data: Blog[];
  };
};

const BLogs: React.FC<Props> = ({ blogData }) => {
  return (
    <div>
      <HeroBlog />
      <InterestsSection />
      <DestinationSection />
      <BlogSection blogData={blogData} />
    </div>
  );
};

export async function getServerSideProps() {
  const blogData = await fetchData("blogs");

  return {
    props: {
      blogData,
    },
  };
}

export default BLogs;
