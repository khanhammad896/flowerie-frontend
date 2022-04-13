import React, { useState } from "react";
import Logo from "../../assets/images/Mesh.png";
import MoonSymbol from "../../assets/images/Moon Symbol.png";
import GeoghrapySymbol from "../../assets/images/Geography.png";
import Hamburger from "../../assets/images/Hamburger Menu.png";
import User from "../../assets/images/User.png";
import NavDropDown from "./NavDropDown";

const Navbar = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleDropDownOpen = (
    event: React.MouseEvent<HTMLButtonElement | null>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropDownClose = () => {
    setAnchorEl(null);
  };

  const dropDownOpen = Boolean(anchorEl);
  const id = dropDownOpen ? "nav-dropdown" : undefined;
  console.log("Drop Down Open => ", dropDownOpen);
  return (
    <div className="pl-20 pr-20 py-8 flex items-center justify-between ">
      <div className="flex items-center">
        <img src={Logo} alt="logo" />
        <span className="ml-1 text-2xl white font-semibold">Flowerie</span>
      </div>
      <div className="flex items-center">
        <div className="font-semibold white text-2xl flex flex-col items-center">
          <span>Venues</span>
          <div className="w-1/2 h-1 bg-white rounded-full mt-0.5" />
        </div>
        <div className="font-semibold white text-2xl mx-12 cursor-pointer">
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
          <button
            className="cursor-pointer"
            aria-describedby={id}
            onClick={handleDropDownOpen}
          >
            <img src={Hamburger} alt="hamburger" />
          </button>
          <NavDropDown
            id={id}
            open={dropDownOpen}
            anchorEl={anchorEl}
            handleClose={handleDropDownClose}
          />
          <img src={User} alt="user" className="pl-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
