import { useState } from "react";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import NavBar from "./components/navBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { Routes, BrowserRouter, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route path='/category/:id' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
