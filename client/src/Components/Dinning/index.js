import React from "react";

// components
import DiningCarousal from "./DinningCarousal";

const Dining = () => {
  return (
    <div>

      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold lg:pt-16 mx-5">
        Dine-Out Restaurants in Bhavnagar
      </h1>
        <DiningCarousal />
    </div>
  );
};

export default Dining;
