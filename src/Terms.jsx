import React from "react";

function Terms() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="./custom-products.webp"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-green-400 mb-1">
                    CREATE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Coustum Products
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>

            {/* <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="./custom-products.webp"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-green-400 mb-1">
                    CREATE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Coustum Products
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div> */}
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="./your-products.webp"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-green-400 mb-1">
                    SELL
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    on your terms
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="./fullfillment.webp"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-green-400 mb-1">
                    WE HANDLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    fulfilment
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
