import { LOGO_URL } from "../utils/constant";
import {useState} from "react";
import { Link } from "react-router";

export const Header = () => {
    const [btnName, setBtnName]=useState("Login");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} alt="Food App Logo" />
      </div>
      <div className="flex items-center">
        <ul className="p-4 flex m-4">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4">Contact Us</li>
          <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button className="login" onClick={()=>btnName == "Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;