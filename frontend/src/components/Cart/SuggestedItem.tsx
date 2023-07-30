import React from "react";

function SuggestedItem() {
  return (
    <>
      <div className="p-2 px-6 sm:px-0  border-x border-gray-200  mx-4 flex-1">
        <div className="bg-orange-0  flex justify-center py-0">
          <img
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70"
            alt=""
            className="max-h-56 rounded-sm"
          />
        </div>

        <div className="flex  justify-between pt-2">
          <div>Name</div>
          <div>$118</div>
        </div>
        <div className="text-gray-500 text-sm">color</div>
      </div>
    </>
  );
}

export default SuggestedItem;
