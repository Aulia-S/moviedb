import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { Poster, Title, Year, imdbID } = props.movie;

  return (
    <div>
      <div class="col">
        <div class="card shadow">
          <img src={Poster} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title display-6">
              {Title} ({Year})
            </h5>
            <Link
              to={`/movies/${imdbID}`}
              class="btn btn-dark d-block mt-4 ms-auto stretched-link"
              style={{ width: "fit-content", fontSize: "20px" }}
            >
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
