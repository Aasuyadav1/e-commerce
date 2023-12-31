import React from "react";

function Footer() {
  return (
    <div className="flex gap-[10px] bg-[url(https://cobweb.com/wp-content/uploads/2022/07/Teal-Lined-Circle-Background.png)] mt-[100px] bg-center bg-no-repeat bg-cover min-h-[300px] items-center px-[100px] py-[50px] text-white max-[600px]:px-[10px]">
      <div className="flex justify-between w-full flex-wrap gap-[20px]">
        <div className="max-w-[500px] w-full ">
          <h3 className=" text-[1.1rem] font-bold">iCodeMas</h3>
          <p className="text-[0.8rem] mt-[20px] opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            consequuntur quia accusamus repudiandae laudantium commodi! A, qui.
            Sapiente, rem saepe!
          </p>
          <p className="text-[0.8rem] mt-[60px] opacity-90">
            @2023 iCodeThis All Rights Reserved
          </p>
        </div>
        <div>
          <h4 className="text-[1.1rem] font-bold max-[780px]:mt-[50px]">
            Products
          </h4>
          <ul className="mt-[10px] opacity-90 text-[0.95rem]">
            <li>Cookies</li>
            <li>Candels</li>
            <li>Oranaments</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[1.1rem] font-bold max-[780px]:mt-[50px]">
            Client
          </h4>
          <ul className="mt-[10px] opacity-90 text-[0.95rem]">
            <li>Find a newsletter</li>
            <li>Find a store</li>
            <li>Cookies policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[1.1rem] font-bold max-[780px]:mt-[50px]">
            About
          </h4>
          <ul className="mt-[10px] opacity-90 text-[0.95rem]">
            <li>Find a store</li>
            <li>Return policy</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
