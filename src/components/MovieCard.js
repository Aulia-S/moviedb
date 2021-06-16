import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { Poster, Title, Year, imdbID } = props.movie;

  return (
    <div>
      <div className="col">
        <div className="card shadow">
          <img src={Poster} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title display-6">
              {Title} ({Year})
            </h5>
            <Link
              to={`/movies/${imdbID}`}
              className="btn btn-dark d-block mt-4 ms-auto stretched-link"
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
