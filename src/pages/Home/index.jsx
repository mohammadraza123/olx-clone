import React from "react";
import AllCategories from "../../components/AllCategories";
import ItemsCard from "../../components/ItemsCard";
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
      </PageWrapper>
    </>
  );
}
