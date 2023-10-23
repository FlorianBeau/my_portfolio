import "../styles/Header.css"
import React from "react"
import { Link } from 'react-router-dom';

function Header () {
  return (
    <>
    <div id="div_header">
      <nav>
            <a href="/#about">
              <span className="blue">0.</span>
              <span  className="white"> Présentation</span>
            </a>
            <a href="/#mes_realisations">
              <span className="blue">
                1.
              </span>
              <span className="white"> Mes réalisations</span>
            </a>
            <a href="/#tarifs">
              <span className="blue">
                2.
              </span>
              <span  className="white"> Tarifs</span>
            </a>
          <a href="/#me_contacter">
              <span className="blue">
                3.
              </span>
              <span  className="white"> Me contacter</span>
            </a>
      </nav>
    </div>
    </>
  )
}

export default Header