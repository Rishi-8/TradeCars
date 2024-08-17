import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Header } from "./components/Header";
import { Box } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Footer } from "./components/Footer";

import { NewCar } from "./pages/NewCar";
import { UsedCar } from "./pages/UsedCar";
import { Favourites } from "./pages/Favourites";
import { SellCar } from "./pages/SellCar";
import { CarDetails } from "./pages/CarDetails";
import { SearchResult } from "./pages/SearchResult";
import { Settings } from "./pages/Settings";

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Box mt='80px'/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-in" element={<Signin/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/new-car" element={<NewCar/>}/>
          <Route path="/used-car" element={<UsedCar/>}/>
          <Route path="/sell-car" element={<SellCar/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
          <Route exact path="/cars/:carId" element={<CarDetails/>}/>
          <Route exact path="/search/:query" element={<SearchResult/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/settings/account" element={<Settings/>}/>
          <Route path="/settings/orders" element={<Settings/>}/>
          <Route path="/settings/favourites" element={<Settings/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
