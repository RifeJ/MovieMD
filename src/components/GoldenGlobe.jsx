import React from "react";
import img1 from "../assets/image 200.svg";
import img2 from "../assets/image 201.svg";

function GoldenGlobe() {
  return (
    <div className="relative mt-26.5 flex items-center justify-center bg-[#DAA521] h-144 ">
      <img src={img1} alt="Golden Globe 1" />
      <img src={img2} alt="Golden Globe 2" />
      <button className="absolute bottom-15.25 bg-linear-to-r from-black/40 to-black/80 backdrop-blur-sm border border-white rounded-[50px] px-21.5 py-7.75 text-5xl font-bold">
        Watching Golden Globe 2026 Movies
      </button>
    </div>
  );
}

export default GoldenGlobe;
