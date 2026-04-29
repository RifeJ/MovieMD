import React from "react";
import { fetchTrending } from "../services/tmbd";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Loading from "./Loading";
import { Link } from "react-router";
import { ArrowRight, Plus } from "lucide-react";

function Trends() {
  const { data, isLoading } = useQuery({
    queryKey: ["trends"],
    queryFn: fetchTrending,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="mt-12 ml-6">
      <div className="flex justify-between items-center mb-6 mr-12">
        <h1 className="text-3xl font-bold">Trends</h1>
        <Link className="flex items-center gap-2">
          <p className="text-xl font-bold text-blue-500 mb-1.5">See More</p>
          <ArrowRight className="text-blue-500" size={22} />
        </Link>
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={6.7}
        spaceBetween={35}
        className="">
        {data?.results?.map((trends) => (
          <SwiperSlide
            key={trends.id}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${trends.poster_path})`,
            }}
            className="w-52 h-74! bg-cover bg-center rounded-xl">
            <button className="absolute top-0 left-0 z-10 flex items-center justify-center w-11 h-11 bg-white/20 backdrop-blur-md rounded-xl ">
              <Plus className="text-white w-7 h-7" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Trends;
