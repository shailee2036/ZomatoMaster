import React, { useState } from 'react';
import RestaurantCard from '../RestaurantCard';
import DeliveryCarousel from './DeliveryCarousal';
const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: '12213',
      photos: [
        'https://b.zmtcdn.com/data/pictures/chains/9/19015209/3a12ece4f7c57200da8ae68d9b558f8c_o2_featured_v2.jpeg?output-format=webp',
      ],
      name: 'La Pinoz Pizza',
      cuisine: ['Pizza', 'Desserts', 'Fastfood'],
      isPro: false,
      isOff: true,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: '12213',
      photos: [
        'https://b.zmtcdn.com/data/pictures/chains/9/19015209/3a12ece4f7c57200da8ae68d9b558f8c_o2_featured_v2.jpeg?output-format=webp',
      ],
      name: 'La Pinoz Pizza',
      cuisine: ['Pizza', 'Desserts', 'Fastfood'],
      isPro: false,
      isOff: true,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: '12213',
      photos: [
        'https://b.zmtcdn.com/data/pictures/chains/9/19015209/3a12ece4f7c57200da8ae68d9b558f8c_o2_featured_v2.jpeg?output-format=webp',
      ],
      name: 'La Pinoz Pizza',
      cuisine: ['Pizza', 'Desserts', 'Fastfood'],
      isPro: false,
      isOff: true,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1,
    },
  ]);

  return (
    <>
      <DeliveryCarousel />
      <div className='flex justify-between flex-wrap my-10'>
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;
