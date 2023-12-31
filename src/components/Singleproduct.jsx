import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productContext } from "../contextapi/Cart";
import { Contextdata } from "../contextapi/Contextapi";
import { Link } from "react-router-dom";

function Singleproduct() {
  const { cartItems, setCartItems } = useContext(productContext);
  const { productData } = useContext(Contextdata);
  const { id } = useParams();
  const [productDatas, setProductDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = `https://fakestoreapi.com/products`;
  const [suggestProduct, setSuggestProduct] = useState([]);

  const fetchProduct = async (url) => {
    try {
      let response = await axios.get(url);
      let repData = response.data;
      let filterData = repData.filter((cur) => cur.id == id);
      let category = filterData.map((cur) => cur.category);
      let suggest = repData.filter((cur) => cur.category == category);
      setSuggestProduct(suggest);
      setProductDatas(filterData);
      setLoading(false);
    } catch (e) {
      console.error("Error from singlep", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProduct(api);
  }, [id]);

  const buttonHandle = (productId) => {
    const currentProduct = productData.find((cur) => cur.id === productId);

    if (currentProduct) {
      const isProductInCart = cartItems.find(
        (item) => item.id === currentProduct.id
      );

      if (isProductInCart) {
        setCartItems((prev) =>
          prev.filter((item) => item.id !== currentProduct.id)
        );
      } else {
        setCartItems((prev) => [...prev, currentProduct]);
      }
    }
  };

  return (
    <div className="mt-[50px]">
      {loading ? (
        <div className="w-full h-[300px] flex justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="max-w-[800px] w-full mx-auto mt-[20px] px-[5px] py-[5px]">
          {productDatas.map((cur) => (
            <div
              key={cur.id}
              className="flex gap-[50px] max-[700px]:gap-[10px] max-[700px]:flex-wrap"
            >
              <div className=" max-[700px]:w-full max-[700px]:flex  max-[700px]:justify-center max-[700px]:items-center ">
                <img
                  src={cur.image}
                  alt="cur.title"
                  className="max-w-[200px] aspect-square object-contain"
                />
              </div>
              <div>
                <p className="mt-[5px] font-semibold text-[1.6rem] leading-none">
                  {cur.title}
                </p>
                <p className="mt-[10px] text-[0.9rem]">{cur.description}</p>
                <div className="flex gap-1 items-center mt-[10px]">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <i
                      key={index}
                      className={`ri-star-${
                        index <= cur.rating.rate
                          ? "fill"
                          : index - 0.5 === cur.rating.rate
                          ? "half-line"
                          : "line"
                      } text-[#144452] text-[1.2rem]`}
                    ></i>
                  ))}
                  <p>{cur.rating.rate} rate</p>
                </div>
                <p className="mt-[5px] text-[1.1rem] font-semibold">
                  $ {cur.price}
                </p>
                <button
                  className={`px-[10px] max-w-[200px] w-full py-[5px] bg-[#217293] rounded shadow-sm text-white mt-[30px]`}
                  onClick={() => buttonHandle(cur.id)}
                >
                  {cartItems.find((item) => item.id === cur.id)
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="sug overflow-x-scroll grid grid-flow-col gap-x-[20px] mt-[50px] place-items-center py-[10px] px-[10px] w-[85%] mx-auto max-[600px]:w-full">
        {suggestProduct.map((product) => (
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
  );
}

export default Singleproduct;
