import React from 'react';

//components
import NightLifeCarousel from './NightLifeCarousel';
const NightLife = () => {
  return (
    <div>
      <h1 className='test-xl my-4 md:my-8 md:text-3xl md:font-semibold lg:pt-16 mx-5'>
         Nightlife Restaurants in Bhavnagar
      </h1>
      <NightLifeCarousel />
    </div>
  );
};

export default NightLife;
