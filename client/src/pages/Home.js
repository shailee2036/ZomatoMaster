import React from "react";
import { useParams } from "react-router-dom";

// Components
import Brand from "../Components/Delivery/Brand";
import Delivery from "../Components/Delivery";
import Dining from "../Components/Dinning";
import NightLife from "../Components/NightLife"
import Nutrition from '../Components/Nutrition';
const HomePage = () =>{
  const { type } = useParams();

  return <>
  <div className="my-5">
  {type==="delivery" && <Brand/>}
  {type=== "delivery" && <Delivery/ >}
  {type==='dining' && <Dining />}
  {type==='night' && <NightLife />}
  {type === 'nutri' && <Nutrition />}
  </div>
   </>;
};

export default HomePage;
