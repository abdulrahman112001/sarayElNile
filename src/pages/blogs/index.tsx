import React from "react";
import HeroBlog from "@/components/molecules/Blogs/HeroBlog";
import InterestsSection from "@/components/molecules/Blogs/Intersts";
import { DestinationSection } from "@/components/organisms";
import BlogSection from "@/components/organisms/BlogSection";
import fetchData from "@/helper/FetchData";

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

const BLogs: React.FC<Props> = ({ blogData }) => {
  console.log("🚀 ~ BLogs ~ blogData:", blogData); // Check the data here
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
  try {
    const blogData = await fetchData("blogs"); // Ensure this endpoint is correct
    return {
      props: {
        blogData,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      props: {
        blogData: { data: [] }, // Return empty data to prevent breaking the page
      },
    };
  }
}

export default BLogs;
