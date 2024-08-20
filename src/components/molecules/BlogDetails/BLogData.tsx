import { blogsData } from "@/data";
import React from "react";

type Props = {};

const BlogData: React.FC<Props> = (props: Props) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      {blogsData.map((section, index) => (
        <div key={index} className="mb-6">
          <h1 className="text-3xl font-segoe mb-2">{section.title}</h1>
          <p className="text-gray-700">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogData;
