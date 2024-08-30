import Image from "next/image";
import React, { useState } from "react";

const faqData = [
  {
    title: "Account Overview",
    questions: [
      {
        question: "First time, what do I do next?",
        answer: "Here are the steps to get started...",
      },
      {
        question: "Changing your profile picture and other information",
        answer: "To update your profile picture, go to...",
      },
      {
        question: "I didn't get a confirmation email, what should I do next?",
        answer: "If you didn't receive a confirmation email, please check...",
      },
      {
        question:
          "What is the refund policy if I have to cancel during the month?",
        answer: "Our refund policy allows for cancellations within...",
      },
    ],
    imageUrl: "https://i.ibb.co/27R6nk5/home-1.png",
  },

  // Add more FAQ sections here as needed
];

function Faq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 lg:mt-10 mt-0">
      <div className="container mx-auto">
        <div role="article" className="bg-gray-100 py-12 md:px-8">
          <div className="px-4 xl:px-0 py-10">
            <div className="flex flex-col lg:flex-row flex-wrap">
              <div className="mt-5 lg:mt-0 lg:w-3/5">
                <div>
                  <h1 className="text-3xl ml-2 lg:ml-0 lg:text-4xl font-segoe text-gray-900 tracking-normal lg:w-11/12">
                    Frequently asked questions
                  </h1>
                </div>
              </div>
              <div className="lg:w-2/5 flex mt-5 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
                <div className="pt-2 relative text-gray-600">
                  <input
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                    onChange={handleSearch}
                  />
                  <button
                    type="submit"
                    className="focus:ring-2 focus:ring-offset-2 text-gray-600 focus:text-indigo-700 focus:rounded-full focus:bg-gray-100 focus:ring-indigo-700 bg-white focus:outline-none absolute right-0 top-0 mt-5 mr-4"
                  >
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 56.966 56.966"
                      xmlSpace="preserve"
                      width="512px"
                      height="512px"
                    >
                      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 xl:px-0">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 pb-6 gap-8">
              {faqData.map((section, sectionIndex) => (
                <div key={sectionIndex} role="cell" className="bg-gray-100">
                  <div className="bg-white p-5 rounded-md relative h-full w-full">
                    <h1 className="pb-4 text-2xl font-segoe text-yellow-700">
                      {section.title}
                    </h1>
                    <div className="my-5">
                      {section.questions
                        .filter((q) =>
                          q.question.toLowerCase().includes(searchQuery)
                        )
                        .map((item, questionIndex) => (
                          <div key={questionIndex} className="my-4 border-b">
                            <div
                              className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full"
                              onClick={() => toggleQuestion(questionIndex)}
                            >
                              <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                                {item.question}
                              </h4>
                              <svg
                                className={`w-5 h-5 ml-auto transition-transform ${
                                  openIndex === questionIndex
                                    ? "rotate-180"
                                    : ""
                                } text-yellow-500`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                            <div
                              className={`transition-all duration-300 ease-out ${
                                openIndex === questionIndex
                                  ? "max-h-40 opacity-100"
                                  : "max-h-0 opacity-0"
                              } overflow-hidden text-gray-700 mt-2 pl-4`}
                            >
                              {item.answer}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
