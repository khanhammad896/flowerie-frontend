import React from "react";
import Logo from "../../assets/images/Mesh.png";
import MoonSymbol from "../../assets/images/Moon Symbol.png";
import GeoghrapySymbol from "../../assets/images/Geography.png";
import Hamburger from "../../assets/images/Hamburger Menu.png";
import User from "../../assets/images/User.png";

const Navbar = (): JSX.Element => {
  return (
    <div className="pl-20 pr-20 py-8 flex items-center justify-between ">
      <div className="flex items-center">
        <img src={Logo} alt="logo" />
        <span className="ml-1 text-2xl white font-semibold">Flowerlie</span>
      </div>
      <div className="flex items-center">
        <div className="font-semibold white text-2xl cursor-pointer">
          Venues
        </div>
        <div className="font-semibold white text-2xl mx-20 cursor-pointer">
          Suppliers
        </div>
        <div className="font-semibold white text-2xl cursor-pointer">Shop</div>
      </div>
      <div className="flex items-center">
        <div className="font-semibold text-2xl white cursor-pointer">
          Become a vendor
        </div>
        <div className="mx-8 cursor-pointer">
          <img src={MoonSymbol} alt="moon_symbol" />
        </div>
        <div className="mr-8 cursor-pointer">
          <img src={GeoghrapySymbol} alt="geography" />
        </div>
        <div className="px-2 bg-white rounded-full flex items-center justify-center">
          <img src={Hamburger} alt="hamburger" className="cursor-pointer" />
          <img src={User} alt="user" className="pl-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
