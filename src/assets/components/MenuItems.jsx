import axios from "axios";
import React, { useState, useEffect } from "react";

const menuItems = ({ data, setData, isLoading, setIsLoading }) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--deliveroo-backend--r2txk865xjj8.code.run/"
      );
      // console.log(response.data.categories);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="infoMenu">
      {data.categories.map((categories, index) => {
        // console.log("cat.meals => ", data.categories.meals);
        console.log("meals.length => ", categories.meals.length);
        return (
          <div className="menus">
            {categories.meals.length > 0 &&
              categories.meals.map((meals, index) => {
                // console.log("meals => ", meals);
                return (
                  // <div className="description">
                  <div className=" menu-items ">
                    <div>
                      <h4>{meals.title} meals.title</h4>
                      <p>{meals.description} meals.descritpion</p>
                      <p>{meals.price} € meals.price</p>
                    </div>
                    <div className="img-description">
                      {/* {meals.picture && <img src={meals.picture} alt="" />} */}
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};
export default menuItems;
