import React, { useContext, useState } from "react";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContextProvider";

//main icon
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
//Arrow icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const PriceRangeDropDown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 220000",
    },
    {
      value: "20000 - 30000",
    },
    {
      value: "30000 - 40000",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  console.log(prices);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <AccountBalanceWalletIcon className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium">{price}</div>
          <div className="text-[13px]">Select your Place</div>
        </div>
        {isOpen ? (
          <KeyboardArrowUpIcon className="dropdown-icon-secondary" />
        ) : (
          <ExpandMoreIcon className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as="li"
              className="cursor-pointer hover:text-violet-700 transition"
              onClick={() => setPrice(price.value)}
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
