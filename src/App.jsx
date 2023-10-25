import ItemListContainer from "./components/itemListContainer/itemListContainer";
import NavBar from "./components/navBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import NotFound from "./components/notFound/notFound";


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route path='/category/:nombreCategoria' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
