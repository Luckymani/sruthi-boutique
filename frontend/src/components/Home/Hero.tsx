// Importing required components and icons
import { Link } from "react-router-dom";

// Hero component
const Hero = () => {
  return (
    <div className="pt-16 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          {/* Main Heading */}
          <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Summer styles are finally here
          </h1>
          {/* Subheading */}
          <p className="mt-4 text-xl text-gray-500">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn't care if you live or die.
          </p>
          {/* Shop Collection button */}
          <Link
            to="#"
            className="mt-5 inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
          >
            Shop Collection
          </Link>
        </div>
        <div>
          <div className="mt-10 overflow-hidden">
            {/* Decorative image grid */}
            <div aria-hidden="true" className="pointer-events-none">
              <div className="md:absolute -translate-x-10 transform sm:left-1/2 sm:top-0 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  {/* Image Grid Column 1 */}
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img
                        src="https://images.unsplash.com/photo-1593105293524-123b7e48249d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=722&q=80"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://img.freepik.com/free-photo/teenage-boy-white-tee-basic-youth-apparel-shoot_53876-126957.jpg?w=740&t=st=1690694348~exp=1690694948~hmac=1d4bd3c3a3d6ab3c902ea1d6dc56284e5fd593b57894ae5e284e9bf60f75ddcf"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  {/* Image Grid Column 2 */}
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://img.freepik.com/free-photo/basic-white-shirt-men-s-fashion-apparel-studio-shoot_53876-105424.jpg?w=740&t=st=1690694373~exp=1690694973~hmac=b0a8742fe20e0553b84fbdd7136a2d020788802b6f18760c34e4eadae87be24f"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://img.freepik.com/free-photo/feminine-model-posing-with-orange-background_23-2148440573.jpg?w=740&t=st=1690694398~exp=1690694998~hmac=3047365739c4b9cb01f70006f0fe0b9ea4a011578591bd05b8d377e2f0b552f7"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://img.freepik.com/free-photo/man-simple-navy-jacket-portrait-street-fashion-rear-view_53876-102892.jpg?w=740&t=st=1690694440~exp=1690695040~hmac=8410ff89def75767b9d3d1d762b7728fee9be388469aaffb0fdc1352a827c0e8"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  {/* Image Grid Column 3 */}
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://img.freepik.com/free-photo/woman-basic-white-polo-shirt-apparel-studio-shoot_53876-125251.jpg?w=740&t=st=1690694483~exp=1690695083~hmac=d9cd575358f1e9aa09d07a952a387df66a99422a02ac7ab08ef79302a5b17dfb"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://img.freepik.com/free-photo/young-brunette-girl-posing-model-casting_114579-16840.jpg?w=740&t=st=1690694508~exp=1690695108~hmac=339e160b58baad35b110094b572c000d57a1010e0051591007955e986bdda476"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
