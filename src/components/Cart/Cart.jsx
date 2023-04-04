import React from 'react';

const Cart = () => {
    return (
        <div
  class="w-full border border-gray-600 bg-gray-100 p-4 pt-4 sm:p-6 lg:p-8"
  aria-modal="true"
  role="dialog"
  tabindex="-1"
>
  <button
    class="relative ml-auto -mr-4 block text-gray-600 transition hover:scale-110"
  >
    <span class="sr-only">Close cart</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-5 w-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>

  <div class="mt-6 space-y-6">
    <ul class="space-y-4">
      <li class="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
          alt=""
          class="h-16 w-16 rounded object-cover"
        />

        <div>
          <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

          <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt class="inline">Size:</dt>
              <dd class="inline">XXS</dd>
            </div>

            <div>
              <dt class="inline">Color:</dt>
              <dd class="inline">White</dd>
            </div>
          </dl>
        </div>
      </li>

      <li class="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
          alt=""
          class="h-16 w-16 rounded object-cover"
        />

        <div>
          <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

          <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt class="inline">Size:</dt>
              <dd class="inline">XXS</dd>
            </div>

            <div>
              <dt class="inline">Color:</dt>
              <dd class="inline">White</dd>
            </div>
          </dl>
        </div>
      </li>

      <li class="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
          alt=""
          class="h-16 w-16 rounded object-cover"
        />

        <div>
          <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

          <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt class="inline">Size:</dt>
              <dd class="inline">XXS</dd>
            </div>

            <div>
              <dt class="inline">Color:</dt>
              <dd class="inline">White</dd>
            </div>
          </dl>
        </div>
      </li>
    </ul>

    <div class="space-y-4 text-center">
      <a
        href="#"
        class="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart (2)
      </a>

      <a
        href="#"
        class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
      >
        Checkout
      </a>

      <a
        href="#"
        class="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </a>
    </div>
  </div>
</div>

    );
};

export default Cart;