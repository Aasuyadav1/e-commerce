import React from 'react'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

function Slider() {
  const images = [
    {
      url : "https://static.vecteezy.com/system/resources/thumbnails/004/707/502/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
      id:1
    },
    {
      url : "https://static.vecteezy.com/system/resources/previews/006/828/785/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg",
      id: 2
    },
    {
      url: "https://static.vecteezy.com/system/resources/previews/002/006/605/original/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-free-vector.jpg",
      id:3
    }
  ]
 
  return (
    <>
    
    <Slide duration={1999}
  onChange={function noRefCheck(){}}
  onStartChange={function noRefCheck(){}}
  pauseOnHover={false}
  responsive={null}>
        {
          images.map((cur)=>
            <div className='each-slide-effect' key={cur.id}>
               <img src={cur.url} alt="" className=' max-[600px]:min-h-[200px] max-[600px]:h-full h-[400px] w-full object-cover' />
                {/* <div style={{backgroundImage:'url(https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg)'}} ></div> */}
            </div>
      
          )
        }
    </Slide>
    </>
  )
}

export default Slider