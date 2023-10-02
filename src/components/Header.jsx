import img1 from "../styles/img1.png"
import "../styles/header.css"

function Header () {
  return (
    <>
      <h1>Bienvenue sur mon portefolio</h1>
      <div id="div_container1">
        <div id="div_img">      
          <img id="img1" src={img1} alt="photo_florian_beau" />
        </div>
        <div id="div_about">
          <h2>A propos de moi</h2>
          <p>“ J'ai découvert l'informatique en 1992, je codais des minis jeux vidéos sous le language basic pour le plaisir. En 2008 j'ai crée ma première boutique en ligne avec le CMS OsCommerce (vente de dvd). En 2014, j'ai crée un e-commerce sous Prestashop (cadeaux et gadgets) et enfin j'ai crée un e-commerce et un blog en 2017 sous Wordpress / Woocommerce. Ces expériences m'ont permises de pouvoir découvrir les différents métiers du web et le développement web à commencé à m'intéresser. “ </p>
        </div>
      </div>
    </>
  )
}

export default Header