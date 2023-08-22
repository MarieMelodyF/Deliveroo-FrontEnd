import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import InfoRestau from "./assets/components/InfosRestau";
import Meals from "./assets/components/Meals";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // console.log(data.categories);

  return (
    <>
      <Header />
      <InfoRestau
        data={data}
        setData={setData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      {/* // data={data}
      // setData={setData}
      // isLoading={isLoading}
      // setIsLoading={setIsLoading} */}

      <Meals
        data={data}
        setData={setData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  );
}

export default App;
