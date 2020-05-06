// import { useState, useEffect } from "react";
import API from "./apis";

const useDeleteEmployee = (endpoint, uid) => {
  //   const [employee, setEmployee] = useState([]);

  //   useEffect(() => {
  fetch(API.crudEmployees + endpoint + "/" + uid, { method: "DELETE" })
    .then((response) => response.json())
    .then((result) => console.log(result));
  //   }, []);
};

export default useDeleteEmployee;
