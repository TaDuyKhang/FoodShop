import { filter } from "minimatch";
import React, { useState, useCallback } from "react";
import { Router, Route, useParams, Link } from "react-router-dom";
import { getAll } from "../data/BEFake";
import "../styles/Item.css";
import { useDispatch, us } from "react-redux";
import { changeCardData } from "../features/counter/counterSlice";
function Item() {
  const { id } = useParams();
  const item = Filter(id);
  const [count, setCount] = useState(0);
  // const [orderData, setOrderData] = useState();
  const dispatch = useDispatch();
  const changeCount = useCallback(
    (value) => () => {
      if (value === "increase") {
        setCount(count + 1);
      } else if (value === "reduce") {
        setCount((count) => Math.max(count - 1, 0));
      } else {
        return null;
      }
    },
    [count]
  );
  const takeOrderData = () => {
    console.log("item", item[0]);

    const data = JSON.parse(JSON.stringify(item[0]));
    data.quantity = count;
    console.log("data", data);
    return data;
  };

  return (
    <div className="Detail_Box">
      {item.map((item, index) => (
        <div className="ItemDetail" key={index}>
          <h1 className="ItemDetail_Name">{item.name}</h1>
          <img className="picture" src={item.img} alt="picture" />
          <h3>Giá: {item.cost}</h3>
        </div>
      ))}
      <div>
        <button className="CountBtn" onClick={changeCount("increase")}>
          +
        </button>
        <span>Số lượng {count}</span>
        <button className="CountBtn" onClick={changeCount("reduce")}>
          -
        </button>
      </div>
      {item.map((item, index) => (
        <Link to="/card" key={item.name}>
          <button
            onClick={() =>
              count != 0 ? dispatch(changeCardData(takeOrderData())) : 0
            }
          >
            Đặt hàng
          </button>
        </Link>
      ))}
    </div>
  );
}

function Filter(id) {
  const data = getAll();
  const item = data.product.filter((value) => {
    return id === value.name;
  });
  return item;
}

export default Item;
