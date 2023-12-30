import React, { useState } from 'react'


function Faq() {
  const [faqs, setFaqs] = useState([
    {
      id:1,
      que:'When will my order ship?',
      ans:'Santa s sleigh does not wait for a clock to strike; it follows the rhythm of the holiday spirit! While we canot pinpoint an exact departure time, rest assured that your gifts are on a magical journey as soon as theyre packed with care and love by Santas elves.',
      toggle:false
    },
    {
      id:2,
      que:'What are your shipping rates?',
      ans:'Ho ho ho, the cost of spreading holiday cheer with Santas sleigh is as magical as the season itself! Shipping rates are calculated based on your location, gift weight, and size. Simply proceed to the checkout, and the twinkling stars will reveal the shipping cost for your festive treasures.',
      toggle:false
    },
    {
      id:3,
      que:'Do you offer gift wrapping?',
      ans:'Ho ho ho, indeed! Santas elves are ready to sprinkle some magic on your presents. During the checkout journey, look for the enchanting gift wrapping option. Click it, and let the holiday spirit unfold!',
      toggle:false
    },
    {
      id:4,
      que:'What is your return policy?',
      ans:'Ho ho ho, Santas heart is big enough for everyone! Naughty or nice, you can return a gift with a sprinkle of Christmas magic. Santas Return Elves are here to help, no matter the list you find yourself on',
      toggle:false
    },
    {
      id:5,
      que:'Do you have a store location?',
      ans:'As much as Santa loves spreading cheer, direct pick-ups from the North Pole are a bit tricky. We have partnered with trusted sleigh delivery services to ensure your gifts reach your doorstep with the magic and care they deserve.',
      toggle:false
    }
  ]);
  const clickFaq = (faqId)=>{
    setFaqs((previousfaq)=>
      previousfaq.map((cur)=>
        cur.id === faqId ? {...cur, toggle: !cur.toggle} : cur
      )
    )
  }
  return (
    <div className=' mt-[50px]'>
      <div className='max-w-[700px] mx-auto'>
        <h1 className='text-center font-semibold text-[1.8rem]'>Frequently asked questions</h1>
        <p className='text-center mt-[15px]'>Have questions? Explore our Frequently Asked Questionsmsection for quick answers. If your question isn't answered, feel free to reach out to our helpful support team.</p>
      </div>
      <div className='mt-[80px] flex flex-col gap-[10px]'>
        {
          faqs.map((cur)=>{
            return(
              <div className='max-w-[700px] w-full   mx-auto px-[10px] py-[10px] border-[#00000047] border-[1px] border-solid rounded-md' key={cur.id}>
                <div className='flex justify-between w-full items-center cursor-pointer' onClick={()=> clickFaq(cur.id)}>
                  <p className='font-semibold'>{cur.que}</p>
                  <i
        className={`ri-add-fill w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer
          transition-all duration-[0.3s] text-[1.3rem] ease-in-out hover:bg-slate-50 hover:shadow-md ${cur.toggle ? 'rotate-180' : ''}`}
      ></i>
                </div>
                {
                  cur.toggle && <div className='mt-[15px]'>{cur.ans}</div>
                }
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Faq