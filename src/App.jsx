import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddressForm from "./components/AddressForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdBanner from "./components/AdBanner";
import PromoScroll from "./components/PromoScroll";
import ProductGrid from "./components/ProductGrid";
import WearScroll from "./components/WearScroll";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import Verification from "./pages/Verification";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  return (
    <BrowserRouter>
     
      <Header />
      

     
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            <AdBanner />
            <PromoScroll />
            <ProductGrid />
            <WearScroll />
          </>
        } />
        <Route path="/address" element={<AddressForm />} />
        
         <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>

    
      <Footer />
    </BrowserRouter>
  );
};

export default App;
