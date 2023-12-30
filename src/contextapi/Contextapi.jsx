import { createContext, useEffect, useState } from "react";
import axios from 'axios'

let Contextdata = createContext();
const api = 'https://fakestoreapi.com/products'

const Appprovider = ({children}) => {
    let [productData, setProductData] = useState(null);
    let [cartProduct, setCartProduct] = useState([])
    let [serachProduct, setSearchProduct] = useState()
    let getapi = async (url) => {
        try {
            let response = await axios.get(url);
            let resconvData = response.data;
            setProductData(resconvData);
        } catch (error) {
            console.log("Error fetching data frm context:", error);
        }
    }

    useEffect(() => {
        getapi(api);
    }, []);

    useEffect(() => {
        // Log the updated state after it has been set
        // console.log(productData);
    }, [productData]); // Run this effect whenever productData changes
    let [cartShow, setCartShow] = useState(false)

    return (
        <Contextdata.Provider value={{ productData, setProductData, serachProduct, setSearchProduct, cartShow, setCartShow }}>
            {children}
        </Contextdata.Provider>
    );
}

export { Appprovider, Contextdata };
