import React from "react";
import SlideShow from "./SlideShow";
import { List } from "./ItemBox";
import data from "../drop.json";
import { getAll } from "../data/BEFake";

function Home() {
  // console.log("getAll", getAll().product);

  return (
    <div>
      <SlideShow />
      <h1 style={{ textAlign: "center" }}>Tất Cả Sản Phẩm</h1>
      <List passData={getAll().product} />
    </div>
  );
}

export default Home;
