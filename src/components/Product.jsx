import React, { useContext, useEffect, useState } from "react";
import { Contextdata } from "../contextapi/Contextapi";
import { productContext } from "../contextapi/Cart";
import { Link } from "react-router-dom";

function Product() {
  const { productData, serachProduct, setSearchProduct } =
    useContext(Contextdata);
  const { cartItems, setCartItems } = useContext(productContext);

  const [dataProduct, setdataProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("normal");
  const [buttonStates, setButtonStates] = useState({
    backgroundColor: "#217293",
    text: "add to cart",
  });

  useEffect(() => {
    setdataProduct(productData);
  }, [productData]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSort = (e) => {
    setSelectedSort(e.target.value);
    const sortedProducts = filterSorts(e.target.value);
    setdataProduct(sortedProducts);
  };

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

  const filterSorts = (value) => {
    if (value === "normal") {
      return [...dataProduct].sort((a, b) => a.id - b.id);
    } else if (value === "high to low") {
      return [...dataProduct].sort((a, b) => b.price - a.price);
    } else if (value === "low to high") {
      return [...dataProduct].sort((a, b) => a.price - b.price);
    }
    return dataProduct;
  };

  const filteredProducts =
    selectedCategory === "all"
      ? dataProduct
      : dataProduct.filter((product) => product.category === selectedCategory);

  const searchedProduct = serachProduct
    ? filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(serachProduct.toLowerCase())
      )
    : filteredProducts;

  return (
    <div className="mt-[30px]">
      <div className="mb-[30px] flex justify-center gap-[20px]">
        <div>
          <select
            id="categories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-[7px] px-[10px] max-w-[200px] w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-semibold dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="all">All</option>
            <option value="men's clothing">Boys</option>
            <option value="women's clothing">Girls</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
          </select>
        </div>
        <div>
          <select
            id="sort"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-[7px] px-[10px] max-w-[200px] w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-semibold dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm"
            value={selectedSort}
            onChange={handleSort}
          >
            <option value="normal">Normal</option>
            <option value="high to low">High to Low Price</option>
            <option value="low to high">Low to High Price</option>
          </select>
        </div>
      </div>
      {searchedProduct && (
        <div className="flex gap-[20px] w-full items-center flex-wrap justify-center">
          {searchedProduct.map((product) => (
            <div
              key={product.id}
              className="max-w-[300px] w-full aspect-square px-[10px] py-[10px] overflow-hidden flex flex-col justify-center shadow-xl rounded cursor-pointer"
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
              <button
                className={`px-[10px] py-[5px] bg-[${buttonStates.backgroundColor}] rounded shadow-sm text-white mt-[10px]`}
                onClick={() => buttonHandle(product.id)}
              >
                {cartItems.find((item) => item.id === product.id)
                  ? "Remove from Cart"
                  : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Product;
