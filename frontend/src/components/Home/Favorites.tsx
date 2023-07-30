// Importing required components and data
import { favorites } from "../../constants/constants";

// Favorites component
const Favorites = () => {
  return (
    <section aria-labelledby="favorites-heading">
      <div className="mx-auto max-w-7xl py-4 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          {/* Favorites Heading */}
          <h2
            id="favorites-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Our Favorites
          </h2>
          {/* Browse all favorites link */}
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        {/* Grid for displaying favorite items */}
        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="group relative">
              <div className="h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto">
                {/* Image of the favorite item */}
                <img
                  src={favorite.imageSrc}
                  alt={favorite.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* Name and link of the favorite item */}
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <a href={favorite.href}>
                  <span className="absolute inset-0" />
                  {favorite.name}
                </a>
              </h3>
              {/* Price of the favorite item */}
              <p className="mt-1 text-sm text-gray-500">{favorite.price}</p>
            </div>
          ))}
        </div>

        {/* Browse all favorites link for small screens */}
        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
