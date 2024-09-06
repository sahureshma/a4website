import React from "react";
import "./Aboutcard.css";
import Img1 from '../../../assest/vision.jpeg';
import Img2 from '../../../assest/mission.jpeg';
import Img3 from '../../../assest/goal.jpeg';

export default function Aboutcard() {
  return (
    <section id="aboutCard" className="aboutCard_section">
      
      <div className="aboutcontainerCard__container">
        <article className="aboutCard__items">
          <div className="aboutCard__item-image">
          <img src={Img1} alt="IMG1" />
          </div>
          <h3>Vision</h3>
          <p>
          To leverage technology to make quality learning accessible to every student from KG to PG.
          </p>
          <div className="aboutCard__item-cta">
            
          </div>
        </article>
        <article className="aboutCard__items">
          <div className="aboutCard__item-image">
          <img src={Img2} alt="IMG2" />
          </div>
          <h3>Mission</h3>
          <p>
          To empower students by making quality education affordable and readily available
          </p>
          <div className="aboutCard__item-cta">
            
          </div>
        </article>
        <article className="aboutCard__items">
          <div className="aboutCard__item-image">
          <img src={Img3} alt="IMG3" />
          </div>
          <h3>Goal</h3>
          <p>
          To deliver best business solutions by integrating people, processes and technologies to benefit all the stakeholders
          </p>
          <div className="aboutCard__item-cta">
            
          </div>
        </article>      
      </div>
    </section>
  );
}