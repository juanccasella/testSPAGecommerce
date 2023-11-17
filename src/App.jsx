// import ItemListContainer from "./components/itemListContainer/itemListContainer";
// import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer"
// import { Routes, BrowserRouter, Route } from 'react-router-dom'
// import NotFound from "./components/notFound/notFound";
// import Navbar from "./components/navBar/navBar";


// function App() {

//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route exact path='/' element={<ItemListContainer />}/>
//         <Route path='/category/:id' element={<ItemListContainer />}/>
//         <Route path='/item/:id' element={<ItemDetailContainer />}/>
//         <Route path='*' element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }



// export default App;
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import { CartProvider } from './components/cartContext/cartContext'
// import Footer from './components/Footer/Footer'
import Home from './components/home/home'
import Cart from './components/cart/cart'
import Checkout from './components/checkout/chekout'

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

      {/* <Footer/> */}
      </BrowserRouter>
    </CartProvider>
  )
}

export default App