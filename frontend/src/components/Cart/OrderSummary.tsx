import React from "react";

function OrderSummary() {
  return (
    <div className=" flex flex-col p-4 bg-order-sum-color gap-3">
      <div className="text-xl">OrderSummary</div>

      <div className="flex flex-col gap-2 text-sm text-gray-600">
        <div className="border-b  border-gray-300 pb-2">
          Subtotal{" "}
          <span className="text-black font-bold float-right mr-5">$99</span>
        </div>
        <div className="border-b  border-gray-300 pb-2">
          Shipping charge{" "}
          <span className="text-black font-bold float-right mr-5">$99</span>
        </div>
        <div className="border-b  border-gray-300 pb-2">
          Tax estimate{" "}
          <span className="text-black font-bold float-right mr-5">$99</span>
        </div>
      </div>

      <div>
        {" "}
        Order Total{" "}
        <span className="text-black font-bold float-right mr-5 text-lg">
          $99
        </span>
      </div>

      <div className="border flex justify-center px-0">
        <button className="h-10 w-full rounded-lg bg-indigo-600 text-white">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
