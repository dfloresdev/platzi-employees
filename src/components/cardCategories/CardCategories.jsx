import React from "react";
import "../../assets/styles/components/cardCategories/CardCategories.scss";
import Icons from "../../assets/styles/components/icons/svgIcons";

const CardCategories = () => (
  <div className="container-card-categories">
    <div className="container-card-categories--header">
      <Icons name="success" fill="#cd7cf2" /> <p>Todos los empleados</p>
    </div>
    <p className="container-card-categories--description">Proyecto</p>
    <p className="category active">Deportes 🧸</p>
    <p className="category">Automóviles 🏎</p>
    <p className="category">Construcción 🛠</p>
    <p className="category">Programación 💻</p>
    <p className="category">Animales 🐶</p>
  </div>
);

export default CardCategories;
