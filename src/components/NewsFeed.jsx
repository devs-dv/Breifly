import React, { useState, useRef } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";



const cardData = [
  {
    imgSrc: "https://via.placeholder.com/600x360",
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.",
    // tags: ["#something", "#sky"],
    newLabel: true,
    readTime: "3 min read",
  },
  {
    imgSrc: "https://via.placeholder.com/600x360",
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.",
    // tags: ["#something", "#sky"],
    newLabel: false,
    readTime: "3 min read",
  },
  {
    imgSrc: "https://via.placeholder.com/600x360",
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.",
    // tags: ["#something", "#sky"],
    newLabel: false,
    readTime: "3 min read",
  },

  // Add more card data here...
];
const buttonLabels = [
  "All",
  "Music",
  "JavaScript",
  "Mixes",
  "Breaking News",
  "World News",
  "Skills",
  "Politics",
  "Business",
  "Technology",
  "Science",
  "Health",
  "Entertainment",
  "Sports",
  "Environment",
  "Travel",
  "Lifestyle",
  "Opinion",
  "Education",
];

const NewsFeed = () => {
  const [likes, setLikes] = useState(cardData.map(() => false));
  const scrollContainerRef = useRef(null);

  const toggleLike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div>
      <NavBar />
      <div className="content ml-16 transition-all ease-in-out duration-500">
        <div className="h-16" />

        <div className="flex flex-col md:flex-row">
          <div className="w-full p-10  md:px-5   ">
            <h1 className="text-3xl font-bold mb-4">Latest News</h1>
            <p className="text-lg text-gray-600 mb-8">
              Stay updated with the latest news and articles.
            </p>{" "}
            <div className="relative">
              <div className="flex items-center">
                <button
                  onClick={scrollLeft}
                  className="p-2 bg-gray-200 rounded-full"
                >
                  &#9664;
                </button>
                <div
                  ref={scrollContainerRef}
                  className="bg-background p-4 overflow-x-auto whitespace-nowrap flex-1"
                  style={{ scrollBehavior: "smooth" }}
                >
                  {buttonLabels.map((label, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-full mr-2 ${
                        index === 0
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <button
                  onClick={scrollRight}
                  className="p-2 bg-gray-200 rounded-full"
                >
                  &#9654;
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-8">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src={card.imgSrc}
                      alt="Card"
                    />
                    {card.newLabel && (
                      <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">
                        New
                      </div>
                    )}
                    <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
                      {card.readTime}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-lg font-medium text-gray-800 mb-2">
                      {card.title}
                    </div>

                    <p className="text-gray-500 text-sm">{card.description}</p>
                    <Link
                      to={`/read-more/${index}`}
                      className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                      title="read more"
                    >
                      Read More »
                    </Link>
                    <div className="flex items-center justify-between  mt-3 mb-2">
                      <div className="flex gap-5">
                        <svg
                          onClick={() => toggleLike(index)}
                          className={`fill-current ${
                            likes[index]
                              ? "text-red-500"
                              : "text-gray-800 hover:text-red-500"
                          } cursor-pointer`}
                          height={24}
                          viewBox="0 0 48 48"
                          width={24}
                        >
                          <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                        </svg>
                        {/* <svg
                        fill="#262626"
                        height={24}
                        viewBox="0 0 48 48"
                        width={24}
                      >
                        <path
                          clipRule="evenodd"
                          d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                          fillRule="evenodd"
                        />
                      </svg> */}
                        <svg
                          className="fill-current text-gray-800 hover:text-blue-400   "
                          height={24}
                          viewBox="0 0 48 48"
                          width={24}
                        >
                          <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
                        </svg>
                      </div>
                      <div className="flex">
                        <svg
                          className="fill-current text-gray-800 hover:text-blue-800 "
                          height={24}
                          viewBox="0 0 48 48"
                          width={24}
                        >
                          <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" />
                        </svg>
                      </div>

                      {/* for tags   */}
                      {/* <div className=" flex relative mt-2 bottom-0  lg:absolute mb-4 md:hidden lg:block">
                      {card.tags.map((tag, tagIndex) => (
                        <a
                          key={tagIndex}
                          className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                          href="#"
                        >
                          {tag}
                        </a>
                      ))}
                    </div> */}
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
};

export default NewsFeed;
