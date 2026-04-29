import React, { useState } from "react";
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
  });

  const { data, isLoading } = useQuery({
    queryKey: ["filters", type],
    queryFn: () => fetchPlusFilters(type),
  });

  const filtersConfirm = (value) => {
    setFilters((prev) => ({ ...prev, ...value }));
    console.log("Applied Filters:", value);
  };

  return (
    <div className="flex flex-col justify-center gap-15 border border-primary rounded-3xl py-10 px-10">
      <div className="flex gap-18.75">
        <img src={logoFilter} alt="Filter Logo" />
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-18">
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
          <div className="flex items-center justify-center gap-18">
            <NameSearch
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
            />
          </div>
        </div>
      </div>
      <div>
        <GenreScrollBar type={type} />
      </div>
      <button
        onClick={() => filtersConfirm(filters)}
        className="cursor-pointer bg-primary p-3 rounded-[10px] font-bold w-33">
        Apply Filters
      </button>
    </div>
  );
}

export default MovieSeriesSearch;
