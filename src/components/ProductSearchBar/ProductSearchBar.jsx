import React from "react";

const ProductSearchBar = () => {
  return (
    <div className="bg-gray-200 py-8 px-5 flex justify-between gap-4">
   

<label
  for="searchProduct"
  class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="text"
    id="searchProduct"
    placeholder="Search"
    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Search
  </span>
</label>


      <a
        class="inline-block rounded border border-black bg-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        href="/download"
      >
        Download
      </a>
    </div>
  );
};

export default ProductSearchBar;