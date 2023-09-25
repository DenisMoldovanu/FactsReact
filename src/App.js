import React, { useState } from "react";
import "./App.css";
import "./global.scss";
import CatFacts from "./components/CatFacts";
import FavoriteFacts from "./components/FavoriteFacts";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (fact) => {
    setFavorites([...favorites, fact]);
  };

  return (
    <div className="App">
      <CatFacts addToFavorites={addToFavorites} />
      <FavoriteFacts favorites={favorites} />
    </div>
  );
}

export default App;
