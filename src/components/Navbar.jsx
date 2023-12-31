import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Shoopingcart from "./Shoopingcart";
import { productContext } from "../contextapi/Cart";
import { useLocation } from "react-router-dom";
import { Contextdata } from "../contextapi/Contextapi";

function Navbar() {
  let [productCount, setProductCount] = useState(0);
  const { pathname } = useLocation();
  const { serachProduct, setSearchProduct, cartShow, setCartShow } =
    useContext(Contextdata);
  const [searchValue, setSearchValue] = useState("");

  let { cartItems, setCartItems } = useContext(productContext);
  let [trackSearchField, setTrackSearchField] = useState(false);

  const showcart = () => {
    setCartShow(!cartShow);
  };

  useEffect(() => {
    if (pathname == "/Shop") {
      setTrackSearchField(true);
    } else {
      setTrackSearchField(false);
    }
  }, [pathname]);

  useEffect(() => {
    setProductCount(cartItems.length);
  }, [setCartItems, cartItems]);

  const searchHandle = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    setSearchProduct(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="flex justify-between items-center py-[10px] px-[20px] shadow-lg w-full bg-white max-[640px]:flex-col z-[999]">
        <div className="flex gap-[20px] items-center">
          <Link to="/">
            <h3 className="font-[500] cursor-pointer text-[1.3rem]">
              IcodeMas
            </h3>
          </Link>
          {trackSearchField ? (
            <div className="relative max-w-full ">
              <label
                htmlFor="inp"
                className="absolute top-[2px] left-[7px] cursor-pointer"
              >
                <i className="ri-search-line text-[0.9rem]"></i>
              </label>
              <input
                className="bg-[#EEEEEE] max-w-[250px] w-full py-[3px] rounded-full outline-[#217293] px-[10px] ps-[30px] cursor-pointer text-[1rem]"
                type="search"
                placeholder="Search"
                id="inp"
                value={searchValue}
                onChange={searchHandle}
              />
            </div>
          ) : null}
        </div>
        <div>
          <ul className="flex gap-[30px] items-center">
            <NavLink to="/Featured">
              <li className="cursor-pointer">Featured</li>
            </NavLink>
            <NavLink to="/Shop">
              <li className="cursor-pointer">Shop</li>
            </NavLink>
            <NavLink to="Faq">
              <li className="cursor-pointer">FAQ</li>
            </NavLink>
            <li className="cursor-pointer relative" onClick={showcart}>
              <div className="absolute w-[15px] h-[15px] rounded-full bg-red-500 flex justify-center items-center -top-0 -right-0 text-white text-[10px]">
                {productCount}
              </div>
              <i className="ri-shopping-cart-line text-[1.3rem]"></i>
            </li>
          </ul>
        </div>
      </div>
      {cartShow ? <Shoopingcart /> : null}
    </>
  );
}

export default Navbar;
