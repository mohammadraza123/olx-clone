import React from "react";
import AllCategories from "../../components/AllCategories";
import ItemsCard from "../../components/ItemsCard";
import ScrollToTop from "react-scroll-to-top";
import Categories from "../../components/Categories";
import AdvisorBanner from "../../components/AdvertiseBanner";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { items } from "../../categories";
export default function Home({ user }) {
  return (
    <>
      {user == null && <Navbar />}
      <Categories />
      <AdvisorBanner />
      <AllCategories />
      {items.map((item, index) => (
        <div key={index}>
          <ItemsCard title={item.title} apiCategory={item.apiCategory} />
        </div>
      ))}
      <Footer />
      <ScrollToTop
        className="h-5 bg-white border-2 rounded-3xl flex pt-2 justify-center mr-6 "
        smooth
        height="20"
        style={{
          backgroundColor: "white",
          border: "2px solid skyBlue",
          borderRadius: "25px",
          display: "flex",
          paddingTop: "8px",
          justifyContent: "center",
          marginRight: "-26px",
        }}
      />
    </>
  );
}
