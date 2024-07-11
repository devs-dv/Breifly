import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadySec = () => {
  const { id } = useParams();
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentPosition = window.pageYOffset;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setReadingProgress((currentPosition / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", updateReadingProgress);
    window.addEventListener("resize", updateReadingProgress);
    updateReadingProgress();

    return () => {
      window.removeEventListener("scroll", updateReadingProgress);
      window.removeEventListener("resize", updateReadingProgress);
    };
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-300 z-50">
        <div
          className="h-full bg-blue-500 transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto p-8 pt-16">
        <h1 className="text-4xl font-bold mb-8">Article {id}</h1>
        <div className="flex items-center mb-6">
          <div className="h-8 w-8 rounded-full bg-gray-400 mr-4"></div>
          <div>
            <div className="h-2 w-24 bg-gray-400 mb-1"></div>
            <div className="h-2 w-16 bg-gray-400"></div>
          </div>
        </div>
        {[...Array(20)].map((_, index) => (
          <p key={index} className="text-lg leading-8 mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies dui ac suscipit vestibulum. Pellentesque euismod turpis
            vel sapien bibendum, non faucibus justo placerat. In hac habitasse
            platea dictumst. Morbi id tincidunt elit. Praesent consectetur
            eleifend mi, vitae gravida ante fringilla quis. Duis maximus, erat
            metus interdum eros, in rhoncus leo augue quis quam. Sed rhoncus
            consequat ipsum, vel egestas leo congue eu.
          </p>
        ))}
      </div>
    </div>
  );
};

export default ReadySec;
