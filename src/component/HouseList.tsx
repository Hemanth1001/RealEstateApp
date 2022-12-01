import React, { useContext } from "react";

// import context
import { HouseContext } from "./HouseContextProvider";
// import components
//import { House } from "./House";
// import link
import { Link } from "react-router-dom";
// import icons
//import { ImSpinner2 } from "react-icons/im";

import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import CropLandscapeOutlinedIcon from "@mui/icons-material/CropLandscapeOutlined";

export const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <AutorenewOutlinedIcon className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house: any, index: any) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
                  <img className="mb-8" src={house.image} alt="" />
                  <div className="mb-4 flex gap-x-2 text-sm">
                    <div className="bg-green-500 rounded-full text-white px-3 inline-block">
                      {house.type}
                    </div>
                    <div className="bg-violet-500 rounded-full text-white px-3 inline-block">
                      {house.country}
                    </div>
                  </div>
                  <div className="text-lg font-semibold max-w-[260px]">
                    {house.address}
                  </div>
                  <div className="flex gap-x-4 my-4">
                    <div className="flex items-center text-gray-600 gap-1">
                      <div className="text-[20px] rounded-full">
                        <BedOutlinedIcon />
                      </div>
                      <div className="text-base">{house.bedrooms}</div>
                    </div>
                    <div className="flex items-center text-gray-600 gap-1">
                      <div className="text-[20px] rounded-full">
                        <BathtubOutlinedIcon />
                      </div>
                      <div className="text-base">{house.bathrooms}</div>
                    </div>
                    <div className="flex items-center text-gray-600 gap-1">
                      <div className="text-[20px] rounded-full">
                        <CropLandscapeOutlinedIcon />
                      </div>
                      <div className="text-base">{house.surface}</div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-violet-600 mb-4">
                    $ {house.price}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
