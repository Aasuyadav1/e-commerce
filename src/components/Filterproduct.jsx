import React, { useContext, useState, useEffect } from "react";
import { Contextdata } from "../contextapi/Contextapi";

function Filterproduct() {
  const { productData, setProductData } = useContext(Contextdata);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [originalProductData, setOriginalProductData] = useState(productData);

  // useEffect(() => {
  //   // Initialize originalProductData with productData when it changes
  //   setOriginalProductData(productData);
  // }, [productData]);

  const filter = (e) => {
    const category = e.target.value;

    if (category === "all") {
      setProductData(originalProductData);
      setSelectedCategory("all");
    } else {
      const filteredData = [...originalProductData].filter(
        (cur) => cur.category === category
      );
      setProductData(filteredData);
      setSelectedCategory(category);
    }
  };

  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 max-w-[200px] w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={selectedCategory}
        onChange={(e) => filter(e)}
      >
        <option value="all">All</option>
        <option value="men's clothing">Boys</option>
        <option value="women's clothing">Girls</option>
        <option value="electronics">Electronics</option>
        <option value="jewelry">Jewelry</option>
      </select>
    </div>
  );
}

export default Filterproduct;
