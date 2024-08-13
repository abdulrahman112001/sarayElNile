import React from "react";

type Props = {};

const blogData = [
  {
    id: 1,
    title: "Igniting Your Imagination",
    date: "10 FEB 2023",
    author: "JOHN DOE",
    imageUrl: "https://readymadeui.com/Imagination.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.",
  },
  {
    id: 2,
    title: "Hacks to Supercharge Your Day",
    date: "7 JUN 2023",
    author: "MARK ADAIR",
    imageUrl: "https://readymadeui.com/hacks-watch.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.",
  },
  {
    id: 3,
    title: "Trends and Predictions",
    date: "5 OCT 2023",
    author: "SIMON KONECKI",
    imageUrl: "https://readymadeui.com/prediction.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.",
  },
];

const Blogs = (props: Props) => {
  return (
    <div className="mt-20 bg-[#FAFAFA]">
      <div className="px-4 py-10 font-[sans-serif]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-segoe text-[#4e4e4e]">LATEST BLOGS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-12 max-md:max-w-lg mx-auto">
            {blogData.map((blog, index) => (
              <div
                key={blog.id}
                className={`rounded overflow-hidden p-6 transition-all duration-300 ${
                  index === 1 ? "bg-white" : "hover:bg-white"
                }`}
              >
                <img
                  src={blog.imageUrl}
                  alt={`Blog Post ${blog.id}`}
                  className="w-full h-64 object-cover rounded"
                />
                <div className="text-center">
                  <span className="text-sm block text-[#333] mb-2 mt-4">
                    {blog.date} | BY {blog.author.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold text-[#333] mb-4">
                    {blog.title}
                  </h3>
                  <p className="text-[#333] text-sm">{blog.description}</p>
                  <button
                    type="button"
                    className="px-6 py-3 text-white text-sm tracking-wider border-none outline-none bg-custom-gradient hover:bg-[#af876a] mt-6"
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
