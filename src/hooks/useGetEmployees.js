import { useState, useEffect } from "react";
const API = require("../APIS/apis");

const useGetEmployees = (endpoint = "") => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch(API.crudEmployees + endpoint)
      .then((response) => response.json())
      .then((data) => setEmployees(data.data));
  }, []);

  return employees;
};

export default useGetEmployees;
