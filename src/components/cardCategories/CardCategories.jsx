import React from "react";
import "../../assets/styles/components/cardCategories/CardCategories.scss";
import Icons from "../../assets/styles/components/icons/svgIcons";
import getCategories from "../../hooks/useGetCategories";

const endpoint = "employees/categories";

const CardCategories = () => {
  const categories = getCategories(endpoint);

  const listCategories = categories.map((categorie) => (
    <p key={categorie} className="category">
      <span role="img" aria-label={categorie}>
        {categorie}
      </span>
    </p>
  ));

  return (
    <div className="container-card-categories">
      <div className="container-card-categories--header">
        <Icons name="success" fill="#cd7cf2" /> <p>Todos los empleados</p>
      </div>
      <p className="container-card-categories--description">Proyecto</p>
      <p className="category active">
        <span role="img" aria-label="Deportes">
          Deportes 🐼
        </span>
      </p>
      {listCategories}
    </div>
  );
};

export default CardCategories;
