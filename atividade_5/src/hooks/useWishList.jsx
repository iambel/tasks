import React, { useContext } from "react";
import { WishListContext } from "../contexts/WishListContext";

const useWishList = () => {
  const context = useContext(WishListContext);

  if (!context) {
    throw new Error("useWishList deve ser usado dentro de um WishListProvider");
  }

  return context;
};

export { useWishList };
