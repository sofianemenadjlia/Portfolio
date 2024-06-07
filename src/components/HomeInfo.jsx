/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Salut,
        <span className="font-semibold mx-1 sm:mx-2 text-white">Mehdi</span>
        👋
        <br />
        Développeur Full Stack
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          j'ai développé des compétences variées tout au long de mon parcours
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          En savoir plus
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Ai dirigé plusieurs projets vers le succès au fil des années. <br />{" "}
          Curieux de connaître l'impact?
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visitez mon portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          À la recherche d'un stagiaire pour accomplir un projet? <br /> Je suis
          à seulement quelques frappes de clavier
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Parlons
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
