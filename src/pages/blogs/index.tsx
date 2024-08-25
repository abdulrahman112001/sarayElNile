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

const BLogs: React.FC<Props> = ({ blogData , Destinations }) => {
  console.log("🚀 ~ Destinations:", Destinations)
  return (
    <div>
      <HeroBlog />
      <InterestsSection />
      <DestinationSection Destinations={Destinations}/>
      <BlogSection blogData={blogData} />
    </div>
  );
};

export async function getServerSideProps() {
  const blogData = await fetchData("blogs");
  const Destinations = await fetchData("countries");


  return {
    props: {
      blogData,
      Destinations
    },
  };
}

export default BLogs;
