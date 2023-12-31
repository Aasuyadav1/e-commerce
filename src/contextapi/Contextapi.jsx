import { createContext, useEffect, useState } from "react";
import axios from "axios";

let Contextdata = createContext();
const api = "https://fakestoreapi.com/products";

const Appprovider = ({ children }) => {
  let [productData, setProductData] = useState([]);
  let [cartProduct, setCartProduct] = useState([]);
  let [serachProduct, setSearchProduct] = useState();
  let getapi = async (url) => {
    try {
      let response = await axios.get(url);
      let resconvData = response.data;
      let updatedData = resconvData.map((cur) => {
        return { ...cur, quantity: 1 };
      });

      setProductData(updatedData);
    } catch (error) {
      console.log("Error fetching data frm context:", error);
    }
  };

  useEffect(() => {
    getapi(api);
  }, []);

  useEffect(() => {
    // console.log(productData);
  }, [productData]);
  let [cartShow, setCartShow] = useState(false);

  return (
    <Contextdata.Provider
      value={{
        productData,
        setProductData,
        serachProduct,
        setSearchProduct,
        cartShow,
        setCartShow,
      }}
    >
      {children}
    </Contextdata.Provider>
  );
};

export { Appprovider, Contextdata };
