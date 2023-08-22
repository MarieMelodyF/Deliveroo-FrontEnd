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
    <main>
      <div className="container inner-main">
        <section className="col-left">
          {data.categories.map((category) => {
            if (category.meals.length !== 0) {
              return (
                <section key={category.name}>
                  <h2>{category.name}</h2>
                  <div className="meals-container">
                    {category.meals.map((meal) => {
                      return (
                        <article key={meal.id}>
                          <div>
                            <h3>{meal.title}</h3>
                            <p className="meal-description">
                              {meal.description}
                            </p>
                            <span className="meal-price">{meal.price} €</span>
                            {meal.popular === true && (
                              <span className="populaire">Populaire</span>
                            )}
                          </div>

                          {meal.picture && (
                            <img src={meal.picture} alt={meal.title} />
                          )}
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            } else {
              return null;
            }
          })}
        </section>
        <section className="col-right"></section>
      </div>
    </main>
  );
};

export default Meals;
