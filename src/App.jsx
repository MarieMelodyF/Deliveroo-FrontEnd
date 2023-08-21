import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./assets/components/Header";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  <Header
    data={data}
    setData={setData}
    isLoading={isLoading}
    setIsLoading={setIsLoading}
  />;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://site--deliveroo-backend--r2txk865xjj8.code.run/"
  //     );
  //     // console.log(response.data);
  //     setData(response.data);
  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // return isLoading ? (
  //   <span>En cours de chargement... </span>
  // ) : (
  //   <h2>{data.restaurant.name}</h2>
  // );
}

export default App;
