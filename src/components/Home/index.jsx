import React from "react";
import Categories from "../Categories";
import AdvertiseBanner from "../AdvertiseBanner";
import AllCategories from "../AllCategories";
import ItemsCard from "../ItemsCard";
import Footer from "../Footer";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "../Navbar";

export default function Home({user}) {
  return (
    <>
    <Navbar user={user}/>
      <Categories />
      <AdvertiseBanner />
      <AllCategories />
      <ItemsCard title="Mobile Phones" apiCategory="smartphones" />
      <ItemsCard title="Cars" apiCategory={"vehicle"} />
      <ItemsCard title="Bikes & Motorcycle" apiCategory={"motorcycle"} />
      <ItemsCard title="Home Decoration" apiCategory={"home-decoration"} />
      <ItemsCard title="Mens Watches" apiCategory={"mens-watches"} />
      <ItemsCard title="Laptops" apiCategory={"laptops"} />
      <ItemsCard title="Mens Watches" apiCategory={"mens-watches"} />
      <Footer />
      <div>
        <ScrollToTop
        className="h-5 bg-white border-2 rounded-3xl flex pt-2 justify-center mr-6 "
          smooth
        />
      </div>
    </>
  );
}
