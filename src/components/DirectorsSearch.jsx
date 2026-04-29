import React, { useState, useRef } from "react";
import { fetchDirectors } from "../services/tmbd";
import { useQuery } from "@tanstack/react-query";
import { useClickOutside } from "../services/useClickOutside";

function DirectorsSearch({ onDirectorSelect }) {
  const [directorName, setDirectorName] = useState("");
  const menuRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["directors", directorName],
    queryFn: () => fetchDirectors(directorName),
    enabled: directorName.length >= 3,
  });

  useClickOutside(menuRef, () => setShowDropdown(false));

  const results = data?.results?.slice(0, 5) || [];

  return (
    <div ref={menuRef} className="flex items-center">
      <label htmlFor="directorName" className="font-medium mr-5">
        Director
      </label>
      <div className="w-38 bg-transparent py-2.5 px-5 border border-primary rounded-[25px] overflow-hidden">
        <input
          type="text"
          id="directorName"
          value={directorName}
          onChange={(e) => {
            const val = e.target.value;
            setDirectorName(val);
            onDirectorSelect(null, val);
            setShowDropdown(true);
          }}
          placeholder="Type director name"
          className="outline-none"
        />
        {showDropdown && results.length > 0 && (
          <ul
            className="absolute z-100 w-50 mt-2 
                 bg-[#050a1e] border border-[#1e293b] 
                 rounded-xl shadow-[0_10_40px_rgba(0,0,0,0.5)] 
                 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {results.map((person) => (
              <li
                key={person.id}
                className="group flex items-center gap-3 p-3 transition-colors
                   hover:bg-[#1e293b]/50 cursor-pointer border-b border-[#1e293b]/30 last:border-0"
                onClick={() => {
                  onDirectorSelect(person.id, person.name);
                  setDirectorName(person.name);
                  setShowDropdown(false);
                }}>
                <div className="relative">
                  <img
                    src={
                      person.profile_path
                        ? `https://image.tmdb.org/3/t/p/w185${person.profile_path}`
                        : "https://via.placeholder.com/185x185?text=?"
                    }
                    className="w-10 h-10 rounded-lg object-cover border border-[#1e293b] 
                       group-hover:border-[#3b82f6] transition-colors"
                    alt={person.name}
                  />
                </div>

                <div className="flex flex-col overflow-hidden">
                  <span className="text-gray-200 font-medium text-sm truncate group-hover:text-[#3b82f6] transition-colors">
                    {person.name}
                  </span>
                  <span className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">
                    {person.known_for_department || "Actor"}
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

export default DirectorsSearch;
