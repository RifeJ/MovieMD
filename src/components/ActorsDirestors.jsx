import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "./Loading";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchActors } from "../services/tmbd";

function ActorsDirestors() {
  const { data, isLoading } = useQuery({
    queryKey: ["actors"],
    queryFn: () => fetchActors(),
  });

  if (isLoading) return <Loading />;
  return (
    <div className="mt-26.5">
      <div className="flex justify-between items-center mb-10 px-15">
        <h1 className="text-5xl font-bold">Charactors</h1>
        <div className="border border-primary rounded-full ">
          <button className="rounded-full px-5 py-3.5 font-light">
            Directors
          </button>
          <button className="bg-primary rounded-full px-5 py-3.5 font-light ">
            Actors
          </button>
        </div>
      </div>
      <Swiper slidesPerView={6}>
        {data?.results.map((actor) => (
          <SwiperSlide key={actor.id}>
            <div className="flex flex-col items-center">
              <img
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={actor.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <h3 className=" font-semibold mt-2">{actor.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ActorsDirestors;
