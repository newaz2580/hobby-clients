import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router";
import HobbyCard from "./HobbyCard";
import Testimonials from "./Testimonials";
import HobbyCategories from "./Category/HobbyCategories";
import NewsLetter from "./NewsLetter/NewsLetter";
import HobbyOffer from "./HobbyOffer/HobbyOffer";

const Home = () => {
  const hobbyData = useLoaderData();
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (hobbyData.length > 0) {
      setDisplayData(hobbyData.slice(0, 8));
    }
  }, [hobbyData]);

  return (
    <div className="p-1 text-black rounded-xl bg-gray-200">
      <Banner></Banner>
      <HobbyCard displayData={displayData}></HobbyCard>
      <Testimonials></Testimonials>
      <HobbyCategories></HobbyCategories>
      <HobbyOffer></HobbyOffer>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
