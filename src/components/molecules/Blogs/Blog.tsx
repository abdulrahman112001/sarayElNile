import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Card from "./Card";

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

type BlogData = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  image: string;
};

type Props = {
  blogData: {
    data: BlogData[];
  };
};

const Blog: React.FC<Props> = ({ blogData }) => {
  return (
    <div className="p-0">
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto max-w-screen-xl">
        {blogData.data.map((blog) => (
          <Card
            key={blog.id}
            imageSrc={blog.image}
            title={blog.title}
            content={blog.content}
            created_at={blog.created_at}
            id={blog.id.toString()}
          />
        ))}
      </div>

      <div className="block md:hidden">
        <Slider {...sliderSettings}>
          {blogData.data.map((blog) => (
            <div key={blog.id} className="px-0">
              <Card
                imageSrc={blog.image}
                title={blog.title}
                content={blog.content}
                created_at={blog.created_at}
                id={blog.id.toString()}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
