import React from "react";
import { findByText } from "../data/BEFake";
import { List } from "./ItemBox";
import { useParams } from "react-router";
function FindByText() {
  const { id } = useParams();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Tìm với từ khóa: {id}</h1>
      <List passData={findByText(id)} />
    </div>
  );
}

export default FindByText;
