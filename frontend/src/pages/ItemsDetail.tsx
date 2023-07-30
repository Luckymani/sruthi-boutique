import React from "react";
import Navbar from "../components/Navbar";
import Small_Pic from "../components/Item-Detail/Small_Pic";
import Star from "../components/Star";
import SuggestedItem from "../components/Cart/SuggestedItem";

function ItemsDetail() {
  return (
    <>
      <div className="flex flex-col h-full ">
        <div className="">
          <Navbar />
        </div>

        {/* main */}
        <div className="basis-full flex flex-col md:flex-row py-6">
          {/* img div */}
          <div className=" basis-1/3 ">
            <div className="flex justify-center">
              <img
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70"
                alt=""
              />
            </div>

            {/* small pics of item */}
            <Small_Pic />
          </div>

          {/* detail div */}
          <div className=" flex-1 pl-6 md:pl-0 ">
            <p className="font-bold text-3xl">The Boys Shirt</p> {/* Title*/}
            <p className="text-xl">$5</p> {/* price */}
            <p className="mb-4">
              Rating:{" "}
              <div className="flex">
                <Star />
                <Star />
                <Star />
              </div>
            </p>{" "}
            {/* Rating */}
            {/* Discription */}
            <p className="text-gray-800 font-light pr-0 md:pr-48 mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              est id qui labore necessitatibus minima aut velit veniam eius
              magni, ipsum corrupti vitae repellendus asperiores dolore,
              blanditiis odit deleniti illo! Nulla voluptas sint magni maxime
              delectus velit non rem, dolores id vitae nesciunt quidem sed nam
              eum inventore error, qui earum sapiente perspiciatis explicabo.
              Veniam commodi sunt inventore deserunt eum.
            </p>{" "}
            <p>
              Stiching type: <span className="text-gray-600">quxecy</span>
            </p>
            <p>
              Expected Delievery: <span className="text-gray-600">2 Aug</span>
            </p>
            <div className="mt-5">
              <p className="text-gray-500">color</p>
              <div className="flex gap-2">
                <div className="border h-8 w-8 rounded-full p-1 bg-gray-900"></div>
                <div className="border h-8 w-8 rounded-full p-1 bg-gray-200"></div>
                <div className="border h-8 w-8 rounded-full p-1 bg-gray-500"></div>
              </div>{" "}
              {/* Color Option */}
            </div>
            <div className=" mt-5 flex">
              <div>
                <button className="border bg-indigo-600 text-white px-16 rounded-md py-2">
                  Add to bag
                </button>
              </div>

              {/* heart icon */}
              <div className="flex items-center ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/3 mt-6">
          <p className="px-4 font-semibold text-lg ">Customers also bought</p>
          <div className="flex overflow-y-auto">
            <SuggestedItem />
            <SuggestedItem />
            <SuggestedItem />
            <SuggestedItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsDetail;
