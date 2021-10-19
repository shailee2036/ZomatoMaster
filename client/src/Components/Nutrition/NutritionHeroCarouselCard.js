import React from 'react';

const NutritionHeroCarouselCard = (props) => {
  return (
    <div className='w-full lg:pt-24'>
      <img src={props.image} alt='medicine' className='w-full h-full' />
    </div>
  );
};

export default NutritionHeroCarouselCard;
