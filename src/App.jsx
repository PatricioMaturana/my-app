import { useState } from 'react'
//import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
        <Route path={"/category/*"} element={<Error404 />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App
