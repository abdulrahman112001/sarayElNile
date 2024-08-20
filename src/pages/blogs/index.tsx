import HeroBlog from "@/components/molecules/Blogs/HeroBlog";
import InterestsSection from "@/components/molecules/Blogs/Intersts";
import ExcursionList from "@/components/molecules/tourspackages";
import { DestinationSection } from "@/components/organisms";
import BlogSection from "@/components/organisms/BlogSection";
import fetchData from "@/helper/FetchData";
import React from "react";
type Blog = {
  id: number;
  title: string;
  image: string;
};

type Props = {
  blogData: {
    data: Blog[];
  };
};

const BLogs = ({ blogData }: Props) => {
  console.log("🚀 ~ BLogs ~ blogData:", blogData);
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
  const blogData = await fetchData("blogs"); // Ensure this endpoint is correct

  return {
    props: {
      blogData,
    },
  };
}

export default BLogs;
