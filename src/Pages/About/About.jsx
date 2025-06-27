import React from 'react';
import { Link } from 'react-router';

const About = () => {
  return (
    <div className="bg-base-100 dark:bg-gray-800  py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-primary">About HobbyHub</h2>

          <p className="text-lg text-gray-600 mb-4 dark:text-white">
            <strong>HobbyHub</strong> is your go-to platform for discovering and joining hobby-based communities.
            From <span className="font-semibold">traveling</span>, <span className="font-semibold">fishing</span>, and 
            <span className="font-semibold">food exploration</span> to <span className="font-semibold">painting</span>,
            <span className="font-semibold">cycling</span>, and <span className="font-semibold">gardening</span>, we bring people together who share the same passions.
          </p>

          <p className="text-md text-gray-500 mb-6 dark:text-white">
            Our mission is to build an inclusive environment where members can connect, collaborate,
            and celebrate their unique hobbies. Whether you're looking to join an existing group or start your own — HobbyHub is here to make it easy and exciting.
          </p>

          <div className="flex gap-4">
            <Link to='/allGroup'>
              <button className="btn btn-primary">Join a Group</button>
            </Link>
            <Link to='/createGroup'>
              <button className="btn btn-outline dark:text-white">Start Your Own</button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="https://i.ibb.co/HpnjCBzL/image-15.webp"
            alt="Hobby Community"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
