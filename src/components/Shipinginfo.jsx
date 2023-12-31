import React from "react";

function Shipinginfo() {
  return (
    <div className="grid grid-cols-3 mt-[30px] max-[600px]:grid-cols-1">
      <div
        className="py-[10px] px-[15px] bg-[#FCF4CF] flex
        gap-[10px] items-center"
      >
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="https://st.depositphotos.com/2274151/3840/i/950/depositphotos_38408015-stock-photo-free-shipping-round-pink-sticker.jpg"
          alt=""
        />
        <div>
          <p className="font-[500] leading-[20px] text-[0.9rem] opacity-[0.9]">
            Free shiping
          </p>
          <p className="block leading-[20px]">
            free shiping on all orders over
          </p>
        </div>
      </div>
      <div
        className="py-[10px] px-[15px] bg-[#E2FDFA] flex
        gap-[10px] items-center"
      >
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/2037/2037544.png"
          alt=""
        />
        <div>
          <p className="font-[500] leading-[20px] text-[0.9rem] opacity-[0.9]">
            Money back guarantee
          </p>
          <p className="block leading-[20px]">within 30 day of purchase</p>
        </div>
      </div>
      <div
        className="py-[10px] px-[15px] bg-[#FCDFCF] flex
        gap-[10px] items-center"
      >
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="https://p1.hiclipart.com/preview/810/634/480/call-logo-customer-service-call-centre-technical-support-customer-support-customer-service-representative-help-desk-service-quality-png-clipart.jpg"
          alt=""
        />
        <div>
          <p className="font-[500] leading-[20px] text-[0.9rem] opacity-[0.9]">
            Online support
          </p>
          <p className="block leading-[20px]">
            our online support here for you
          </p>
        </div>
      </div>
    </div>
  );
}

export default Shipinginfo;
