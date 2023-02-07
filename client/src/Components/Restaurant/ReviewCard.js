import React, { useState, useEffect } from "react";
import { TiStarFullOutline } from "react-icons/ti";

import dayjs from "dayjs";


const ReviewCard = (props) => {


  return (
    <>
      <div className="my-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="data:image/jpeg;base64,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"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{props.username}</h3>
              <small className="text-gray-500">
                5 Reviews &#8226; 3 Followers
              </small>
            </div>
          </div>
          <button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
              3 <TiStarFullOutline />
            </span>
            <h5 className="font-regular uppercase">
              {props.isRestaurantReview ? "Dining" : "Delivery"}
            </h5>
            <small className="text-gray-500">
              {dayjs(props.createdAt).format("DD MMM YYYY")}
            </small>
          </div>
          <div className="w-full">
            <p className="w-full text-gray-600 font-light text-base">
              {props.reviewText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
