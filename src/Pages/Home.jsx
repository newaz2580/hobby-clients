import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import HobbyCard from './HobbyCard';
import Faq from './Faq';

const Home = () => {
    const hobbyData=useLoaderData()
    const [displayData,setDisplayData]=useState([])

    useEffect(()=>{
    setDisplayData(hobbyData.slice(0,6))
    },[hobbyData])

    return (
        <div className='bg-gradient-to-r from-blue-100 to-purple-200 p-6 text-black rounded-xl'>
            <h2 className='text-center text-4xl py-8 font-extrabold'>Hobby Group Slider</h2>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                displayData.map(hobby=><HobbyCard key={hobby._id} hobby={hobby}></HobbyCard>)
            }
            </div>
            <Faq></Faq>
        </div>
    );
};

export default Home;