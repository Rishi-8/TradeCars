import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Header } from "./components/Header";
import { Box } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Box marginTop={20}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-in" element={<Signin/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
