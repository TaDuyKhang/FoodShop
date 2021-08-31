import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUser,
  faCalculator,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
// import logo from "./picture/logo.webp";
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login.jsx";
import { useSelector } from "react-redux";
import store from "../app/store";
import { getCategory } from "../data/BEFake";
import { useState } from "react";

function Header() {
  const userData = useSelector((state) => state.userData);
  const [inputName, setInputName] = useState();
  // ListCategory();
  console.log(inputName);
  return (
    <div className="bix_box">
      <div className="box">
        <Link to="/">
          <img src="/picture/logo.webp" alt="logo" />
        </Link>
        <form action="" className="form">
          <input
            type="text"
            name="name"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
          />
          <Link to={"/find=" + inputName}>
            <button>Tìm</button>
          </Link>
        </form>
        <div className="DropDown">
          <p>Thể loại</p>
          <ListCategory />
        </div>

        <span>
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span style={{ color: "wheat" }}>0981234567</span>
        </span>
        {/* <a href="">
            <FontAwesomeIcon icon={faCalculator} className="icon" />
            <span>Hệ thống cửa hàng</span>
          </a> */}
        <a href="">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <Link to="/login">
            <span>{userData.userName}</span>
          </Link>
        </a>
        <Link to="/card">
          <FontAwesomeIcon icon={faShoppingBag} className="icon" />
        </Link>
      </div>
    </div>
  );
}

function ListCategory() {
  const category = getCategory();
  return (
    <div className="TypeBox">
      <ul>
        {category.map((item, index) => {
          // item = item.replace(/\s+/g, "-");
          return (
            <Link to={`/category=${item}`} key={index}>
              <li className="item">{item} </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;
