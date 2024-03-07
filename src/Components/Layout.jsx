import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CategoryNav from './CategoryNav'

function Layout() {
  return (
    <>
      <Header />
      <CategoryNav/>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout