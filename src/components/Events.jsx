import React from "react";
import { Link } from "react-router-dom";

function Events() {
  return (
    <div className="w-full flex gap-[50px] justify-center items-center mt-[50px] flex-wrap">
      <Link to={"/featured"} className="max-w-[550px] w-[100%] h-[350px]">
        <div className="max-w-[550px] w-[100%] h-[350px] relative overflow-hidden cursor-pointer">
          <img
            src="https://voiceandvisioninc.org/wp-content/themes/yootheme/cache/6b/cris-dinoto-460411-6ba2259d.jpeg"
            alt="eventsOne"
            className="w-full h-full object-cover hover:scale-[1.1] transition-all duration-[0.3s]  ease-in-out"
          />
          <div className="w-full absolute bottom-0 flex justify-between items-center py-[5px] px-[5px] bg-gredia footer-ev shadow-2xl">
            <p className=" font-bold text-white text-[0.9rem] opacity-90 uppercase">
              Shop christmas collections now
            </p>
            <i className="ri-arrow-down-line w-[30px] h-[30px] rounded-full flex justify-center items-center bg-slate-50 text-[#E9A260] shadow-md"></i>
          </div>
        </div>
      </Link>
      <Link to={"/shop"} className="max-w-[550px] w-[100%] h-[350px]">
        <div className="max-w-[550px] w-[100%] h-[350px] relative overflow-hidden cursor-pointer">
          <img
            src="https://cdn1.vectorstock.com/i/1000x1000/07/25/happy-new-year-sale-vector-23080725.jpg"
            alt="eventstwo"
            className="w-full h-full object-cover hover:scale-[1.1] transition-all duration-[0.3s] ease-in-out"
          />
          <div className="w-full absolute bottom-0 flex justify-between items-center py-[5px] px-[5px] bg-gredia footer-eve shadow-2xl">
            <p className=" font-bold text-white text-[0.9rem] opacity-90 uppercase">
              Shop new year collections now
            </p>
            <i className="ri-arrow-down-line w-[30px] h-[30px] rounded-full flex justify-center items-center bg-slate-50 text-[#D4B151] shadow-md"></i>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Events;
