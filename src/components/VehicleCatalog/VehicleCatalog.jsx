import React, { useEffect, useState } from "react";
import { getCar } from "../../api/api.js";
import { Card } from "../Card/Card";
import styles from "./VehicleCatalog.module.scss";

export const VehicleCatalog = () => {
  const [cars, setCars] = useState();

  console.log("cars", cars);

  useEffect(() => {
    (async () => {
      const allCar = await getCar();
      setCars(allCar);
    })();
  }, []);

  return (
    <div className={styles.conteiner}>
      <ul className={styles.cards}>
        {cars && cars.map((car) => <Card key={car.id} data={car} />)}
      </ul>
    </div>
  );
};
