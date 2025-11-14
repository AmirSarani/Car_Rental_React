import React from "react";
import { Header } from "../components/Header";
import { MyBookingItem } from "../components/MyBookingItem";
import Footer from "../components/Footer";

export const MyBooking = () => {
  return (
    <>
      <Header></Header>
      <MyBookingItem></MyBookingItem>
      <Footer></Footer>
    </>
  );
};
