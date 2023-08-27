import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import InfoRestau from "./assets/components/InfosRestau";
import Meals from "./assets/components/Meals";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [shop, setShop] = useState([]);

  return (
    <>
      <Header />
      <InfoRestau
        data={data}
        setData={setData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />

      <Meals
        data={data}
        setData={setData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}

export default App;
