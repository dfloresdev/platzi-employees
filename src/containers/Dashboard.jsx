import React from "react";
import "../assets/styles/components/dashboard/Dashboard.scss";
import ListEmployees from "../components/listEmployees/ListEmployees";

const Dashboard = () => (
  <div>
    <div>
      <p>section listado de categorias</p>
    </div>
    <div>
      <ListEmployees />
    </div>
  </div>
);

export default Dashboard;
