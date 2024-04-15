import { useState } from 'react'
//import './App.css'
import Footer from './components/Footer'
import Section from './components/Section'
import Cargaproductos from './components/Cargaproductos'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ItemListContainer titulo={"Este producto no existe"} texto={"Favor intente buscar otro"} />
      <Section />
      <Cargaproductos />
      <Footer />
    </> 
  )
}

export default App
