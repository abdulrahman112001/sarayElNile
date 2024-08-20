import React from "react";

type BlogSection = {
  title: string;
  content: string;
};

const blogData: BlogSection[] = [
  {
    title: "Queen, King, Divine God: The tale of Hatshepsut Temple",
    content:
      "In this comprehensive guide, I'll take you on a journey to explore the captivating world of Christmas in Thailand. From traditional customs to vibrant festivities, we'll uncover the hidden gems that make this time of year so special in the Land of Smiles.",
  },
  {
    title: "Thai Christmas Traditions and Customs",
    content:
      "Although Thailand is not a Christian-majority country, the Thai people have embraced certain Christmas traditions with their own unique twist. One of the most notable traditions is the use of the iconic 'Loi Krathong' or Thai floating lanterns during the holiday season.",
  },
  {
    title: "Festive Decorations",
    content:
      "These stunning trees are adorned with colorful flowers, ornaments, and intricate paper decorations, creating a mesmerizing display that's quintessentially Thai. Families gather to decorate their homes with these beautiful trees, infusing the holiday season with a touch of local flair.",
  },
  {
    title: "Gift-Giving Customs",
    content:
      "Another cherished tradition is the exchange of 'Khob Khun' or 'Thank You' cards during the Christmas season. These cards are often adorned with Thai motifs and are given to express gratitude and well wishes to friends, family, and colleagues.",
  },
  {
    title: "Queen, King, Divine God: The tale of Hatshepsut Temple",
    content:
      "In this comprehensive guide, I'll take you on a journey to explore the captivating world of Christmas in Thailand. From traditional customs to vibrant festivities, we'll uncover the hidden gems that make this time of year so special in the Land of Smiles.",
  },
  {
    title: "Thai Christmas Traditions and Customs",
    content:
      "Although Thailand is not a Christian-majority country, the Thai people have embraced certain Christmas traditions with their own unique twist. One of the most notable traditions is the use of the iconic 'Loi Krathong' or Thai floating lanterns during the holiday season.",
  },
  {
    title: "Festive Decorations",
    content:
      "These stunning trees are adorned with colorful flowers, ornaments, and intricate paper decorations, creating a mesmerizing display that's quintessentially Thai. Families gather to decorate their homes with these beautiful trees, infusing the holiday season with a touch of local flair.",
  },
  {
    title: "Gift-Giving Customs",
    content:
      "Another cherished tradition is the exchange of 'Khob Khun' or 'Thank You' cards during the Christmas season. These cards are often adorned with Thai motifs and are given to express gratitude and well wishes to friends, family, and colleagues.",
  },
];

type Props = {};

const BlogData: React.FC<Props> = (props: Props) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      {blogData.map((section, index) => (
        <div key={index} className="mb-6">
          <h1 className="text-3xl font-segoe mb-2">{section.title}</h1>
          <p className="text-gray-700">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogData;
