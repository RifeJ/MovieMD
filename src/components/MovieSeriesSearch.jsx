import React, { useState, useEffect } from "react";
import YearSearch from "./YearSearch";
import CountrySearch from "./CountrySearch";
import ActorSearch from "./ActorSearch";
import NameSearch from "./NameSearch";
import DirectorsSearch from "./DirectorsSearch";
import GenreScrollBar from "./GenreScrollBar";
import logoFilter from "../assets/logo searchlogo 1.svg";

import { fetchPlusFilters } from "../services/tmbd";
import { useQuery } from "@tanstack/react-query";

function MovieSeriesSearch({ type }) {
  const [filters, setFilters] = useState({
    year: "",
    countryCode: "",
    actorId: "",
    filmId: "",
    directorId: "",
    filmName: "",
  });

  const { data, isLoading } = useQuery({
    queryKey: ["filters", type],
    queryFn: () => fetchPlusFilters(type),
  });

  useEffect(() => {
    setFilters({
      year: "",
      countryCode: "",
      actorId: "",
      filmId: "",
      directorId: "",
      filmName: "",
    });
  }, [type]);

  const filtersConfirm = (value) => {
    setFilters((prev) => ({ ...prev, ...value }));
    console.log("Applied Filters:", value);
  };

  return (
    <div className="flex flex-col justify-center gap-15 border border-primary rounded-3xl py-10 px-10 mx-auto">
      <div className="flex gap-20">
        <img src={logoFilter} alt="Filter Logo" className="w-70  h-70" />
        <div key={type} className="flex flex-col items-start justify-center ">
          <div className="flex items-center justify-center gap-10 mb-10">
            <YearSearch
              onYearSelect={(year) => setFilters((prev) => ({ ...prev, year }))}
            />
            <CountrySearch
              onCountrySelect={(countryCode) =>
                setFilters((prev) => ({ ...prev, countryCode }))
              }
            />
            <ActorSearch
              onActorSelect={(id, name) =>
                setFilters((prev) => ({
                  ...prev,
                  actorId: id || "",
                  actorName: name,
                }))
              }
            />
          </div>
          <div className="flex items-center justify-center gap-10">
            <NameSearch
              type={type}
              onNameSelect={(id, name) =>
                setFilters((prev) => ({
                  ...prev,
                  filmId: id || "",
                  filmName: name,
                }))
              }
            />
            <DirectorsSearch
              onDirectorSelect={(id, name) =>
                setFilters((prev) => ({
                  ...prev,
                  directorId: id || "",
                  directorName: name,
                }))
              }
              s
            />
          </div>
          <div className="w-210 mt-10">
            <GenreScrollBar type={type} />
            <button
              onClick={() => filtersConfirm(filters)}
              className="cursor-pointer bg-primary p-3 rounded-[10px] font-bold w-33">
              {isLoading ? "Filtering..." : "Apply Filters"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSeriesSearch;
