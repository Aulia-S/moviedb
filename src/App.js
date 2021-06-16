import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/movies/:imdbID">
          <Movie />
        </Route>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
