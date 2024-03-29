import React, { useEffect, useState } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
// components
import MenuListContainer from "../Components/Restaurant/Order-Online/MenuListContainer";
import FloatMenuBtn from "../Components/Restaurant/Order-Online/FloatMenuBtn";
import FoodList from "../Components/Restaurant/Order-Online/FoodList";

// redux actions

const OrderOnline = () => {
  const [menu, setMenu] = useState([
    {
      name:'Recommended',
      items: [{
        image:"https://b.zmtcdn.com/data/dish_photos/ef6/bad6ce25e7d36c07f29c53ce4104bef6.jpg?output-format=webp",
        name:"Cheezy-7 Pizza",
        price:"130 rs",
        rating:4,
        descript:"no needed"
      }],
    },
    {
      name:'Combos',
      items: [{
        image:"https://b.zmtcdn.com/data/dish_photos/ef6/bad6ce25e7d36c07f29c53ce4104bef6.jpg?output-format=webp",
        name:"Cheezy-7 Pizza",
        price:"130 rs",
        rating:4,
        descript:"no needed"
      },
      {
        image:"https://b.zmtcdn.com/data/dish_photos/ef6/bad6ce25e7d36c07f29c53ce4104bef6.jpg?output-format=webp",
        name:"Cheezy-7 Pizza",
        price:"130 rs",
        rating:4,
        descript:"no needed"
      }
    ],

    },
    {
      name:'Suggestions',
      items: [{
        image:"https://b.zmtcdn.com/data/dish_photos/ef6/bad6ce25e7d36c07f29c53ce4104bef6.jpg?output-format=webp",
        name:"Cheezy-7 Pizza",
        price:"130 rs",
        rating:4,
        descript:"no needed"
      }],
    }
  ]);

   const [selected, setSelected] = useState("");

   const onClickHandler = (e) => {
     if (e.target.id) {
       setSelected(e.target.id);
     }
     return;
   };






  return (
    <>
      <div className="w-full h-screen flex ">
        <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
        {menu.map((item) => (
           <MenuListContainer
             {...item}
             key={item._id}
             onClickHandler={onClickHandler}
             selected={selected}
           />
         ))}

        </aside>
        <div className="w-full  px-3 md:w-3/4">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex  h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
          {menu.map((item) => (
           <FoodList key={item._id} {...item} />
         ))}

          </section>
        </div>
      </div>
       <FloatMenuBtn menu={menu}  onClickHandler={onClickHandler}
        selected={selected}/>
    </>
  );
};

export default OrderOnline;
