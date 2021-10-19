import React from "react";
import { useParams } from "react-router-dom";

// Components
import Delivery from "./Delivery";
import Brand from "./Delivery/Brand";
import Dining from "./Dinning";
import NightLife from "./NightLife"
import Nutrition from './Nutrition';
const Master = () =>{
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

export default Master;
