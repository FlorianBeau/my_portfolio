import React from "react";
import reservia from "../assets/screen_shot_P2_OC_reservia.png"
import ohmyfood from "../assets/screen_shot_P3_OC_ohmyfood.png"
import kasa from "../assets/screen_shot_P7_OC_kasa.png"
import Realisations from "../styles/Mes_realisations.css"

export function Mes_realisations() {
  return (
    <div>
      <h2 id="Mes_realisations">Mes réalisations</h2>
      <div className="div_container_img">
      <div className="div_project_img div_realisation" style={{ width: '400px', height: '400px', textAlign: 'center' }}>
        <a href="https://florianbeau.com/reservia/">
          <img src={reservia} alt="p_2_OC_reservia" style={{ maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
        </a>
      </div>
      <div className="div_project_img div_realisation" style={{ width: '400px', height: '400px', textAlign: 'center' }}>
        <a href="https://florianbeau.com/ohmyfood/">
          <img className="div_ohmyfood" src={ohmyfood} alt="p_3_OC_ohmyfood" style={{ maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
        </a>
      </div>
      <div className="div_project_img div_realisation" style={{ width: '400px', height: '400px', textAlign: 'center' }}>
        <a href="https://florian-beau-7-05-12-2022-h76hfkpec-florianbeaus-projects.vercel.app/">
          <img src={kasa} alt="p_7_OC_kasa" style={{ maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
        </a>
      </div>
      </div>
    </div>
  );
}

export default Mes_realisations