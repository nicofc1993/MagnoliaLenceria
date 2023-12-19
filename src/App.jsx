import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListConteiner/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"}/>
    </>
  )
}
export default App
