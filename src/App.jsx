import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './componentes/Boton/Boton'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'
import ItemCount from './componentes/ItemCount/ItemCount'
import NavBar from './componentes/NavBar/NavBar'

const App = () => {

 let cantidad = 30

 let colorFondo = {backgroundColor: "green"} 

 const celular = {
  marca: "Samsung",
  precio: 500.000
 }

  return (
    <>
      <NavBar/>
    </>
    
)
}

export default App
