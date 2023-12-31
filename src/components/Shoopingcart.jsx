import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../contextapi/Cart";
import { Link } from "react-router-dom";
import { Contextdata } from "../contextapi/Contextapi";

function Shoopingcart() {
  let { cartItems, setCartItems } = useContext(productContext);
  let [subTotal, setSubTotal] = useState(0);
  let [value, setValue] = useState(1);
  let [price, setPrice] = useState();
  let [total, settotal] = useState();
  const { cartShow, setCartShow } = useContext(Contextdata);

  useEffect(() => {
    const total = cartItems.reduce((accoumulator, currentacc) => {
      return accoumulator + currentacc.price;
    }, 0);
    const formatedTotal = total.toFixed(2);
    setSubTotal(formatedTotal);
  }, [setCartItems, cartItems]);

  const increment = (productId) => {
    setCartItems((prev) =>
      prev.map((cur) =>
        cur.id == productId ? { ...cur, quantity: cur.quantity + 1 } : cur
      )
    );
  };

  // const decrement = (productId) => {
  //   setCartItems((prev) => {
  //     return prev
  //       .map((cur) => {
  //         if (cur.id == productId) {
  //           return { ...cur, quantity: cur.quantity - 1 };
  //         }
  //       })
  //       .filter((item) => item.quantity > 0);
  //   });
  // };

  const chacelHandle = (productId) => {
    setCartItems((prev) => prev.filter((cur) => cur.id !== productId));
  };

  const closeCart = () => {
    setCartShow(!cartShow);
  };

  return (
    <div className="w-full max-w-[400px] shadow-md z-20 bg-white h-full fixed right-0 top-[50px] overflow-y-scroll py-[5px] px-[10px]  overflow-x-hidden max-[640px]:top-[41px]">
      <h3 className=" mt-[5px] text-[1.3rem] font-medium mb-[10px] flex justify-between items-center">
        Your Cart
        <i
          className="ri-close-line text-[1.5rem] cursor-pointer  "
          onClick={closeCart}
        ></i>
      </h3>

      <div className="h-[58%] overflow-hidden overflow-y-scroll cart">
        {cartItems.map((cur) => {
          return (
            <div key={cur.id} className="relative">
              <div className="flex gap-[20px] px-[10px] py-[10px] border-y-2">
                <i
                  className="ri-close-line absolute top-[2px] right-[2px] text-[1.2rem] cursor-pointer w-[20px] h-[20px] flex justify-center items-center rounded-full bg-[white] "
                  onClick={() => chacelHandle(cur.id)}
                ></i>
                <Link
                  to={"/product/" + cur.id}
                  className="max-w-[70px] w-full aspect-square h-[70px]  rounded object-contain"
                >
                  <img
                    src={cur.image}
                    alt="cart-image"
                    className="max-w-[70px] w-full aspect-square h-[70px]  rounded object-contain "
                  />
                </Link>
                <div className=" overflow-hidden">
                  <p className="text-ellipsis whitespace-nowrap overflow-hidden px-1 font-semibold ">
                    {cur.title}
                  </p>
                  <p className="text-[grey] font-medium leading-none">
                    $ {cur.price}
                  </p>
                  <div
                    className="flex items-center 
                    gap-[5px] mt-[8px]"
                  >
                    <i
                      className="ri-subtract-fill w-[20px] h-[20px] flex justify-center items-center border-[#0000009b] border-solid border-[1px] cursor-pointer opacity-[0.7]"
                    ></i>
                    <p className="text-[0.9rem]">{cur.quantity}</p>
                    <i
                      className="ri-add-line w-[20px] h-[20px] flex justify-center items-center border-[#00000093] border-solid border-[1px] cursor-pointer opacity-[0.7]"
                      onClick={() => increment(cur.id)}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-[55px] font-semibold text-[1.2rem]">
        <p>Subtotal</p>
        <p>${subTotal}</p>
      </div>
      <button className="w-full py-[7px] bg-[#187490] rounded-full text-white text-[1rem] mt-[18px]">
        Proceed to checkout
      </button>
    </div>
  );
}

export default Shoopingcart;
