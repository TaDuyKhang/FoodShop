import React from "react";
import "../styles/ItemBox.css";
import { Link } from "react-router-dom";

export function List(props) {
  // console.log("props",props);

  // debugger;
  return (
    <div>
      {props.passData.map((item, index) => {
        // item.name = item.name.replace(/\s+/g, "-");
        return (
          <Link to={`/item/${item.name}`} key={item.name}>
            {/* {ItemBox(item)} */}
            <ItemBox item={item} />
          </Link>
        );
      })}
    </div>
  );
}

export function ItemBox(props) {
  // props.item.name = props.item.name.replace("-", " ");
  // console.log("test", props.item.name);
  return (
    <div className="ItemBox" key={props.item.name}>
      <img className="picture" src={props.item.img} alt="sp" />
      <span>Tên: {props.item.name}</span>
      <span>Giá: {props.item.cost}đ</span>
    </div>
  );
}
