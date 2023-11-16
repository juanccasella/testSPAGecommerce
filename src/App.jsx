import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import NotFound from "./components/notFound/notFound";
import Navbar from "./components/navBar/navBar";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route path='/category/:id' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
