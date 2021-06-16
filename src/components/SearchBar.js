import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showAlert, hideAlert } from "../redux/alert/alertSlice";
import { getMovies } from "../redux/movies/moviesSlice";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  /* ******************
   *  HOOK
   ********************/
  const dispatch = useDispatch();
  const history = useHistory();

  /* ******************
   *  STATE
   ********************/
  const [form, setForm] = useState("");

  /* ******************
   *  EVENT HANLDER
   ********************/
  const handleInput = (e) => {
    dispatch(hideAlert());
    setForm(e.target.value);
  };

  const handleClickSearch = (e) => {
    e.preventDefault();
    if (!form) {
      // if empty
      dispatch(showAlert());
    } else {
      dispatch(getMovies(form));
      history.push("/movies");
    }
  };

  /* ******************
   *  RENDER
   ********************/
  return (
    <form id="search-bar" className="input-group mt-5 w-100 shadow">
      <input
        type="text"
        className="form-control"
        placeholder="Search film"
        onInput={handleInput}
        value={form}
      />
      <button
        className="btn btn-dark"
        type="submit"
        id="search-button"
        onClick={handleClickSearch}
      >
        Search{" "}
        <i className="fas fa-search" style={{ transform: "rotate(90deg)" }}></i>
      </button>
    </form>
  );
};

export default SearchBar;
