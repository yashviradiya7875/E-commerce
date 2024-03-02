import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Layout from './Components/Layout'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' elmemt={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products' element={<Products />} />
       </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App