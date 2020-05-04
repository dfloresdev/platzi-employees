import React from "react";
import "../assets/styles/components/dashboard/Dashboard.scss";
import ListEmployees from "../components/listEmployees/ListEmployees";
import SubHeader from "../components/subHeader/SubHeader";

const Dashboard = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="sub-header">
        <SubHeader />
      </div>
      <div className="">vertical</div>
      <div className="">
        <ListEmployees />
      </div>
    </div>
  );
};

export default Dashboard;
