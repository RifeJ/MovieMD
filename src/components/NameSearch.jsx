import React, { useState, useRef } from "react";
import { fetchPopularByName } from "../services/tmbd";
import { useQuery } from "@tanstack/react-query";
import { useClickOutside } from "../services/useClickOutside";
import { Search } from "lucide-react";

function NameSearch({ onNameSelect, type }) {
  const [filmName, setFilmName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => setShowDropdown(false));

  const { data, isLoading } = useQuery({
    queryKey: ["films", filmName],
    queryFn: () => fetchPopularByName(filmName, type),
  });

  const results = data?.results?.slice(0, 5) || [];

  return (
    <div ref={menuRef} className="flex items-center">
      <div className="w-138.25 bg-transparent py-2.5 px-5 border border-primary rounded-[25px] overflow-hidden">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={filmName}
            onChange={(e) => {
              const val = e.target.value;
              setFilmName(val);
              setShowDropdown(true);
              onNameSelect(null, val);
            }}
            placeholder="Type film name"
            className="outline-none w-full"
          />
          <Search />
        </div>
        {showDropdown && results.length > 0 && (
          <ul
            className="absolute z-100 w-50 mt-2 
                 bg-transparent border border-[#1e293b] 
                 rounded-xl shadow-[0_10_40px_rgba(0,0,0,0.5)] 
                 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {results.map((film) => (
              <li
                key={film.id}
                className="group flex items-center gap-3 p-3 transition-colors
                   hover:bg-[#1e293b]/50 cursor-pointer border-b border-[#1e293b]/30 last:border-0"
                onClick={() => {
                  onNameSelect(film.id, film.title);
                  setFilmName(film.title);
                  setShowDropdown(false);
                }}>
                <div className="relative">
                  <img
                    src={
                      film.poster_path
                        ? `https://image.tmdb.org/3/t/p/w185${film.poster_path}`
                        : "https://via.placeholder.com/185x185?text=?"
                    }
                    className="w-10 h-10 rounded-lg object-cover border border-[#1e293b] 
                       group-hover:border-[#3b82f6] transition-colors"
                    alt={film.title}
                  />
                </div>

                <div className="flex flex-col overflow-hidden">
                  <span className="text-gray-200 font-medium text-sm truncate group-hover:text-[#3b82f6] transition-colors">
                    {film.title}
                  </span>
                </div>

                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6]" />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default NameSearch;
