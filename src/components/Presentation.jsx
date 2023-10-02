import img1 from "../styles/img1.png"
import "../styles/header.css"

function Presentation () {
   return (
   <>
      <div>
         <h2>Présentation</h2>
         <div id="div_container1">
               <div id="div_img">      
                  <img id="img1" src={img1} alt="photo_florian_beau" />
               </div>
               <div id="div_about">
                  <h2>A propos de moi</h2>
                  <p>“ Reconvertis dans l'informatique depuis 2008, j'ai crée et géré 3 boutiques en ligne (Prestashop et Wordpress / Woocommerce). Ces expériences m'ont permises de pouvoir découvrir les différents métiers du web. “ </p>
               </div>
         </div>
    </div>
   </>
   )
}

export default Presentation