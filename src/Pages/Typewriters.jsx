import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Typewriters = () => {
  return (
    
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
        I love{' '}
        <span className="text-orange-400">
          <Typewriter
            words={['Fishing', 'Traveling', 'Cooking', 'Photography']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>
  
  );
};

export default Typewriters;
