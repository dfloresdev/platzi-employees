import React from "react";
import "../assets/styles/components/dashboard/Dashboard.scss";
import ListEmployees from "../components/listEmployees/ListEmployees";
import SubHeader from "../components/subHeader/SubHeader";
import CardCategories from "../components/cardCategories/CardCategories";

const Dashboard = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container-dashboard">
      <div className="sub-header">
        <SubHeader />
      </div>
      <div className="">
        <CardCategories />
      </div>
      <div className="">
        <ListEmployees />
      </div>
    </div>
  );
};

export default Dashboard;
