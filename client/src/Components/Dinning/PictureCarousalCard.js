import React from 'react';
//icon
import { IoMdArrowDropright } from 'react-icons/io';
const PictureCarousalCard = () => {
  return (
    <>
      <div className='w-full h-64 relative px-4 overflow-hidden'>
        <div className='w-full h-full relative'>
          <img
            src='https://b.zmtcdn.com/data/pictures/9/18829209/fcfdb7fbb5a05b5169d43c4814fd8f5b_o2_featured_v2.jpg'
            alt='food'
            className='w-full h-full object-cover transition duration-700 ease-in-out rounded-lg'
          />
          <div
            className='w-full h-full absolute inset-0 rounded-lg'
            style={{
              background:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)',
            }}
          />
        </div>
        <div className='absolute w-full left-8 bottom-2 text-white'>
          <h4 className='z-10'>Trending This Week</h4>
          <h6 className='z-10 flex items-center'>
            15 Places <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};

export default PictureCarousalCard;
