import { useEffect, useState } from "react";
import { getCar } from "../../api/api";
import { Card } from "../Card/Card";
import styles from "./CarCatalog.module.scss";
import { CarList } from "../CarList/CarList";
import { Form } from "../SearchForm/Form";

export const CarCatalog = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreCars, setHasMoreCars] = useState(true);

  useEffect(() => {
  (async () => {
    const allCar = await getCar(page);
    if (allCar.length === 0) {
      setHasMoreCars(false); // Больше нет машин для загрузки
    }
    setCars((prev) => [...prev, ...allCar]);
  })();
}, [page]);

  const handleLoadMoreClick = () => {
  if (hasMoreCars) {
    setPage(page + 1);
  }
};

  return (
    <div className={styles.conteiner}>
      <Form />
      <CarList cars={cars} />
      {hasMoreCars && (
  <button onClick={handleLoadMoreClick} className={styles.btn}>
    Load more
  </button>
)}
    </div>
  );
};