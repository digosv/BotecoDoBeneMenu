import React from "react";
import logo from "../assets/icon4.png";

function Header() {
  return (
    <div className="bg-red-500 text-white  h-28 w-full text-3xl flex items-center justify-center">
      <a href="/" className="cursor-pointer">
        <img className="rounded-full w-16 mr-5 " src={logo} alt="logo" />
      </a>
      <div className="mr-16">
        <h1 className="font-thin">Boteco Do Bene</h1>
        <h2 className="text-2xl">Cardápio</h2>
      </div>
    </div>
  );
}

export default Header;
