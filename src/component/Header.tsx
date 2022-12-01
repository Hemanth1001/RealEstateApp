import React from "react";

export const Header: React.FC<{}> = () => {
  return (
    <div className="max-w-[1440px] bg-violet-700 flex flex-row justify-between p-4">
      <div className="flex flex-row item-center">
        <h1 className="text-white text-2xl">
          Sell or buy any product from ADZ Monster
        </h1>
        <a
          rel="google"
          href="https://www.google.com/"
          target="_self"
          className="px-6 text-2xl underline decoration-solid  text-gray-600"
        >
          Login or Register now
        </a>
      </div>
      <div className="flex flex-row items-center">
        <div>
          <button className="text-2xl text-white">Login</button>
        </div>
        <h2 className="px-1 text-2xl text-white">|</h2>
        <div>
          <button className="text-2xl text-white px-2">My Account</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
