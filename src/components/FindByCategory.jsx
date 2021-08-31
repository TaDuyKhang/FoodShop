import React from "react";
import { getProductByCategory } from "../data/BEFake";
import { List } from "./ItemBox";
import { useParams } from "react-router";
function FindByCategory(props) {
  const { id } = useParams();
  const data = getProductByCategory(id);
  console.log("data", data);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{id}</h1>
      <List passData={getProductByCategory(id)} />
    </div>
  );
}

export default FindByCategory;
