import React from "react";
import SearchBar from "../components/SearchBar";
import Alert from "../components/Alert";
import { useSelector } from "react-redux";

const Home = () => {
  const isFormEmpty = useSelector((state) => state.alert.value);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      {isFormEmpty && <Alert />}
      <SearchBar />
    </div>
  );
};

export default Home;
