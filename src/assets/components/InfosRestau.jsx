import axios from "axios";
import React, { useState, useEffect } from "react";

const InfoRestau = ({ data, setData, isLoading, setIsLoading }) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        // "https://site--deliveroo-backend--r2txk865xjj8.code.run/"
        "https://site--deliveroo-vinted-back--r2txk865xjj8.code.run/painquotidien"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="hero">
      <div className="container inner-hero">
        <div className="left-part">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <img src={data.restaurant.picture} alt="" />
      </div>
    </div>
  );
};

export default InfoRestau;
