import { useState } from 'react'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import NavBar from './components/navBar/NavBar'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a SPAG tienda online"/>
    </>
  )
}

export default App
