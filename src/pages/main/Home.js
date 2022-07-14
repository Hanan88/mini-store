import React from "react";
import Sidebar from "./../../components/Sidebar";
import Search from "./../../components/Search";
import ProductCard from "./../../components/products/ProductCard";

const Home = () => {
  return (
    <div className="pt-5 px-4">
      <div className="w_15 float-start">
        <Sidebar />
      </div>
      <>
        <Search />
      </>
      <div className="float-start d-flex flex-wrap w_85 justify-content-evenly">
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
