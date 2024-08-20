import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Card from "./Card";

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

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: true,
};

const Blog: React.FC<Props> = ({ blogData }) => {
  return (
    <div className="p-0">
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto max-w-screen-xl">
        {blogData?.data?.length > 0 ? (
          blogData.data.map((blog) => (
            <Card
              key={blog.id}
              imageSrc={blog.image}
              title={blog.title}
              id={blog.id.toString()}
            />
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>

      <div className="block md:hidden">
        <Slider {...sliderSettings}>
          {blogData?.data?.length > 0 ? (
            blogData.data.map((blog) => (
              <div key={blog.id} className="px-0">
                <Card
                  imageSrc={blog.image}
                  title={blog.title}
                  id={blog.id.toString()}
                />
              </div>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
