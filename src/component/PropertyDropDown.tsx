import React, { useContext, useState } from "react";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContextProvider";
import HomeIcon from "@mui/icons-material/Home";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const PropertyDropDown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <HomeIcon className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium">{property}</div>
          <div className="text-[13px]">Select your Place</div>
        </div>
        {isOpen ? (
          <KeyboardArrowUpIcon className="dropdown-icon-secondary" />
        ) : (
          <ExpandMoreIcon className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {properties.map((property: any, index: any) => {
          return (
            <Menu.Item
              as="li"
              className="cursor-pointer hover:text-violet-700 transition"
              onClick={() => setProperty(property)}
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
