import "../styles/Header.css"
import React from "react"
import { Link } from 'react-router-dom';

function Header () {
  return (
    <>
    <div id="div_header">
      <nav>
            <a href="#Presentation">
              <span className="blue">0.</span>
              <span  className="white"> Présentation</span>
            </a>
            <a href="#Mes_realisations">
              <span className="blue">1.</span>
              <span className="white"> Mes réalisations</span>
            </a>
            <a href="#Skills">
              <span className="blue">2.</span>
              <span  className="white"> Skills</span>
            </a>
            <a href="#Devis">
              <span className="blue">3.</span>
              <span  className="white"> Devis</span>
            </a>
          <a href="#Me_contacter">
              <span className="blue">4.</span>
              <span  className="white"> Me contacter</span>
            </a>
      </nav>
    </div>
    </>
  )
}

export default Header