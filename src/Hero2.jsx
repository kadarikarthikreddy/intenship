import React from "react";

function Hero2() {
  return (
    <div className=" lg:px-20">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="./profit.jpg"
                />
                <p class="leading-relaxed">
                  We offer some of the lowest prices in the industry because
                  print providers continuously compete to win your business.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-2xl">
                  Higher Profits
                </h2>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="./scale.jpg"
                />
                <p class="leading-relaxed">
                  Easily handle peak holiday seasons, with our wide network of
                  partners and automatic routing functionality.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-2xl">
                  ALPER KAMU
                </h2>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="./best.webp"
                />
                <p class="leading-relaxed">
                  With 900+ products and top quality brands, you can choose the
                  best products for your business.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 text-2xl font-medium title-font tracking-wider">
                  Best Selection
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero2;
