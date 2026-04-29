import React, { useRef, useState } from "react";
import { fetchCountries } from "../services/tmbd";
import { useQuery } from "@tanstack/react-query";
import { useClickOutside } from "../services/useClickOutside";

function CountrySearch({ onCountrySelect }) {
  const [selectedName, setSelectedName] = useState("Any");
  const [showDropdown, setShowDropdown] = useState(false);
  const menuRef = useRef(null);

  const { data, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  const handleSelection = (isoCode, countryName) => {
    setSelectedName(countryName);
    onCountrySelect(isoCode);
    setShowDropdown(false);
  };

  useClickOutside(menuRef, () => setShowDropdown(false));

  return (
    <div ref={menuRef} className="flex items-center">
      <label className="font-medium mr-5 text-gray-200">Country</label>

      <div className="relative w-48">
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-[#050a1e] py-2.5 px-5 border border-primary rounded-[25px] text-gray-300 flex justify-between items-center cursor-pointer hover:border-blue-400 transition-all">
          <span className="truncate">{selectedName}</span>
          <span
            className={`text-[10px] ml-2 transition-transform ${showDropdown ? "rotate-180" : ""}`}>
            ▼
          </span>
        </div>

        {showDropdown && (
          <div className="absolute z-50 top-full mt-2 w-full left-0 bg-[#050a1e] border border-primary rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-150">
            <div className="max-h-60 overflow-y-auto p-1 custom-scrollbar bg-[#050a1e]">
              <div
                className="px-4 py-2 text-sm text-gray-400 hover:bg-primary/20 hover:text-white rounded-xl cursor-pointer"
                onClick={() => handleSelection("", "Any")}>
                Any Country
              </div>

              {data?.map((country) => (
                <div
                  key={country.iso_3166_1}
                  className="px-4 py-2 text-sm text-gray-300 hover:bg-primary/20 hover:text-white rounded-xl cursor-pointer transition-colors"
                  onClick={() =>
                    handleSelection(country.iso_3166_1, country.english_name)
                  }>
                  {country.english_name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountrySearch;
