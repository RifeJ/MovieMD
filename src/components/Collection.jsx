import { useState } from "react";
import { useQueries } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import CollectionSlider from "./CollectionSlider";
import { fetchUniverse } from "../services/tmbd";

const CONFIGS = {
  movie: [
    { id: "marvel", label: "Marvel Universe" },
    { id: "dc", label: "DC World" },
    { id: "musicals", label: "Musicals" },
    { id: "john_wick", label: "John Wick" },
    { id: "godzilla", label: "MonsterVerse" },
    { id: "anime", label: "Anime Movies" },
  ],
  tv: [
    { id: "netflix", label: "Netflix Originals" },
    { id: "hbo", label: "HBO Selection" },
    { id: "sitcoms", label: "Best Sitcoms" },
    { id: "crime", label: "Top Crime Stories" },
    { id: "k-drama", label: "Korean Dramas" },
    { id: "top_rated", label: "Must Watch" },
  ],
};

function Collection() {
  const [currentType, setCurrentType] = useState("tv");

  const currentUniverses = CONFIGS[currentType];

  const results = useQueries({
    queries: currentUniverses.map((u) => ({
      queryKey: ["universe", currentType, u.id], // Добавили currentType в ключ, чтобы кэш не путался!
      queryFn: () => fetchUniverse(u.id, currentType),
      staleTime: 1000 * 60 * 5,
    })),
  });

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-10 px-15">
        <h1 className="text-5xl font-bold">Collection</h1>
        <div className="border border-primary rounded-full flex overflow-hidden">
          <button
            onClick={() => setCurrentType("tv")}
            className={`rounded-full px-5 py-3.5 font-light transition-all ${
              currentType === "tv"
                ? "bg-primary text-white"
                : "hover:bg-primary/10"
            }`}>
            Series
          </button>
          <button
            onClick={() => setCurrentType("movie")}
            className={`rounded-full px-5 py-3.5 font-light transition-all ${
              currentType === "movie"
                ? "bg-primary text-white"
                : "hover:bg-primary/10"
            }`}>
            Movie
          </button>
        </div>
      </div>

      <Swiper
        mousewheel={true}
        modules={[Mousewheel]}
        slidesPerView={4.5}
        spaceBetween={20}
        className="h-full w-full">
        {currentUniverses.map((uni, index) => (
          <SwiperSlide
            key={`${currentType}-${uni.id}`}
            className="flex justify-center">
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl font-semibold pl-11">{uni.label}</h2>
              <CollectionSlider
                data={results[index]?.data}
                isLoading={results[index]?.isLoading}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Collection;
