const Cta = () => {
  return (
    <section aria-labelledby="sale-heading">
      <div className="overflow-hidden pt-32 sm:pt-14">
        <div className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative pt-48 pb-16 sm:pb-24">
              {/* Sale Heading */}
              <div>
                <h2
                  id="sale-heading"
                  className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                >
                  Final Stock.
                  <br />
                  Up to 50% off.
                </h2>
                {/* Link to shop the sale */}
                <div className="mt-6 text-base">
                  <a href="#" className="font-semibold text-white">
                    Shop the sale
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>

              {/* Images */}
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                  {/* Image 1 */}
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <img
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                        alt=""
                      />
                    </div>
                    {/* Image 2 */}
                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <img
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* Image 3 */}
                  <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <img
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        alt=""
                      />
                    </div>
                    {/* Image 4 */}
                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <img
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* Image 5 */}
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <img
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                        alt=""
                      />
                    </div>
                    {/* Image 6 */}
                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <img
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="https://images.unsplash.com/photo-1558191053-8edcb01e1da3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
