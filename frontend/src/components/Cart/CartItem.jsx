import React from "react";

function CartItem() {
  return (
    <>
      <div className="border-b border-gray-200 pb-8 flex">
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/832/832/kl6wx3k0/t-shirt/y/n/i/s-bbt-try-this-original-imagydarhsryeahn.jpeg?q=70"
            alt=""
            className="max-h-52 rounded-md"
          />
        </div>

        <div className=" flex-1 px-4">
          <p>Name</p>
          <p className="text-gray-600 text-sm py-1">Color | size</p>
          <p>$32.00</p>
        </div>

        <div className="basis-1/5">
          <button className="flex rounded-sm pl-2 border  shadow-md">
            <div className="text-gray-800 font-light">1</div>
            <div className=" m-auto ml-2 mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="text-gray-500">x</div>
      </div>
    </>
  );
}

export default CartItem;
