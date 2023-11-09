import axios from "axios";
import React, { useState, useEffect } from "react";

const Meals = ({ data, setData, isLoading, setIsLoading, cart, setCart }) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--deliveroo-vinted-back--r2txk865xjj8.code.run/"

        // "https://site--deliveroo-backend--r2txk865xjj8.code.run/"
      );
      // console.log("res.data.cat=>", response.data.categories);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleAddToCart = (meal) => {
    const cartCopy = [...cart];
    // Si meal est déjà dans le tableau, je ne le rajoute pas une nouvelle fois, mais je dois stocker quelque part le fait qu'il est en 2 enxemplaires
    // Si, dans le tableau, je trouve un objet dont la clef id est égale à al clef id du plat sur lequel j'ai cliqué alors je dois stocker quelque part le fait qu'il est en 2 enxemplaires
    // Si mealPresent existe alors je dois stocker quelque part le fait qu'il est en 2 enxemplaires
    const mealPresent = cartCopy.find((element) => element.id === meal.id);

    // Si find trouve une correspondance, elle renvoie l'élément trouvé, sinon elle renvoie undefined

    if (mealPresent) {
      // console.log();
      mealPresent.quantity++;
    } else {
      // Sinon, je le rajoute au tableau

      const obj = { ...meal, quantity: 1 };
      // setCart([...cart, { ...meal, quantity: 1 }]);
      cartCopy.push(obj);
    }
    setCart(cartCopy);
  };

  const handleRemoveFromCart = (meal) => {
    const cartCopy = [...cart];
    // Chercher le plat dans cartCopy (find)
    const mealPresent = cartCopy.find((element) => element.id === meal.id);

    if (mealPresent.quantity > 1) {
      // Décrémenter sa clef quantity (--)
      mealPresent.quantity--;
    } else {
      // Trouver l'index de mealPresent
      const index = cartCopy.indexOf(mealPresent);
      console.log(index);
      // Si la clef quantity vaut 1 lors du click, je supprime le plat du panier (splice)
      cartCopy.splice(index, 1);
    }

    setCart(cartCopy);
  };

  let total = 0;
  const livraison = 2.5;

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
                      // console.log(meal);
                      return (
                        <article
                          key={meal.id}
                          onClick={() => {
                            handleAddToCart(meal);
                          }}
                        >
                          <div>
                            <h3>{meal.title}</h3>
                            <p className="meal-description">
                              {meal.description}
                            </p>
                            <span className="meal-price">{meal.price} €</span>
                            {meal.popular === true && <span>Populaire</span>}
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

        <section className="col-right">
          {cart.length === 0 ? (
            <p>Votre panier est vide</p>
          ) : (
            <div>
              {cart.map((meal) => {
                total += meal.price * meal.quantity;

                return (
                  <div key={meal.id}>
                    <button
                      className="button-Minus-Plus"
                      onClick={() => {
                        handleRemoveFromCart(meal);
                      }}
                    >
                      -
                    </button>
                    <span>{meal.quantity}</span>
                    <button
                      className="button-Minus-Plus"
                      onClick={() => {
                        handleAddToCart(meal);
                      }}
                    >
                      +
                    </button>
                    <span className="cart-title">{meal.title}</span>
                    <span className="price">
                      {(Number(meal.price) * meal.quantity).toFixed(2)} €
                    </span>
                  </div>
                );
              })}
              <p>
                Frais de livraison : {livraison.toFixed(2).replace(".", ",")} €
              </p>
              <p>Total du prix : {total.toFixed(2)}</p>
              <button className="cart-Validate"> Valider mon panier</button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Meals;
