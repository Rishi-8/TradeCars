import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Header } from "./components/Header";
import { Box, Spinner } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "./components/Footer";

import { NewCar } from "./pages/NewCar";
import { UsedCar } from "./pages/UsedCar";
import { Favourites } from "./components/Favourites";
import { SellCar } from "./pages/SellCar";
import { CarDetails } from "./pages/CarDetails";
import { SearchResult } from "./pages/SearchResult";
import { Settings } from "./pages/Settings";
import { Account } from "./components/Account";
import { Orders } from "./components/Orders";
import { UserCarList } from "./components/UserCarList";
import { Checkout } from "./pages/Checkout";
import { PaymentSuccessfull } from "./pages/PaymentSuccessfull";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    // Global spinner while checking authentication state
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spinner size="xl" />
      </div>
    );
  }

  // Protected Route function
  const ProtectedRoute = ({ element }) => {
    return user ? element : <Navigate to="/sign-in" replace />;
  };

  return (
    <BrowserRouter>
      <Header user={user} loading={loading} />
      <Box mt="80px" />
      <Routes>
        {/* Protected Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/new-car" element={<ProtectedRoute element={<NewCar />} />} />
        <Route path="/used-car" element={<ProtectedRoute element={<UsedCar />} />} />
        <Route path="/sell-car" element={<ProtectedRoute element={<SellCar />} />} />
        <Route path="/checkout/:carId" element={<ProtectedRoute element={<Checkout />} />} />
        <Route path="/settings" element={<ProtectedRoute element={<Settings />} />}>
          <Route path="account" element={<Account />} />
          <Route path="orders" element={<Orders />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="car-listing" element={<UserCarList />} />
        </Route>

        {/* Unprotected Routes */}
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/payment_successfull" element={<PaymentSuccessfull />} />
        <Route path="car/:carId" element={<CarDetails />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
