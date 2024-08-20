import HeroBlog from "@/components/molecules/Blogs/HeroBlog";
import InterestsSection from "@/components/molecules/Blogs/Intersts";
import ExcursionList from "@/components/molecules/tourspackages";
import { DestinationSection } from "@/components/organisms";
import BlogSection from "@/components/organisms/BlogSection";
import React from "react";

type Props = {};

const BLogs = (props: Props) => {
  return (
    <div>
      <HeroBlog />
      <InterestsSection />
      <DestinationSection />
      <BlogSection />
    </div>
  );
};

export default BLogs;
