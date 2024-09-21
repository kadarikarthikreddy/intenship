import React from "react";
import { FaPlay } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";

function Hero() {
  return (
    <div className=" px-32 bg-slate-100">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Create and sell
              <br class="hidden lg:inline-block" />
              custom products
            </h1>
            <p class="mb-8 leading-relaxed">
              <h1 className=" flex items-center">
                <TiTickOutline className=" text-green-500" /> 100% Free to use
              </h1>
              <h1 className=" flex items-center">
                <TiTickOutline className=" text-green-500" /> 900+ High-Quality
                Products
              </h1>
              <h1 className=" flex items-center">
                <TiTickOutline className=" text-green-500" /> Largest global
                print network
              </h1>
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
                Start for free
              </button>
              <button class="ml-4 flex items-center gap-1 text-gray-700 bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <FaPlay />
                How it works?
              </button>
            </div>
            <h1 className=" text-green-500 mt-5 font-bold">
              Trusted over 8M sellers around the world
            </h1>
          </div>
          <div class="max-w-lg w-full  ">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="./hero.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
