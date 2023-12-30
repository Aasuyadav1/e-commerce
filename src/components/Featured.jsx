import React, { useContext, useEffect, useState } from 'react';
import { featuproductApi } from '../contextapi/Featuredapi';
import { productContext } from '../contextapi/Cart';


function Featured() {
  const { productData } = useContext(featuproductApi);
  const [featuredData, setFeaturedData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const { cartItems, setCartItems } = useContext(productContext);
  


  useEffect(() => {
    if (productData) {
      const slicedData = productData.slice(15, 18);
      setFeaturedData(slicedData);
      // Set the default product details when component mounts
      setSelectedProduct(slicedData[0]);
    } else {
      console.log("Error happened from featured section");
    }
  }, [productData]);

  const clickedfeatured = (productId) => {
    const selectedProduct = featuredData.find((product) => product.id === productId);
    if (selectedProduct) {
      setSelectedProduct(selectedProduct);
     
    }
  };

  const buttonHandle = (productId) => {
    const clickedProduct = productData.find((product) => product.id === productId);

    if (clickedProduct) {
      const isInCart = cartItems.find((item) => item.id === clickedProduct.id);

      if (isInCart) {
        // If the product is already in the cart, remove it
        setCartItems((prev) => prev.filter((item) => item.id !== clickedProduct.id));
      } else {
        // If the product is not in the cart, add it
        setCartItems((prev) => [...prev, clickedProduct]);
      }
    }
  };

  return (
    <>
      {/* ... (rest of your JSX) */}
      <div>
        <div className='w-full flex justify-center items-center gap-[40px] mt-10 flex-wrap'>
          {featuredData.map((product) => (
            <div
              key={product.id}
              className='max-w-[180px] w-full border-[3px] border-[#217293] border-solid px-[15px] py-[15px] rounded overflow-hidden bg-white hover:border-[red] focus:border-[red] active:border-[red] cursor-pointer'
              onClick={() => clickedfeatured(product.id)}
            >
              <img src={product.image} alt='product' className='aspect-square object-contain w-full' />
            </div>
          ))}
        </div>
        <div className='mt-[50px] flex justify-center items-center flex-wrap px-[5px]'>
          {selectedProduct.id && (
            <div className='flex justify-center gap-[20px] max-w-[1000px] w-full max-[831px]:flex-wrap'>
              <div className='max-w-[280px] aspect-square min-h-[280px]  w-full px-[5px] py-[5px] bg-white shadow-md '>
                <img src={selectedProduct.image} alt="selected product" className='w-full h-full object-contain' />
              </div>
              <div className='flex flex-col justify-between '>
                <div>
                  <p className='mt-[15px]'>{selectedProduct.title}</p>
                  <p className='mt-[0px] font-bold text-[1.1rem] max-[831px]:mt-[10px]'>$ {selectedProduct.price}</p>
                  <p className='mt-[10px] text-[0.8rem]'>{selectedProduct.description}</p>
                </div>
                <div>
                  <button
                    className='px-[40px] py-[10px]  bg-[#217293] rounded shadow-sm text-white max-[831px]:mt-[20px]'
                    onClick={() => buttonHandle(selectedProduct.id)}
                  >
                    {cartItems.find((item) => item.id === selectedProduct.id) ? 'Remove from Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </>
  );
}

export default Featured;
