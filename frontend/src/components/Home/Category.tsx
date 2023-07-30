// Importing required components and icons
import { Link } from "react-router-dom";

// Category component
const Category = () => {
  return (
    <section className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8 lg:pt-56">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        {/* Category Heading */}
        <h2
          id="category-heading"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Shop by Category
        </h2>
        {/* Browse all categories link */}
        <a
          href="#"
          className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
        >
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-4">
        {/* Category Card 1 */}
        <div className="relative group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <img
            src="https://images.unsplash.com/photo-1514069419621-1adbe445edf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
            className="object-cover object-center group-hover:opacity-75"
          />
          <div
            aria-hidden="true"
            className="bg-gradient-to-b from-transparent to-black opacity-50"
          />
          <div className="p-6 absolute bottom-0">
            <div>
              <h3 className="font-semibold text-white">
                {/* Category Link */}
                <Link to="#">
                  <span />
                  Accessories
                </Link>
              </h3>
              {/* Shop Now Text */}
              <p className="mt-1 text-sm text-white">Shop now</p>
            </div>
          </div>
        </div>
        {/* Category Card 2 */}
        <div className="relative group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <img
            src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1482&q=80"
            alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
          />
          <div
            aria-hidden="true"
            className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
          />
          <div className="p-6 absolute bottom-0">
            <div>
              <h3 className="font-semibold text-white">
                {/* Category Link */}
                <Link to="#">
                  <span />
                  Accessories
                </Link>
              </h3>
              {/* Shop Now Text */}
              <p className="mt-1 text-sm text-white">Shop now</p>
            </div>
          </div>
        </div>
        {/* Category Card 3 */}
        <div className="relative group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <img
            src="https://images.unsplash.com/photo-1690222490168-8ef5f427b5d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
          />
          <div
            aria-hidden="true"
            className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
          />
          <div className="p-6 absolute bottom-0">
            <div>
              <h3 className="font-semibold text-white">
                {/* Category Link */}
                <a href="#">
                  <span className="absolute inset-0" />
                  Workspace
                </a>
              </h3>
              {/* Shop Now Text */}
              <p aria-hidden="true" className="mt-1 text-sm text-white">
                Shop now
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
