import React from 'react'

const RegisterComponent = () => {
  return (
    <div className='bg-gradient-to-br from-purple-700 to-pink-500 min-h-screen px-8 py-10 flex flex-col justify-center items-center'>

  
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center ">

      <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
        Welcome to My Company
      </h1>
      <form action="#" className="w-full flex flex-col gap-4">
        <div className="flex items-start flex-col justify-start">
          <label htmlFor="firstName" className="text-sm text-gray-700 dark:text-gray-200">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="lastName" className="text-sm text-gray-700 dark:text-gray-200">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="username" className="text-sm text-gray-700 dark:text-gray-200">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="password" className="text-sm text-gray-700 dark:text-gray-200">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="confirmPassword" className="text-sm text-gray-700 dark:text-gray-200">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">
          Register
        </button>
      </form>

      {/* Login Link */}
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
        <div className="mt-4 text-center">
              
                <a href="/login" className="text-blue-500 hover:underline">
                  Login here
                </a>
              
            </div>
      </div>
    </div>
    </div>
  )
}

export default RegisterComponent
