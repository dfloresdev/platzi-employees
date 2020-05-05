import { useState, useEffect } from "react";
const API = require("./apis");

const useGetCategories = (endpoint) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(API.crudEmployees + endpoint)
      .then((response) => response.json())
      .then((data) => setCategories(data.data));
  }, []);

  return categories;
};

export default useGetCategories;
