import React, { useState } from "react";
import NavBar from "./NavBar";
import { fetchPopular } from "../services/tmbd";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router";
import Loading from "./Loading";
import StartsRaiting from "./StartsRaiting";
import "swiper/css";
import "swiper/css/effect-fade";
import IMBd from "../assets/i-removebg-preview.png";
import { Play, ArrowRight } from "lucide-react";

function Header() {
  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchPopular,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-screen h-screen">
      <Swiper
        className="h-screen max-w-screen "
        modules={[Autoplay, EffectFade]}
        allowTouchMove={false}
        effect="fade"
        loop={true}
        speed={2000}
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}>
        {data?.results?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="relative w-full h-full bg-cover bg-center flex flex-col items-start justify-end pb-30 pl-20"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), transparent), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}>
              <div className="flex flex-col gap-2.5 mb-2.5">
                <h1 className="text-5xl font-bold">{movie.title}</h1>
                <p className="max-w-138.75 text-[16px] font-medium leading-6">
                  {movie.overview}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <StartsRaiting rating={movie.vote_average} />
                <img src={IMBd} alt="" className="w-9.25 h-5" />
                <p>{movie.vote_average.toFixed(1)}</p>
                <p className="uppercase ml-1 text-red-600 font-extrabold">
                  {movie.original_language}
                </p>
              </div>
              <div className="flex items-center gap-2.75 mt-2.5">
                <button>
                  <Link className="bg-primary flex items-center gap-1 px-6 py-2 rounded-full font-medium">
                    <Play fill="white" size={15} />
                    Watch Movie
                  </Link>
                </button>
                <button>
                  <Link className="flex items-center gap-1 px-4 py-2 border-2 border-primary rounded-full font-medium">
                    <p className="pb-0.5">More Info</p>
                    <ArrowRight className="pt-0.5" />
                  </Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Header;
