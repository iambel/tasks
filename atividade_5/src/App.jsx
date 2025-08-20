// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Search from "./pages/Search";
import WishList from "./pages/WishList";
import { WishListProvider } from "./contexts/WishListContext";

function App() {
  return (
    <>
      <WishListProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </WishListProvider>
    </>
  );
}

export default App;
