import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "AI Engineer",
  "Cybersecurity Engineer",
  "Product Manager",
  "UI/UX Designer",
  "Graphics Designer",
  "Video Editor",
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <section className="max-w-6xl mx-auto my-20 px-4">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#6A38C2] to-[#FA4F09] bg-clip-text text-transparent">
          Explore Top Categories
        </h1>
        <p className="text-gray-600 mt-2">
          Discover roles across various domains and technologies.
        </p>
      </div>

      {/* Category Carousel */}
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="flex justify-center py-3">
                <Button
                  onClick={() => searchJobHandler(category)}
                  className="px-6 py-3 text-sm font-semibold text-white 
                             bg-gradient-to-r from-[#6A38C2] to-[#FA4F09] 
                             hover:from-[#FA4F09] hover:to-[#6A38C2]
                             transition-all duration-300 rounded-full shadow-md
                             hover:shadow-xl hover:scale-105"
                >
                  {category}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#6A38C2] text-white hover:bg-[#FA4F09] transition-all duration-300" />
        <CarouselNext className="bg-[#6A38C2] text-white hover:bg-[#FA4F09] transition-all duration-300" />
      </Carousel>
    </section>
  );
};

export default Categories;
