import React, { useState } from "react";
import { checkLogin } from "../data/BEFake";
import { useSelector, useDispatch } from "react-redux";
import { changeUserData } from "../features/counter/counterSlice";
import store from "../app/store";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [userData, setUserData] = useState("");
  const state = useSelector((state) => state.userData.userName);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // userData = checkLogin(userName, passWord);
    setUserData(checkLogin(userName, passWord));
  };

  useEffect(() => {
    console.log(userData);
    if (userData) {
      // console.log("Login success");
      dispatch(changeUserData(userData));

      history.push("/");
    } else {
      // console.log("wrong");
    }
    console.log(state);
    console.log(userData);
  }, [userData]);

  return (
    <form className="Login_form" onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          className="Login_input"
          type="text"
          name="userName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          className="Login_input"
          type="text"
          name="passWord"
          value={passWord}
          onChange={(event) => setPassWord(event.target.value)}
        />
        {/* <button>Đăng nhập</button> */}
      </div>
      {/* <input type="submit" value="Submit" /> */}
      {/* <Link to="/"> */}
      <button>Đăng nhập</button>
      {/* </Link> */}
    </form>
  );
}

export default Login;
