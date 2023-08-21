import axios from "axios";
import React, { useState, useEffect } from "react";

const InfoRestau = ({ data, setData, isLoading, setIsLoading }) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--deliveroo-backend--r2txk865xjj8.code.run/"
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
    <div className="banniere-restau">
      <div className="infoRestau">
        <h2>{data.restaurant.name}</h2>
        <p>{data.restaurant.description}</p>
      </div>
      <div>
        <img className="Img-Restau" src={data.restaurant.picture} alt="" />
      </div>
    </div>
  );
};

export default InfoRestau;
