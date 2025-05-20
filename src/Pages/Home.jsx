import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import HobbyCard from './HobbyCard';

const Home = () => {
    const hobbyData=useLoaderData()

    return (
        <div>
            <h2>Home page </h2>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                hobbyData.map(hobby=><HobbyCard key={hobby._id} hobby={hobby}></HobbyCard>)
            }
            </div>
        </div>
    );
};

export default Home;