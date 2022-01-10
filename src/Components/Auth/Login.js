import React from 'react'

const Login = () => {
    return (
        <div class="flex overflow-auto h-screen p-4 bg-gray-100  md:items-center lg:justify-center">
        <div class="flex flex-col w-full lg:overflow-hidden overflow-auto bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-xl">
          <div class="lg:flex lg:flex-1 lg:max-w-screen-xl p-4 py-6 text-white bg-red-400 md:w-80 md:flex-1 md:flex-shrink-0 md:flex md:flex-col md:items-center ">
            <div class="my-3 text-4xl font-bold tracking-wider text-center">
              <p>Affix Tech</p>
            </div>
            <p class="flex flex-col text-xl items-center justify-center mt-10 text-center">
              <span>See You The Answer</span>
            </p>

            <div class=" my-8 p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 md:justify-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12"
                  src="https://avatars.dicebear.com/api/adventurer/Oven.svg"
                  alt="ChitChat Logo"
                />
              </div>
              <div>
                <div class="text-xl font-medium text-black">
                  Title Recommend
                </div>
                <p class="text-gray-500  break-words">
                  Detail Recommend
                </p>
              </div>
            </div>
            <div class="my-8 p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12"
                  src="https://avatars.dicebear.com/api/adventurer/c.svg"
                  alt="ChitChat Logo"
                />
              </div>
              <div>
                <div class="text-xl font-medium text-black">
                  Title Recommend
                </div>
                <p class="text-gray-500 break-all">
                  Detail Recommend
                </p>
              </div>
            </div>

            <p class="flex flex-col items-center justify-center text-gray-300 mt-10 text-center">
              <span>Create by Hemarat & Natthakit</span>
              {/* <a href="#" class="underline">
                Get Started!
              </a> */}
            </p>
            {/* <p class="mt-6 text-sm text-center text-gray-300">
              Read our{" "}
              <a href="#" class="underline">
                terms
              </a>{" "}
              and{" "}
              <a href="#" class="underline">
                conditions
              </a>
            </p> */}
          </div>
          <div class="items-center p-5 bg-white md:flex-1">
            <h3 class="my-4 text-2xl font-semibold text-gray-700">
              Account Login
            </h3>
            <form action="#" class="flex flex-col space-y-5">
              <div class="flex flex-col space-y-1">
                <label for="text" class="text-sm font-semibold text-gray-500">
                  Username
                </label>
                <input
                  type="text"
                  id="text"
                  name="username"
                //   value={username}
                //   onChange={(e) => onChange(e)}
                  required
                  autofocus
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-red-200"
                />
              </div>
              <div class="flex flex-col space-y-1">
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="text-sm font-semibold text-gray-500"
                  >
                    Password
                  </label>

                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                //   value={password}
                //   onChange={(e) => onChange(e)}
                  required
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-red-200"
                />
                                  <a
                    href="#"
                    class="text-sm text-red-400 hover:underline focus:text-blue-800"
                  >
                    Forgot Password?
                  </a>
              </div>
              {/*  Check Box Remember
              <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
            </div> */}
              <div className="py-4">
                <button
                  type="submit"
                //   onClick={(e) => onSubmit(e)}
                  class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-red-400 rounded-md shadow hover:bg-red-400 focus:outline-none focus:ring-red-200 focus:ring-4"
                >
                  Log in
                </button>
              </div>
              <div>
                <button class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-red-400 rounded-md shadow hover:bg-red-400 focus:outline-none focus:ring-red-200 focus:ring-4">
                  Sign Up
                </button>
              </div>
              {/* <div class="flex flex-col space-y-5">
                <span class="flex items-center justify-center space-x-2">
                  <span class="h-px bg-gray-400 w-14"></span>
                  <span class="font-normal text-gray-500">or login with</span>
                  <span class="h-px bg-gray-400 w-14"></span>
                </span>
                <div class="flex flex-col space-y-4">
                  <a
                    href="http://localhost:8080/api/auth/google"
                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-400 rounded-full group hover:bg-red-400 focus:outline-none"
                  >
                    <span>
                      <img
                        class=" h-5 cursor-pointer"
                        src="https://i.imgur.com/arC60SB.png"
                        alt=""
                      />
                    </span>
                    <span class="text-sm font-medium text-gray-800 group-hover:text-white">
                      Google
                    </span>
                  </a>
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    )
}

export default Login
