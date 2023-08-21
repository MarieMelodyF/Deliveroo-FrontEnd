import axios from "axios";
import React, { useState, useEffect } from "react";

const Meals = ({ data, setData, isLoading, setIsLoading }) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--deliveroo-backend--r2txk865xjj8.code.run/"
      );
      console.log(response.data.categories);
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
        {data.categories.map((categories) => {
          console.log(categories.name);
          console.log(categories.name.meals);
          return (
            <div>
              <h2>{categories.name}</h2>{" "}
              {data.categories.meals.map((meals, index) => {
                <div></div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meals;
