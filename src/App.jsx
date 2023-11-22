
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import { CartProvider } from './components/cartContext/cartContext'
import Home from './components/home/home'
import Cart from './components/cart/cart'
import Checkout from './components/checkout/chekout'
// import { NOTIMP } from 'dns'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route exact path='/products/:categoryId' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/checkout' element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App