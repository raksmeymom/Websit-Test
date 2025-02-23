import React from 'react'

export default function LoginComponent() {
  return (
    <div className="bg-gradient-to-br from-purple-700 to-pink-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">Welcome to My Website</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="password"
              name="password"
              type="password"
            />
          </div>
          <div>
            <button type="submit" className="w-full bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg">
              Log In
            </button>
          </div>

          <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <a href="/register" className="text-blue-500 hover:underline">
                  Register here
                </a>
              </p>
            </div>
        </form>
      </div>
    </div>
  )
}
