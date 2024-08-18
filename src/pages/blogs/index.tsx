import fetchData from "@/helper/FetchData";
import Image from "next/image";

type Blog = {
  id: number;
  imageUrl: string;
  created_at: string;
  author: string;
  title: string;
  content: string;
};

type Props = {
  blogData: {
    data: Blog[];
  };
};
const Blogs = ({ blogData }: Props) => {
  return (
    <div className="mt-20 bg-[#FAFAFA]">
      <div className="px-4 py-10 font-[sans-serif]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-segoe text-[#4e4e4e]">LATEST BLOGS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-12 max-md:max-w-lg mx-auto">
            {blogData?.data?.map((blog: Blog, index: number) => (
              <div
                key={blog?.id}
                className={`rounded overflow-hidden p-6 transition-all duration-300 ${
                  index === 1 ? "bg-white" : "hover:bg-white"
                }`}
              >
                <Image
                  width={0}
                  height={64}
                  src={blog?.imageUrl}
                  alt={`Blog? Post ${blog?.id}`}
                  className="!w-full h-64 object-cover rounded"
                />
                <div className="text-center">
                  <span className="text-sm block text-[#333] mb-2 mt-4">
                    {blog?.created_at} | BY {blog?.author?.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold text-[#333] mb-4">
                    {blog?.title}
                  </h3>
                  <p className="text-[#333] text-sm">{blog?.content}</p>
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
// fetch data with ssr
export async function getServerSideProps() {
  const blogData = await fetchData("blogs");

  return {
    props: {
      blogData,
    },
  };
}
