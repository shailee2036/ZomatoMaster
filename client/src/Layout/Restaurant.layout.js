//library
import React,{ useState } from "react";

//component
import RestaurantNavbar from "../Components/Navbar/RestaurantNavbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";
import RestaurantInfo from "../Components/Restaurant/RestaurantInfo";
import InfoButtons from "../Components/Restaurant/InfoButtons";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import TabContainer from "../Components/Restaurant/Tabs";

const RestaurantLayout = ({ children }) => {
  const [restaurant, setRestaurant] = useState({
      images: [ "https://b.zmtcdn.com/data/pictures/9/19015209/6240d6749f3d143a29032ff99cc41ac1.png?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      "https://b.zmtcdn.com/data/pictures/9/19015209/26a7cd9281d89c9667453fe7abb85860.jpg?fit=around|300:273&crop=300:273;*,*",
      "https://b.zmtcdn.com/data/pictures/9/19015209/eb7a37800bc488e4acd23505ff8e2fb6.jpg?fit=around|300:273&crop=300:273;*,*",
      "https://b.zmtcdn.com/data/pictures/9/19015209/eb7a37800bc488e4acd23505ff8e2fb6.jpg?fit=around|300:273&crop=300:273;*,*",
      "https://b.zmtcdn.com/data/pictures/9/19015209/eb7a37800bc488e4acd23505ff8e2fb6.jpg?fit=around|300:273&crop=300:273;*,*"

      ],
      name: "La Pino’z Pizza",
      cuising: "Pizza, Fast Food, Beverages",
      address: "Bhavnagar Locality, Bhavnagar ",
      restaurantRating:"4.3",
      deliveryRating:"3.5"
    });

  return (
    <>

      <RestaurantNavbar />
      <div className="container mx-auto px-4 py-4 lg:px-20 pb-10 ">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo
         name={restaurant?.name}
         restaurantRating={restaurant?.restaurantRating || 0}
         deliveryRating={restaurant?.deliveryRating || 0}
         cuisine={restaurant?.cuising}
         address={restaurant?.address}
       />
       <div className="my-4 flex flex-wrap gap-3">
         <InfoButtons isActive>
           <TiStarOutline /> Add Review
         </InfoButtons>
         <InfoButtons>
           <RiDirectionLine /> Direction
         </InfoButtons>
         <InfoButtons>
           <BiBookmarkPlus /> Bookmark
         </InfoButtons>
         <InfoButtons>
           <RiShareForwardLine /> Share
         </InfoButtons>
       </div>
       <div className="my-10">
          <TabContainer></TabContainer>
        </div>

        {children}

        </div>


    </>
  );
};

export default RestaurantLayout;
