import { useState } from "react";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import NavBar from "./components/navBar/NavBar";

function App() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <>
      <NavBar />
      {mostrar && (
        <ItemListContainer greeting="Bienvenido a SPAG tienda online" />
      )}
    </>
  );
}

export default App;
