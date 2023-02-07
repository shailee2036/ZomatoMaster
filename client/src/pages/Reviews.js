import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import ReviewCard from "../Components/Restaurant/ReviewCard";
import AddReviewCard from "../Components/Restaurant/Reviews/AddReviewCard";

const Reviews = () => {

    const [reviews, setReviews] = useState([
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


  return (
    <>

      <div className="w-full flex flex-col md:flex-row relative gap-6">
        <div className="w-full md:w-8/12 flex flex-col gap-3">
          <div className="md:hidden">
            <AddReviewCard />
          </div>
          {reviews.map((review) => (
            <ReviewCard {...review} />
          ))}
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex items-start md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-3"
        >
          <AddReviewCard />
        </aside>
      </div>

    </>
  );
};

export default Reviews;
