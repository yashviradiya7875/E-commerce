import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
        <div>
          <Link to="/home">
            Logo
          </Link>

          <div>
            <NavLink
              to="/Home">
              home
            </NavLink>
            <NavLink
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              to="/products"
            >
              Products
            </NavLink>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header