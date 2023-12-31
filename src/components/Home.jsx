import React, { useContext, useEffect, useState } from "react";
import Shipinginfo from "./Shipinginfo";
import Events from "./Events";
import Slider from "./Slider";
import { Contextdata } from "../contextapi/Contextapi";
import { Link } from "react-router-dom";
import Upcomings from "./Upcomings";

function Home() {
  let { productData } = useContext(Contextdata);
  let [data, setData] = useState([]);
  useEffect(() => {
    if (productData) {
      let slicedData = productData.slice(10, 14);
      setData(slicedData);
      console.log("data", data);
    } else {
      console.log("error from home");
    }
  }, [productData]);
  return (
    <>
      <Slider />

      <Shipinginfo />
      <div className="mt-[20px] bg-white">
        <h1 className="mt-[5px] text-[1.8rem] font-bold text-center">
          Top Electronics
        </h1>
        <div className="mt-[5px] flex justify-center items-center gap-[15px] flex-wrap">
          {data.map((product) => (
            <div
              key={product.id}
              className="w-[300px]  aspect-square h-[300px] px-[10px] py-[10px] overflow-hidden flex flex-col justify-center shadow-xl rounded cursor-pointer"
            >
              <Link to={"/product/" + product.id}>
                <div className="w-full flex justify-center items-center">
                  <img
                    src={product.image}
                    alt=""
                    className="max-w-[180px] w-full aspect-square object-contain"
                  />
                </div>
                <p className="mt-[15px] text-ellipsis whitespace-nowrap overflow-hidden text-[0.9rem]">
                  {product.title}
                </p>
                <p className="mt-[0px] leading-none text-[1.1rem] font-bold">
                  $ {product.price}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Events />
      <Upcomings />
    </>
  );
}

export default Home;
