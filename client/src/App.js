
import { Route, Redirect, Switch } from "react-router-dom";
import React, { useEffect } from "react";

//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/RestaurantHOC";
//pages
import Home from "./pages/Home";

//Component
import Temp from "./Components/temp";
import Master from "./Components/master";
import Overview from "./pages/Overview";
import OrderOnline from "./pages/OrderOnline";
import Reviews from "./pages/Reviews";
import Menu from "./pages/Menu";
import Photos from "./pages/Photos";
function App() {
  return (
    <>


    <Route path="/" exact>
    <Redirect to="/delivery" />
    </Route>
    <HomeLayoutHOC path="/:type" exact component={Home}/>
    <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp} />
      <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Overview} />
      <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={OrderOnline} />
        <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Reviews} />
        <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Photos} />

    </>
  )
}

export default App;
