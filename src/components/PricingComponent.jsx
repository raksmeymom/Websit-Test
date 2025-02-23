import React from 'react'

export const PricingComponent = () => {
  return (
    <div class="mx-auto max-w-7xl py-24 px-4">
    <div class="sm:align-center sm:flex sm:flex-col mx-auto max-w-3xl">
      <h1 class="max-w-xl mx-auto leading-tight text-3xl font-bold tracking-tight sm:text-center">NewProduct.ai
        Pricing
      </h1>
      <p class="mt-4 text-md sm:text-center">Revolutionizing your workflow with AI</p>
    </div>
    
    <div
      class="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
  
    
      <div class="divide-y bg-white divide-gray-200 rounded-lg border border-gray-200 shadow-md">
        <div class="p-6">
          <h2 class="text-lg font-medium leading-6 text-gray-900">Basic</h2>
          <p class="my-4 text-4xl font-bold tracking-tight text-gray-900">
            $<span id="basicPlanPrice">19.99</span><span class="text-base font-medium text-gray-500ml-1 ml-1">/month</span>
          </p>
          <div class="flex-col">
            <button class="shadow-lg mt-3 block w-full rounded-md border border-blue-800 bg-blue-800 py-2 text-center text-sm font-semibold text-white hover:bg-blue-900">Get Started →</button>
          </div>
        </div>
        <div class="px-6 pt-6 pb-8">
          <h3 class="text-sm font-medium text-gray-900">What's included</h3>
          <ul role="list" class="mt-6 space-y-4">
            
            <li class="flex space-x-3 items-center">
              <div class="w-6 h-6 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg></div><span class="text-md text-gray-800">Feature 1</span>
            </li>
            
          </ul>
        </div>
      </div>
  

      <div class="divide-y bg-white divide-gray-200 rounded-lg border border-gray-200 shadow-md">
        <div class="p-6">
          <h2 class="text-lg font-medium leading-6 text-gray-900">Standard</h2>
          <p class="my-4 text-4xl font-bold tracking-tight text-gray-900">
            $<span id="standardPlanPrice">39.99</span><span class="text-base font-medium text-gray-500ml-1 ml-1">/month</span>
          </p>
          <div class="flex-col">
            <button class="shadow-lg mt-3 block w-full rounded-md border border-green-800 bg-green-800 py-2 text-center text-sm font-semibold text-white hover:bg-green-900">Get Started →</button>
          </div>
        </div>
        <div class="px-6 pt-6 pb-8">
          <h3 class="text-sm font-medium text-gray-900">What's included</h3>
          <ul role="list" class="mt-6 space-y-4">
           
            <li class="flex space-x-3 items-center">
              <div class="w-6 h-6 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg></div><span class="text-md text-gray-800">Feature 2</span>
            </li>
           
          </ul>
        </div>
      </div>
  
      
      <div class="divide-y bg-white divide-gray-200 rounded-lg border-2 shadow-md">
        <div class="p-6">
          <h2 class="text-lg uppercase font-medium leading-6 text-gray-900">Premium</h2>
          <p class="my-4 text-4xl font-bold tracking-tight text-gray-900">
            $<span id="premiumPlanPrice">79.99</span><span class="text-base font-medium text-gray-500ml-1 ml-1">/month</span>
          </p>
          <div class="relative">
            <div class="flex-col">
              <button class="shadow-lg mt-3 block w-full rounded-md border border-purple-800 bg-purple-800 py-2 text-center text-sm font-semibold text-white hover:bg-purple-900">Subscribe to Premium</button>
            </div>
          </div>
        </div>
        <div class="px-6 pt-6 pb-8 border-t">
          <h3 class="text-sm font-medium text-gray-900">What's included</h3>
          <ul role="list" class="mt-6 space-y-4">
            
            <li class="flex space-x-3 items-center">
              <div class="w-6 h-6 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg></div><span class="text-md text-gray-800">Feature 3</span>
            </li>
            
          </ul>
        </div>
      </div>
  
    </div>
   
    <p class="text-sm text-gray-500 mt-4">*Need a custom plan or team license? Contact us at <a
        href="mailto:support@newproduct.ai" class="underline">support@newproduct.ai</a> or use live chat</p>
  </div>
  )
}
