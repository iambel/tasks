import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import axios from "axios";
import { useWishList } from "../hooks/useWishList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 34,
  p: 4,
};

export default function BasicModal({ movie }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const api_key = import.meta.env.VITE_API_KEY;
  const [movieDetails, setMovieDetails] = useState({});
  console.log(movie);
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState([]);
  const { wishList, addWishList, removeWishList } = useWishList();

  const handleOpen = async () => {
    // puxa os detalhes do filme quando o modal é aberto
    setOpen(true);
    setLoading(true);
    setError("");
    try {
      const detailsResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}`,
        {
          params: {
            api_key,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMovieDetails(detailsResponse.data);

      const creditsResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/credits`,
        {
          params: { api_key },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const director = creditsResponse.data.crew.find(
        (member) => member.job === "Director"
      );
      setDirector(director ? director.name : "Not found");

      setCast(creditsResponse.data.cast || []);
    } catch (error) {
      setError("ERROR: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <Button
        className="!font-bold 
        !text-white 
        !border-2 
        !border-slate-500 
        !rounded-xl 
        !px-4"
        onClick={handleOpen}
      >
        Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="transition ease-in duration-300 transform"
      >
        <Box
          sx={style}
          className="rounded-xl 
          border-2 
          border-slate-500 
          bg-slate-800/5
          text-slate-200 "
        >
          <Typography
            id="modal-modal-title"
            component="h2"
            className="!font-bold !text-2xl"
          >
            {movie.original_title} ({movie.release_date.split("-")[0]})
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className="font-semibold text-lg">Overview: </span>
            {movie.overview || "No overview available."}
            <br />
            <span className="font-semibold text-lg">Rating: </span>
            {Math.round(movie.vote_average * 100) / 100} / 10
            <br />
            <span className="font-semibold text-lg">Genres: </span> <br />
            <div className="flex flex-wrap gap-2">
              {movieDetails.genres && movieDetails.genres.length > 0
                ? movieDetails.genres.map((genre) => (
                    <span className="text-slate-100 border-2 border-slate-500 rounded-md p-1 cursor-default">
                      {genre.name}
                    </span>
                  ))
                : "No genres available."}
            </div>
            <span className="font-semibold text-lg">Companies: </span>
            <div>
              {movieDetails.production_companies &&
              movieDetails.production_companies.length > 0
                ? movieDetails.production_companies
                    .map((production_companies) => production_companies.name)
                    .join(", ")
                : "No companies available."}
            </div>
            <span className="font-semibold text-lg">Director: </span>
            {director || "Not found"}
            <br />
            <span className="font-semibold text-lg">Cast: </span>
            <div className="pb-2">
              {cast.filter((member) => member.order < 5).length > 0
                ? cast
                    .filter((member) => member.order < 5)
                    .map((member) => member.name)
                    .join(", ")
                : "Not found"}
            </div>
            <div className="flex justify-center  bg-slate-700 text-slate-100 font-semibold p-2 rounded-md border-2 border-slate-500">
              <button
                className="cursor-pointer"
                onClick={() => {
                  addWishList(movie);
                  alert("Movie added to your wishlist!");
                  handleClose();
                }}
              >
                Add to Watchlist &#10084;
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
