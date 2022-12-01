import React from "react";

import ADZMONSTERS2 from "./image/ADZMONSTERS2.png";

// import user from "./image/user.png";
// import cart from "./image/cart.png";
// import heart from "./image/heart.png";
// import message from "./image/message.png";

// import FaUser   from "react-icons/fc";
//searchIcon
import SearchIcon from "@mui/icons-material/Search";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MessageIcon from "@mui/icons-material/Message";

// import BsHeartFill from "react-icons/fc";

// import  BsFillCartFill   from "react-icons/fc";

// import AiFillMessage from "react-icons/fc";

// const imagesList = [
//   {
//     imageUrl: user,
//     alt: "user",
//   },
//   {
//     imageUrl: cart,
//     alt: "cart",
//   },
//   {
//     imageUrl: heart,
//     alt: "heart",
//   },
//   {
//     imageUrl: message,
//     alt: "message",
//   },
// ];

const SearchBox: React.FC<{}> = () => {
  return (
    <div className="flex flex-row py-5 items-center justify-between ">
      <img
        src={ADZMONSTERS2}
        alt="images"
        className="rounded-[50px] object-scale-down h-20 mx-3"
      />
      <div>
        <input
          type="search"
          placeholder="Search for product,Brand,service"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        <SearchIcon />
      </div>

      <div className="flex justify-between items-end">
        <AccountCircleIcon className="dropdown-icon-secondary h-15 " />
        <FavoriteIcon />
        <ShoppingCartIcon />
        <MessageIcon />
      </div>
    </div>
  );
};

export default SearchBox;
