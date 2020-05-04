import { useState, useEffect } from 'react';
const API = require("./apis");

const useGetEmployees = (endpoint) => {
    const [employees, setEmployees] = useState([]);
    // console.log(API);
    useEffect(() => {
    fetch(API.crudEmployees + endpoint)
      .then((response) => response.json())
      .then((data) => setEmployees(data.data));
  }, []);

  return employees;
}

export default useGetEmployees;