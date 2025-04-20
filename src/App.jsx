import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemCount from './componentes/ItemCount/ItemCount'
import './App.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './componentes/Contacto/Contacto'
import Inicio from './componentes/Inicio/Inicio'

const App = () => {


  return (
    <div className="appContainer">

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='/productos' element={<ItemListContainer />} />
        <Route path='/contactos' element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
    </div>
    
    
)
}

export default App
