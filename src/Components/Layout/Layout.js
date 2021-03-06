/* eslint-disable no-undef */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { 
  // BellIcon, 
  MenuIcon, 
  XIcon } from "@heroicons/react/outline";
import { Link, Outlet } from "react-router-dom";

//user data import
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

//Menu Link
const navigation = [
  { name: "Home", to: "home", current: false },
  { name: "Problem", to: "problem", current: false },
  { name: "Review", to: "reviews", current: false },
  //   { name: "Calendar", to: "#", current: false },
  { name: "Chat", to: "chats", current: false },
];

function Filt(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout(props) {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-screen">
        {/* bg-gray-900 */}
        <Disclosure as="nav" className="bg-red-400">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  {/* Menu Left */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* Logo Replace */}
                      {/* <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      /> */}
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            to={item.to}
                            className={Filt(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-white hover:bg-red-300 hover:text-white",
                              "px-3 py-2 rounded-md text-md font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Notification button */}
                      {/* <button
                        type="button"
                        className="bg-red-300 p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-300 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button> */}

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-red-400 rounded-full flex items-center text-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-300 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {/* {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.to}
                                    className={Filt(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                              // <Menu.Item>{item.name}</Menu.Item>
                            ))} */}

                            <Menu.Item>
                              <Link
                                to="profile"
                                className="block px-4 py-2 text-md text-gray-700"
                              >
                                Your Profile
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link to="/">
                                <button className="block px-4 py-2 text-md text-gray-700">
                                  Sign Out
                                </button>
                              </Link>
                            </Menu.Item>
                            {/* <Menu.Item>Sign out</Menu.Item> */}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-red-400 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-300 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {/* {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={Filt(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))} */}
                  <Disclosure.Button className="block px-3 py-2 rounded-md text-md font-medium text-white hover:bg-red-300 hover:text-white">
                    <Link to="home">Home</Link>
                  </Disclosure.Button>
                  <Disclosure.Button className="block px-3 py-2 rounded-md text-md font-medium text-white hover:bg-red-300 hover:text-white">
                    <Link to="problem">Problem</Link>
                  </Disclosure.Button>
                  <Disclosure.Button className="block px-3 py-2 rounded-md text-md font-medium text-white hover:bg-red-300 hover:text-white">
                    <Link to="review">Review</Link>
                  </Disclosure.Button>
                  <Disclosure.Button className="block px-3 py-2 rounded-md text-md font-medium text-white hover:bg-red-300 hover:text-white">
                    <Link to="chat">Chat</Link>
                  </Disclosure.Button>
                </div>
                <div className="pt-4 pb-3 border-t border-red-200">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-md font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-md font-medium leading-none text-gray-200">
                        {user.email}
                      </div>
                    </div>
                    {/* Nortification Button */}
                    {/* <button
                      type="button"
                      className="ml-auto bg-red-300 flex-shrink-0 p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-300 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {/* {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.to}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))} */}
                    <Disclosure.Button className="block px-3 py-2 rounded-md text-md font-medium text-white hover:text-white hover:bg-red-300">
                      <Link to="profile">Your Profile</Link>
                    </Disclosure.Button>
                    <Disclosure.Button className="block px-3 py-2 rounded-md text-md font-medium text-white hover:text-white hover:bg-red-300">
                      <Link to="/">Sign Out</Link>
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header> */}
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}

            <div className="px-4 py-6 sm:px-0">
              <div className="rounded-lg">
                {/* Router Page and */}
                {/* <div className="bg-red-200 rounded mx-auto p-4 h-full">
                  <p className="text-black">Hello</p>
                </div> */}
                <Outlet />
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
