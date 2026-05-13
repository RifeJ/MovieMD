import React from "react";
import { fetchGenres } from "../services/tmbd";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function GenreScrollBar({ setSelectedGenre, selectedGenre, type = "movie" }) {
  const { data, isLoading } = useQuery({
    queryKey: ["genres", type],
    queryFn: () => fetchGenres(type),
  });
  return (
    <div className="w-full">
      <Swiper
        loop={false}
        slidesPerView={"auto"}
        spaceBetween={22}
        grabCursor={true}
        className="pb-13.25!">
        {(data?.genres || data)?.map((genre) => (
          <SwiperSlide key={genre.id} style={{ width: "auto" }}>
            <button
              className={`px-7 py-3  border-[0.5px] border-primary rounded-full ${selectedGenre === genre.id ? "bg-primary" : "bg-transparent"}`}
              onClick={() => setSelectedGenre(genre.id)}>
              {genre.name}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GenreScrollBar;
