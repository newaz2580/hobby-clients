import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import HobbyCard from './HobbyCard';

const Home = () => {
    const hobbyData=useLoaderData()
    const [displayData,setDisplayData]=useState([])

    useEffect(()=>{
    setDisplayData(hobbyData.slice(0,6))
    },[hobbyData])

    return (
        <div>
            <h2>Home page </h2>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                displayData.map(hobby=><HobbyCard key={hobby._id} hobby={hobby}></HobbyCard>)
            }
            </div>
        </div>
    );
};

export default Home;