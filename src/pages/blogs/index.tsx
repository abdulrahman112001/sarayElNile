import React from "react";
import HeroBlog from "@/components/molecules/Blogs/HeroBlog";
import DestinationSection from "@/components/organisms/DestinationSection";
import BlogSection from "@/components/organisms/BlogSection";
import fetchData from "@/helper/FetchData";
import InterestsSection from "@/components/molecules/Blogs/Intersts";

type Blog = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  image: string;
};

type Destination = {
  id: number;
  name: string;
  panar_image: string;
  image?: string; // Add optional property if it's sometimes missing
};

type Props = {
  blogData: {
    data: Blog[];
  };
  Destinations: Destination[]; // Make sure Destinations is an array of Destination
};

const BLogs: React.FC<Props> = ({ blogData, Destinations }) => {
  return (
    <div>
      <HeroBlog />
      <InterestsSection />
      <DestinationSection Destinations={Destinations} />
      <BlogSection blogData={blogData} />
    </div>
  );
};

export async function getServerSideProps() {
  const blogData = await fetchData("blogs");
  const Destinations = await fetchData("countries");

  return {
    props: {
      blogData: blogData,
      Destinations: Destinations.data,
    },
  };
}

export default BLogs;
