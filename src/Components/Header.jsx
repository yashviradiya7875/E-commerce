import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {

  const [isLogdin, setIsLogdin] = useState(false)

  const menu = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Products",
      path: "/Products"
    }
  ]



  return (
    <>
      <header className="text-slate-700 container z-10 mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center border-b-2">
        <Link to="/home" className="flex mr-20 ml-4 items-center whitespace-nowrap text-2xl font-black">
          Smart Cart
        </Link>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label className="absolute top-5 right-5 cursor-pointer lg:hidden" htmlFor="navbar-open">
          <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
        <div className=" sm:mt-5 lg:m-0 max-w-2xl mx-auto w-full">
          <form >
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  outline-none" placeholder="Search..." />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
          </form>
        </div>
        <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
          <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
            {
              menu.map(res => (
                <li key={res.name} className="lg:mr-12"><NavLink className={({ isActive }) => `${isActive ? "text-blue-600" : ""} rounded  transition hover:text-blue-600`} to={res.path}>{res.name}</NavLink></li>
              ))
            }
          </ul>
          <hr className="mt-4 w-full lg:hidden" />
          <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">

            {

              !isLogdin ? <NavLink
                to="/login"
                title=""
                className="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50">
                Log in
              </NavLink> :
                <NavLink
                  to="/"
                  title=""
                  className="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50">
                  Log out
                </NavLink>
            }
            <NavLink
              to="/cart"
              title=""
              className="whitespace-nowrap rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600">Cart</NavLink>
          </div>
        </nav>
      </header >
    </>
  )
}

export default Header