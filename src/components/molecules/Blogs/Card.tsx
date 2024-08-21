import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageSrc: string;
  title: string;
  content: string;
  created_at: string;
  id: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  content,
  created_at,
  id,
}) => {
  return (
    <div className="flex-shrink-0 max-w-md mx-2 rounded-sm overflow-hidden shadow-lg bg-[#FAFAFA]">
      <Link href={`/blogs/${id}`}>
        <div className="relative">
          <Image
            src={imageSrc}
            alt={title}
            width={512}
            height={320}
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 font-segoe right-0 h-32 bg-white/30 backdrop-blur-md">
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h2 className="text-lg md:text-2xl font-sego">{title}</h2>
              <p className="text-sm">{content}</p>
              <p className="text-xs">
                {new Date(created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
