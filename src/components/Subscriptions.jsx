import React from "react";
import img1 from "../assets/Group 25.svg";
import img2 from "../assets/Group 28.svg";

function Subscriptions() {
  return (
    <div className="flex items-center justify-center gap-18 mt-26">
      <div className="relative w-[320px] h-[528px]">
        <img src={img2} alt="Subscription 1" className="w-full h-full z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-21 z-10">
          <div className="flex flex-col items-center justify-center gap-4.75">
            <h1 className="text-primary text-5xl font-bold">Basic</h1>
            <p className="text-primary text-2xl font-medium">3month</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4.5">
            <h1 className="text-primary text-5xl font-bold">$15.140</h1>
            <p className="text-black  font-medium">Cancel anytime</p>
          </div>
        </div>
      </div>
      <div className="relative w-100 h-[908px]">
        <img src={img1} alt="Subscription 2" className="w-full h-full z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-21 z-10">
          <div className="flex flex-col items-center justify-center gap-4.75">
            <h1 className="text-white text-5xl font-bold">Suggested</h1>
            <p className="text-white text-2xl font-medium">6month</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4.5">
            <h1 className="text-white text-5xl font-bold line-through">
              $24.990
            </h1>
            <h1 className="text-white text-5xl font-bold">$22.990</h1>
            <p className="text-black  font-medium">Cancel anytime</p>
          </div>
        </div>
      </div>
      <div className="relative w-[320px] h-[528px]">
        <img src={img2} alt="Subscription 3" className="w-full h-full z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-21 z-10">
          <div className="flex flex-col items-center justify-center gap-4.75">
            <h1 className="text-primary text-5xl font-bold">Premium</h1>
            <p className="text-primary text-2xl font-medium">12month</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4.5">
            <h1 className="text-primary text-5xl font-bold">$35.199</h1>
            <p className="text-black  font-medium">Cancel anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
