import React from "react";
import Carousel from "../components/Carousel";
import FeatureCard from "../components/FeatureCard";
import AccordionComponent from "../components/AccordionComponent";
import Title from "../components/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useState } from "react";
// import { useNavigate } from "react-router";
import axios, { isCancel, AxiosError } from "axios";
import Modal from "../components/Modal";
// import { createcontext, useContext } from "react";

const Search = () => {
  const api_key = import.meta.env.VITE_API_KEY;

  // let navigate = useNavigate();
  const [movieName, setMovieName] = React.useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // const [movieDetails, setMovieDetails] = useState("");

  const getMovie = async () => {
    // busca o filme
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            query: movieName,
            api_key: api_key,
            language: "en-US",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      setMovies(response.data.results);
    } catch (error) {
      setError(error.message);
      setMovies([]);
    }
  };

  useEffect(() => {
    // chama a função getMovie quando o componente é montado
    getMovie();
  }, [movieName]);

  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 mx-6">
        <div className="w-full p-4 flex flex-col gap-2 items-center">
          <Title>Search for a movie</Title>
          <input
            className="
            bg-slate-700 
            border-2 
            border-slate-600 
            rounded-md 
            p-2 
            w-full
            lg:w-1/2
            text-white"
            type="text"
            name="movieName"
            placeholder="Superman"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>

        <div className="bg-slate-800 ">
          <div className="flex items-center justify-center ">
            {loading && (
              <p>
                Loading...
                <img
                  src="https://media.tenor.com/-sL5lSwzQSkAAAAi/rolling-cute.gif"
                  width={40}
                  height={40}
                />
              </p>
            )}
            {error && <p>Error: {error}</p>}
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:justify-items-center">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div
                  className="flex flex-col items-center justify-center  bg-slate-700 py-4 px-4 gap-2 m-4 rounded-xl border-2 border-slate-600 text-slate-300 transition transform duration-300 ease-in-out hover:scale-105 hover:bg-slate-600 hover:text-white cursor-pointer lg:w-2/3"
                  key={movie.id}
                >
                  <Title>
                    {movie.original_title} ({movie.release_date.split("-")[0]})
                  </Title>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}.jpg`}
                    alt={`${movie.original_title} poster`}
                  />
                  <p className="font-semibold text-lg">
                    {Math.round(movie.vote_average * 100) / 100} / 10 &#9734;
                  </p>
                  <div>
                    <Modal movie={movie} />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center flex flex-col items-center">
                No movies found
                <img
                  src="https://media.tenor.com/4ywShcwbCw0AAAAi/duck-cute.gif"
                  width={30}
                  height={30}
                />
              </p>
            )}
          </div>
        </div>
      </div>

      <section className="text-white mt-6">
        <Footer />
      </section>
    </div>
  );
};

export default Search;
