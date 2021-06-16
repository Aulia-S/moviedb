import React from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.data);

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center min-vh-100">
      <SearchBar />

      <div class="row row-cols-1 row-cols-md-2 g-5 my-3">
        {movies && movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
