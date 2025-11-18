import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AdBanner from "./components/AdBanner";
import PromoScroll from "./components/PromoScroll";
import ProductGrid from "./components/ProductGrid";
import WearScroll from "./components/WearScroll";
import AddressForm from "./components/AddressForm";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import Verification from "./pages/Verification";
import ResetPassword from "./pages/ResetPassword";
import PSScroller from "./components/PSScroller";
import Cate from "./components/Cate";







const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <AdBanner />
              <PSScroller/>
              {/* <PromoScroll /> */}
              <ProductGrid />
              <WearScroll />
            </>
          }
        />
        <Route path="/address" element={<AddressForm />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/cate" element={<Cate />} />
    
      </Routes>

      <Footer />
    </>
  );
};

export default App;
