import React, { useState } from "react";
//import {Container,Nav, Navbar as NavbarBS } from 'react-bootstrap';
//import { NavLink  } from 'react-router-dom';

import { Menu } from "@headlessui/react";

//main icon
//Arrow icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Category } from "@material-ui/icons";
function Navbar() {
  const Categories = [
    {
      value: "House For rent",
    },
    {
      value: "House For Sale",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [category, setCategory] = useState("category");

  return (
    <div className="flex flex-row  bg-gray-500">
      <Menu as="div" className="dropdown relative">
        <Menu.Button
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-btn text-left border-none "
        >
          <div>
            <div className="text-[20px] font-lg hover:bg-violet-500 hover:rounded-full hover:px-5">
              {category}
            </div>
          </div>
          {isOpen ? null : ( // <KeyboardArrowUpIcon className="dropdown-icon-secondary" />
            <ExpandMoreIcon className="dropdown-icon-secondary" />
          )}
        </Menu.Button>

        <Menu.Items className="dropdown-menu">
          {Categories.map((category, index) => {
            return (
              <Menu.Item
                as="li"
                className="cursor-pointer hover:text-violet-700 transition"
                onClick={() => setCategory(category.value)}
                key={index}
              >
                {category.value}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>

      <Menu as="div" className="dropdown relative">
        <Menu.Button className="dropdown-btn text-left border-none  ">
          <div>
            <div className="text-[20px] font-lg hover:bg-violet-500 hover:rounded-full hover:px-5">
              sell
            </div>
          </div>
        </Menu.Button>
      </Menu>

      <Menu as="div" className="dropdown relative">
        <Menu.Button className="dropdown-btn text-left border-none  ">
          <div>
            <div className="text-[20px] font-lg hover:bg-violet-500 hover:rounded-full hover:px-5">
              Buy
            </div>
          </div>
        </Menu.Button>
      </Menu>

      <Menu as="div" className="dropdown relative">
        <Menu.Button className="dropdown-btn text-left border-none  ">
          <div>
            <div className="text-[20px] font-lg hover:bg-violet-500 hover:rounded-full hover:px-5">
              Return
            </div>
          </div>
        </Menu.Button>
      </Menu>

      <Menu as="div" className="dropdown relative">
        <Menu.Button className="dropdown-btn text-left border-none  ">
          <div>
            <div className="text-[20px] font-lg hover:bg-violet-500 hover:rounded-full hover:px-5">
              Language
            </div>
          </div>
        </Menu.Button>
      </Menu>

      <Menu as="div" className="dropdown relative">
        <Menu.Button className="dropdown-btn text-left border-none  ">
          <div>
            <div className="text-[20px] font-lg hover:bg-violet-500 hover:rounded-full hover:px-5">
              Help
            </div>
          </div>
        </Menu.Button>
      </Menu>
    </div>

    // <Link to="/sell">Sell</Link>
    // <Link to="/buy">Buy</Link>
    // <Link to="/return">Return</Link>
    // <Link to="/language">Language</Link>
    // <Link to="/help">Help</Link>
    // <Link to="/addProduct">Add Product</Link>
    // <Link to="/customerCare">Customer Care</Link>
    // <Link to="/setMyLocation">Set My Location</Link>
  );
}

export default Navbar;
