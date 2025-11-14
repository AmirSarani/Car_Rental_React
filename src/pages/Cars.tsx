import React from "react";
import { Header } from "../components/Header";
import { FeaturedVihcles } from "../components/FeaturedVihcles";
import Footer from "../components/Footer";
import AvailableCars from "../components/AvailableCars";

export const Cars = () => {
  return (
    <>
      <Header></Header>
      <AvailableCars></AvailableCars>
      <FeaturedVihcles></FeaturedVihcles>
      <Footer></Footer>
    </>
  );
};
