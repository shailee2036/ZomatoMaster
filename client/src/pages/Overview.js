import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";

import ReactStars from "react-rating-stars-component";

import { NextArrow, PrevArrow } from "../Components/CarouselArrows";
import MenuCollection from "../Components/Restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../Components/Restaurant/MenuSimilarRestaurantCard";
import ReviewCard from "../Components/Restaurant/ReviewCard";
import Mapview from "../Components/Restaurant/Mapview";
const Overview = ()=> {

const { id } = useParams();
const [menuImage, setMenuImages] = useState([
  "https://cdn4.vectorstock.com/i/1000x1000/43/68/thai-food-restaurant-menu-template-flat-design-vector-8854368.jpg",
  "https://i.pinimg.com/originals/1c/a7/5e/1ca75e1020ffe2d57ca4f2c674f15151.jpg"
]);
  const [Reviews, setReviews] = useState([
    {
      username:"Shailee",
      isRestaurantReview:true,
      createdAt:"2020-06-01T12:00:00:00.000Z",
      reviewText:"hvvjkjhjklkvkkkjhgikjg"
    },
    {
      username:"Purvi",
      isRestaurantReview:true,
      createdAt:"2020-06-01T12:00:00:00.000Z",
      reviewText:"hvvjkjhjklkvkkkjhgikjg"
    },
    {
      username:"Krisha",
      isRestaurantReview:false,
      createdAt:"2020-06-01T12:00:00:00.000Z",
      reviewText:"hvvjkjhjklkvkkkjhgikjg"
    },
  ]);

const cuisines = ["indian","asian", "italian"];
const averageCost=100;
const ratingChanged = (newRating) =>{
  console.log(newRating);
}
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        },
      },
    ],
  };


  return (
    <>
    <div className="flex flex-col md:flex-row relative gap-6">
       <div className="w-full md:w-8/12">
         <h2 className="font-semibold text-lg md:text-xl my-4">
           About this place
         </h2>
         <div className="flex justify-between items-center">
           <h4 className="text-lg font-medium">Menu</h4>
           <Link to={`/restaurant/${id}/menu`}>
             <span className="flex items-center gap-1 text-zomato-400">
               See all menu <IoMdArrowDropright />
             </span>
           </Link>
         </div>
         <div className="flex flex-wrap gap-3 my-4">
          <MenuCollection menuTitle="Menu" pages="3" image={menuImage} />
         </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {cuisines.map((data) => (
              <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                {data}
              </span>
            ))}
          </div>
          <div className="my-4">
           <h4 className="text-lg font-medium">Average Cost</h4>
           <h6>₹{averageCost} for one order (approx.)</h6>
           <small className="text-gray-500">
             Exclusive of applicable taxes and charges, if any
           </small>
         </div>


         <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Slider {...settings}>
              <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/dish_photos/e2a/870c930a003cef08a22d42ae5da67e2a.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
               title="Pesto & Basil Special Pizza" />
              <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/dish_photos/e2a/870c930a003cef08a22d42ae5da67e2a.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                title="Pesto & Basil Special Pizza" />
              <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/dish_photos/e2a/870c930a003cef08a22d42ae5da67e2a.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                 title="Pesto & Basil Special Pizza" />
              <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/dish_photos/e2a/870c930a003cef08a22d42ae5da67e2a.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                  title="Pesto & Basil Special Pizza" />


              </Slider>
            </div>
          </div>


         <div className="my-4 w-full  md:hidden flex flex-col gap-4">
          <Mapview
          title="la Pinoz"
             phno="+919824235357"
             mapLocation={[21.761332599367254, 72.153557559726]}
             address="Rupani road Bhavnagar"
              />
         </div>
         <div className="mb-4 mt-8 mx-2">
          <h4 className="text-lg font-medium">
            Rate your delivery experience
          </h4>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          {Reviews.map((reviewData) =>(
            <ReviewCard {...reviewData} />
          ))}

        </div>





         <div className="my-4 flex flex-col gap-4"></div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-5 shadow-md flex flex-col gap-4 "
        >
         <Mapview
         title="la Pinoz"
            phno="+919824235357"
            mapLocation={[21.761332599367254, 72.153557559726]}
            address="Rupani road Bhavnagar"
             />
        </aside>
      </div>


    </>

  )
}

export default Overview;
