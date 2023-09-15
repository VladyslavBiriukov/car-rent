import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import styles from "./Favorite.module.scss";
import { CarList } from "../CarList/CarList";

export const Favorite = () => {
  const [cars, setcars] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(false);
    const local = JSON.parse(localStorage.getItem("fav"));
    if (local && local !== []) {
      setcars(local);
    }
  }, [favorite]);

  const handleChangeFavorite = () => {
    setFavorite(true);
  };

  return (
    <div className={styles.conteiner}>
      {cars && (
        <CarList changeFav={handleChangeFavorite} fav={true} cars={cars} />
      )}
    </div>
  );
};