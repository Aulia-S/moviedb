import axios from "axios";

export const fetchMovies = async (keyword) => {
  return await axios
    .get(`http://www.omdbapi.com/?apikey=3fa7021f&s=${keyword}`)
    .then((response) => response.data.Search);
};

export const fetchMoviesById = async (id) => {
  return await axios
    .get(`http://www.omdbapi.com/?apikey=3fa7021f&i=${id}&plot=full`)
    .then((response) => response.data);
};
