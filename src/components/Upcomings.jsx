import React from "react";

function Upcomings() {
  let data = [
    {
      id: 1,
      image:
        "https://img.freepik.com/premium-photo/isolated-iphone-15-mobile-front-back-showcasing-sleek-desig-white-background-clean_655090-799590.jpg",
      title:
        "Isolated of Iphone 15 Mobile Front and Back Showcasing the Sleek Desig on White Background Clean",
      price: 15.6,
    },
    {
      id: 2,
      image:
        "https://reebelo.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0604%2F9153%2F0423%2Ffiles%2FSIL-image-0_ef4d4332-8588-4861-83e2-90fb4a35ea2b.jpg%3Fv%3D1690540866&w=3840&q=75",
      title:
        "Apple Silicon Macs, iPhone 12 Pro Max camera, and more on the AppleInsider podcast",
      price: 155.6,
    },
    {
      id: 3,
      image:
        "https://d2rxt25e475whq.cloudfront.net/wp-content/uploads/2023/07/25230421/Product-Card-GE-Top-Fridge-1024x1024.png.webp",
      title: "Garage Refrigerator",
      price: 10.0,
    },
    {
      id: 4,
      image:
        "https://previews.123rf.com/images/mrgarry/mrgarry1308/mrgarry130800250/21773110-modern-home-theater-on-a-white-background.jpg",
      title: "modern home theater",
      price: 99,
    },
  ];
  return (
    <div className="mt-[50px] bg-white">
      <h1 className="mt-[5px] text-[1.8rem] font-bold text-center">
        Upcomings lists
      </h1>
      <div className="mt-[1px] flex justify-center items-center gap-[15px] flex-wrap">
        {data.map((product) => (
          <div
            key={product.id}
            className="w-[300px]  aspect-square h-[300px] px-[10px] py-[10px] overflow-hidden flex flex-col justify-center shadow-xl rounded cursor-pointer"
          >
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upcomings;
