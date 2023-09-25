import React from "react";

const FavoriteFacts = ({ favorites }) => {
  return (
    <div className="favourite-facts">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favourites selected</p>
      ) : (
        <ul>
          {favorites.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteFacts;
