import Image from "next/image";
import User from "../../../public/assets/infocard.png";
import { FaStar } from "react-icons/fa"; // Import the star icon

// Define the review item type
interface Review {
  name: string;
  username: string;
  date: string;
  content: string;
  rating: number; // Number of stars to show
}

// Sample review data
const reviews: Review[] = [
  {
    name: "Abdirhman Ahmed",
    username: "@username",
    date: "13 Apr 2024",
    content:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of.",
    rating: 5,
  },
  {
    name: "Abdirhman Ahmed",
    username: "@username",
    date: "13 Apr 2024",
    content:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of.",
    rating: 4,
  },
  {
    name: "Abdirhman Ahmed",
    username: "@username",
    date: "13 Apr 2024",
    content:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of.",
    rating: 3,
  },
  {
    name: "Abdirhman Ahmed",
    username: "@username",
    date: "13 Apr 2024",
    content:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of.",
    rating: 4,
  },
  // Add more reviews here
];

const Reviews = () => {
  return (
    <div>
      <h2 className="text-3xl font-segoe text-start mt-9 mb-6">Reviews</h2>
      <div className="p-4">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-start mb-6">
            <Image
              src={User}
              alt="Profile picture"
              width={48}
              height={48}
              className="rounded-full mr-3"
            />
            <div className="flex-1">
              <div className="flex items-center">
                <h3 className="font-bold text-black">{review.name}</h3>
                <span className="ml-2 text-gray-500">{review.username}</span>
                <span className="ml-2 text-gray-500">• {review.date}</span>
              </div>
              <div className="flex items-center mt-1">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <FaStar key={i + review.rating} className="text-gray-300" />
                ))}
              </div>
              <p className="mt-2 text-gray-800">{review.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="flex items-center px-4 py-2 border border-opacity-60 border-yellow-700 bg-gray-100 text-[#A16207] font-segoe text-lg rounded-md hover:bg-[#8a4c03] hover:text-white transition-colors duration-300">
          View More Details
        </button>
      </div>
    </div>
  );
};

export default Reviews;
