import React, { useContext, useState } from "react";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContextProvider";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const CountryDropDownBox = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  console.log(countries);
  console.log(typeof countries);
  const [isOpen, setIsOpen] = useState(false);

  type CountryList = {
    label: string;
  };

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <FmdGoodOutlinedIcon className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium">{country}</div>
          <div className="text-[13px]">Select your Place</div>
        </div>
        {isOpen ? (
          <KeyboardArrowUpIcon className="dropdown-icon-secondary" />
        ) : (
          <ExpandMoreIcon className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {countries.map((country: any, index: any) => {
          return (
            <Menu.Item
              as="li"
              className="cursor-pointer hover:text-violet-700 transition"
              onClick={() => setCountry(country)}
              key={index}
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
