import React from 'react'

export default function ContactComponent() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold dark:text-gray-100">Contact</h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-gray-400">
          Want to contact us? Choose an option below and we’ll be happy to show you how we can transform your company’s web experience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <h2 className="text-lg font-bold dark:text-gray-100">Contact Us</h2>
          <p className="max-w-sm mt-4 mb-4 dark:text-gray-400">
            Have something to say? We are here to help. Fill up the form or send an email or call us.
          </p>

          <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-gray-400">
            📍 <span>14th Avenue, Glory Road</span>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
            ✉️ <a href="mailto:hello@company.com">hello@company.com</a>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
            📞 <a href="tel:11111111111">+51 11111111111</a>
          </div>
        </div>

        <div>
          <form>
            <input type="checkbox" className="hidden" style={{ display: 'none' }} name="botcheck" />
            
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="off"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="name"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">Email Address</label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                autoComplete="off"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="email"
              />
            </div>

            <div className="mb-3">
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="message"
              />
            </div>

            <button type="submit" className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
