import img1 from "../styles/img1.png"
import "../styles/Header.css"
import "../styles/Presentation.css"

function Presentation () {
   return (
   <>
      <div id="Presentation">
         <div id="div_container1">
               <div id="div_img" className="div_top_header">    
                  <img id="img1" src={img1} alt="photo_florian_beau" className="img_rotate"/>
                  <div className="div_top">
                     <h1 >Florian Beau</h1>
                     <h2 className="white">Développeur intégrateur web et front-end</h2>
                  </div>
               </div>
               
               <div className="div_about">
                  <h2>Présentation</h2>
                  <p>“ Reconvertis dans l'informatique depuis 2008, j'ai crée et géré 3 boutiques en ligne (Prestashop et Wordpress / Woocommerce). Ces expériences m'ont permises de pouvoir découvrir les différents métiers du web. Depuis j'ai découvert une passion pour la création et le code. “ </p>
                     <div className="flex">
                        <a className="button white" href="https://github.com/FlorianBeau">GitHub</a>
                        <a className="button white" href="https://www.linkedin.com/in/florian-beau-15604059">Linkedin</a>                     
                     <a href="mailto:contact@florianbeau.com" className="button_mail white">Contactez-moi</a>
                     </div>
               </div>
         </div>
      </div>
   </>
   )
}

export default Presentation