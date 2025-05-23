import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router";
import HobbyCard from "./HobbyCard";
import Faq from "./Faq";
import Testimonials from "./Testimonials";

const Home = () => {
  const hobbyData = useLoaderData();
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (hobbyData.length > 0) {
      setDisplayData(hobbyData.slice(0, 6));
    }
  }, [hobbyData]);

  return (
    <div className="p-1 text-black rounded-xl ">
      <Banner></Banner>
      <HobbyCard displayData={displayData}></HobbyCard>
      <Testimonials></Testimonials>
      <Faq></Faq>
    </div>
  );
};

export default Home;
