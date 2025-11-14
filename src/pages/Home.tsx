import { Banner } from "../components/Banner";
import { FeaturedVihcles } from "../components/FeaturedVihcles";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { LoxuryCarRent } from "../components/LoxuryCarRent";
import NeverMiss from "../components/NeverMiss";
import WhatCostomerSay from "../components/WhatCostomerSay";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <LoxuryCarRent></LoxuryCarRent>
      <FeaturedVihcles></FeaturedVihcles>
      <Banner></Banner>
      <WhatCostomerSay></WhatCostomerSay>
      <NeverMiss></NeverMiss>
      <Footer></Footer>
    </>
  );
};
