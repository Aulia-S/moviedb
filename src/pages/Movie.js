import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesById } from "../api/movies";

const Movie = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    fetchMoviesById(imdbID).then((res) => setMovie(res));
  }, [imdbID]);

  const {
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Country,
    Poster,
    imdbRating,
  } = movie;

  const posterURL = `url(${Poster})`;

  return (
    <div className="container">
      <h1 className="display-3 my-4">
        {Title} ({Year})
      </h1>
      <div
        style={{
          height: "500px",
          backgroundImage: posterURL,
          backgroundSize: "250px",
        }}
        className="overflow-hidden"
      >
        {/* <img src="../banner.jpg" alt="..." className="w-100" /> */}
      </div>
      <table id="table-detail" class="table my-4">
        <tbody>
          <tr>
            <th scope="row">Released</th>
            <td className="text-secondary">{Released}</td>
          </tr>
          <tr>
            <th scope="row">Runtime</th>
            <td className="text-secondary">{Runtime}</td>
          </tr>
          <tr>
            <th scope="row">Genre</th>
            <td className="text-secondary">{Genre}</td>
          </tr>
          <tr>
            <th scope="row">Director</th>
            <td className="text-secondary">{Director}</td>
          </tr>
          <tr>
            <th scope="row">Writer</th>
            <td className="text-secondary">{Writer}</td>
          </tr>
          <tr>
            <th scope="row">Actors</th>
            <td className="text-secondary">{Actors}</td>
          </tr>
          <tr>
            <th scope="row">Country</th>
            <td className="text-secondary">{Country}</td>
          </tr>
          <tr>
            <th scope="row">Imdb Rating</th>
            <td className="text-secondary">{imdbRating}</td>
          </tr>
          <tr>
            <th scope="row">Plot</th>
            <td className="text-secondary">{Plot}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Movie;
