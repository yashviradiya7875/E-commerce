import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Home from "./Pages/Home"
import Login from './Pages/Login'
import Product from './Pages/Product'
import Products from './Pages/Products'
import SingUp from './Pages/SingUp'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='login' element={<Login />} />
          <Route path='cart' element={<Cart />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path='/singup' element={<SingUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App