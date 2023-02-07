import React, { useState, useEffect } from "react";
import MenuCollection from "../Components/Restaurant/MenuCollection";
const Menu = () => {
  const [menus, setMenus] = useState([
    "https://cdn4.vectorstock.com/i/1000x1000/43/68/thai-food-restaurant-menu-template-flat-design-vector-8854368.jpg",
    "https://i.pinimg.com/originals/1c/a7/5e/1ca75e1020ffe2d57ca4f2c674f15151.jpg"
  ]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
      </div>
    </>
  );
};
export default Menu;
