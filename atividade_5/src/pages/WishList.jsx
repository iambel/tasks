import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card";
import { useWishList } from "../hooks/useWishList";

const WishList = () => {
  const { wishList, removeWishList } = useWishList();

  return (
    <div className="h-screen bg-gray-800 text-white">
      <Header />
      <section className="flex flex-col items-center justify-center p-4">
        <Title>WishList</Title>
        <p className="text-lg text-center">
          Here you can manage your wishlist of movies.
        </p>
      </section>
      <section className="flex flex-col justify-center p-4 gap-4 min-h-screen lg:grid lg:grid-cols-4 lg:justify-items-center bg-gray-800 ">
        {wishList.length === 0 ? (
          <p className="text-center">No movies in your wishlist.</p>
        ) : (
          wishList.map((movie) => (
            <Card key={movie.id}>
              <h2 className="text-xl font-bold pb-2">
                {movie.original_title} ({movie.release_date.split("-")[0]})
              </h2>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}.jpg`}
                alt={`${movie.original_title} poster`}
              />

              <span className="text-sm font-semibold pt-1">Overview:</span>
              <p>{movie.overview}</p>
              <button
                type="button"
                onClick={() => removeWishList(movie.id)}
                className="bg-slate-700 border-2 border-slate-600 font-semibold rounded-md p-3 mt-4 cursor-pointer hover:bg-slate-600 transition duration-300"
              >
                Remove from WishList
              </button>
            </Card>
          ))
        )}
      </section>
      <Footer />
    </div>
  );
};

export default WishList;
