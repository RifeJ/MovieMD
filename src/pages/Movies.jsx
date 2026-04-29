import React from "react";
import MovieSeriesSearch from "../components/MovieSeriesSearch";

function Movies() {
  return (
    <div className="px-12">
      <h1 className="pt-35 pb-15 text-5xl font-bold">Movies</h1>
      <MovieSeriesSearch type="movie" />
    </div>
  );
}

export default Movies;
