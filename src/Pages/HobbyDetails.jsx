import React from 'react';
import { useLoaderData } from 'react-router';

const HobbyDetails = () => {
    const hobbyData=useLoaderData()
    const {image,category,date,description,email,location,members,userName}=hobbyData
   
    return (
        <div>
            <img src={image} alt="" />
            <h2>{date}</h2>
            <p>{description}</p>
            <p>{email}</p>
            <p>{location}</p>
            <p>{members}</p>
            <p>{userName}</p>
            <p>{category}</p>
            <button>Join Group</button>
        </div>
    );
};

export default HobbyDetails;