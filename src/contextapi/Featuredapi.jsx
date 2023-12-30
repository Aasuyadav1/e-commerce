import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const featuproductApi = createContext();

const FeatureProductProvider = (props) => {
  const api = 'https://fakestoreapi.com/products';
  const [productData, setProductData] = useState(null);

  const getApi = async (url) => {
    try {
      let response = await axios.get(url);
      let resconvData = response.data;
      setProductData(resconvData);
    } catch (error) {
      console.log("Error fetching data featured context:", error);
    }
  };

  useEffect(() => {
    getApi(api);
  }, []);

  return (
    <featuproductApi.Provider value={{ productData, setProductData }}>
      {props.children}
    </featuproductApi.Provider>
  );
};

export default FeatureProductProvider;
