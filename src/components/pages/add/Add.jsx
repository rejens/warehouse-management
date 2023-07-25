import React from "react";

export default function Add() {
   return (
      <div className="w-1/2 mx-auto mt-10">
         <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
               <div className="w-full px-3">
                  <label
                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     for="product-name"
                  >
                     Product Name{" "}
                  </label>
                  <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="product-name"
                     type="text"
                     placeholder="Rice"
                  />
               </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
               <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     for="grid-first-name"
                  >
                     Quantity
                  </label>
                  <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                     id="grid-first-name"
                     type="number"
                     placeholder=""
                  />
               </div>
               <div className="w-full md:w-1/2 px-3">
                  <label
                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     for="grid-last-name"
                  >
                     Price{" "}
                  </label>
                  <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-last-name"
                     type="number"
                     placeholder=""
                  />
               </div>
            </div>

            <div class="md:flex md:items-center">
               <div class="md:w-1/3"></div>
               <div class="md:w-2/3">
                  <button
                     class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                     type="button"
                  >
                     Sign Up
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
}
