import React from "react";
import BreakingNews from "./components/home/BreakingNews";
import ExploreNews from "./components/home/ExploreNews";
import FavSubjectNews from "./components/home/FavSubjectNews";
import LatestHeadline from "./components/home/LatestHeadline";
import TrendingNews from "./components/home/TrendingNews";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Categories from "./components/home/Categories";
import SelectFavSubject from "./components/home/SelectFavSubject";


const Layout = () => {
  return (
    <div>
      <BreakingNews />
      <ExploreNews />
      <Categories />
      <SelectFavSubject />
      <FavSubjectNews />
      <LatestHeadline />
      <TrendingNews />
      <WhyChooseUs />
    </div>
  );
};


export default Layout;
