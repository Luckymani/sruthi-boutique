import React from "react";
import CartItem from "../components/Cart/CartItem";
import OrderSummary from "../components/Cart/OrderSummary";
import Navbar from "../components/Navbar";
import SuggestedItem from "../components/Cart/SuggestedItem";

function Cart() {
  return (
    <>
      <div className="flex flex-col h-full px-2 ">
        {/*Navbar*/}
        <div className=" border-b border-gray-200 pb-4">
          <Navbar />
        </div>

        {/*main*/}
        <div className="flex-1 flex flex-col">
          <div className="border-b border-gray-200 border-x- basis-1/2 md:basis-24 flex items-center text-2xl px-2 py-7 font-bold">
            Shopping Cart
          </div>

          <div className="flex flex-1 flex-col sm:flex-row">
            <div className=" flex-1 py-5">
              {/* map this below */}

              <div className=" flex-1 p-2">
                <CartItem />
              </div>
              <div className="  flex-1 p-2">
                <CartItem />
              </div>

              {/*  */}
            </div>

            <div className=" basis-2/6 p-2 ml-0 md:ml-8 ">
              <OrderSummary />
            </div>
          </div>

          <div className=" basis-1/4">
            You may also like
            <div className="flex overflow-y-auto ">
              <SuggestedItem />
              <SuggestedItem />
              <SuggestedItem />
              <SuggestedItem />
              <SuggestedItem />
              <SuggestedItem />
            </div>
          </div>
        </div>
      </div>
      {/*Footer*/}
      {/* <div className="border border-red-500 h-1/3">Footer</div> */}
    </>
  );
}

export default Cart;
