import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import HobbyCard from './HobbyCard';
import Faq from './Faq';
import Testimonials from './Testimonials';
import Typewriters from './Typewriters';

const Home = () => {
    const hobbyData=useLoaderData()
    const [displayData,setDisplayData]=useState([])

    useEffect(()=>{
 
    setDisplayData(hobbyData.slice(0,6))
    },[hobbyData])

    return (
        <div className='bg-gradient-to-r from-blue-100 to-purple-200 p-1 text-black rounded-xl'>
        
            <Banner></Banner>
            <h2 className="text-4xl font-bold text-center text-green-600 py-5">Upcoming Hobby Event</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                displayData.map(hobby=><HobbyCard key={hobby._id} hobby={hobby}></HobbyCard>)
            }
            </div>
            <Testimonials></Testimonials>
            <Faq></Faq>
        </div>
    );
};

export default Home;