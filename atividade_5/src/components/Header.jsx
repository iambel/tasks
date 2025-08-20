import React from "react";
import Title from "./Title";
import { useNavigate } from "react-router";
const Header = () => {
  let navigate = useNavigate();
  return (
    <header className="flex flex-row justify-between items-center p-4 lg:px-8">
      <Title
        className="cursor-pointer lg:text-3xl"
        onClick={() => navigate("/")}
      >
        Watchit
      </Title>

      <button
        className="cursor-pointer p-2 lg:text-xl"
        onClick={() => navigate("/wishlist")}
      >
        <span className="text-3xl font-bold"> &#9825; </span>
        WishList
      </button>
    </header>
  );
};

export default Header;
