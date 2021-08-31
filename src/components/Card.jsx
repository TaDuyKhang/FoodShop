import React from "react";
import { useSelector } from "react-redux";
import store from "../app/store";
import "../styles/Card.css";
function Card() {
  const state = useSelector((state) => state.userData);
  console.log("userData", state);
  return (
    <div className="card_Box">
      {state.card.map((value, index) => (
        <div className="card_Item">
          <span>Tên: {value.name}</span>
          <span>Loại: {value.category}</span>
          <span>Giá: {value.cost * value.quantity}</span>
          <span>Số lượng: {value.quantity}</span>
        </div>
      ))}
    </div>
  );
}

export default Card;
