import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Loading from "./Loading";

function CollectionSlider({ data }) {
  if (!data) return <Loading />;

  return (
    <Swiper
      direction="vertical"
      effect={"coverflow"}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
      }}
      modules={[EffectCoverflow]}
      className="w-[236px] h-[324px]">
      {data.map((movie) => (
        <SwiperSlide key={movie.id} className="w-[236px] h-[324px]">
          <img
            src={`https://image.tmdb.org/3/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-2xl shadow-2xl object-cover h-[296px] w-[208px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CollectionSlider;
