import React from "react";
import AllCategories from "../../components/AllCategories";
import ItemsCard from "../../components/ItemsCard";
import ScrollToTop from "react-scroll-to-top";
import Categories from "../../components/Categories";
import AdvisorBanner from "../../components/AdvertiseBanner";
import { items } from "../../categories";
import PageWrapper from "../../components/PageWrapper";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <Categories />
        <AdvisorBanner />
        <AllCategories />
        {items.map((item, index) => (
          <div key={index}>
            <ItemsCard title={item.title} apiCategory={item.apiCategory} />
          </div>
        ))}
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
      </PageWrapper>
    </>
  );
}
