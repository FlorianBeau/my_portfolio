import React from "react"
import { Link } from 'react-router-dom';
import Header from "./components/Header"
import Presentation from "./components/Presentation"
import Mes_realisations from "./components/Mes_realisations"
import Skills from "./components/Skills"
import Devis from "./components/Devis"
import Me_contacter from "./components/Me_contacter"
import AppCss from "./App.css"

function App() {

  return (
    <>
      <Header />
      <Presentation />
      <Mes_realisations />
      <Skills />
      <Devis />
      <Me_contacter />
    </>
  )
}

export default App