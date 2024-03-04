import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Layout from './Components/Layout'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products' element={<Products />} />
          <Route path='login' element={<Login />} />
          <Route path='cart' element={<Cart />} />
          <Route path="/products/:id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App