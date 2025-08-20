import React, { createContext, useContext, useEffect, useState } from "react";

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState(() => {
    const storeMovie = localStorage.getItem("wishList");
    return storeMovie ? JSON.parse(storeMovie) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  const addWishList = (movie) => {
    setWishList((prev) =>
      prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const removeWishList = (id) => {
    setWishList((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <WishListContext.Provider value={{ wishList, addWishList, removeWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export { WishListProvider, WishListContext };
