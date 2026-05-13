import React from "react";
import MovieSeriesSearch from "../components/MovieSeriesSearch";

function Movies({ type }) {
  return (
    <div className="px-12 max-w-360 mx-auto">
      <div className="pt-50">
        <div className="relative">
          <h1 className="bg-linear-to-r from-primary to-info absolute left-17 -top-10 text-[13px] tracking-[3px] font-bold py-3 px-10 rounded-t-2xl uppercase">
            ADVANCED SEARCH (
            <span className="tracking-normal px-0.5">
              {type === "movie" ? "Movies" : "TV Shows"}
            </span>
            )
          </h1>
          <MovieSeriesSearch type={type} />
          <div className="mt-23.75">
            <hr className="bg-transparent border-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
