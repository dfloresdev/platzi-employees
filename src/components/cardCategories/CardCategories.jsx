import React from "react";
import "./CardCategories.scss";
import Icons from "../../utils/icons/svgIcons";
import { connect } from "react-redux";

const CardCategories = ({ categories }) => {
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

const mapStateToProps = (state) => ({
  categories: state.categories.data,
});

export default connect(mapStateToProps)(CardCategories);
