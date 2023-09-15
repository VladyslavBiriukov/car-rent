import { useEffect, useState } from "react";
import { getCar } from "../../api/api";
import { Card } from "../Card/Card";
import styles from "./CarCatalog.module.scss";
import { CarList } from "../CarList/CarList";
import { Form } from "../SearchForm/Form";

export const CarCatalog = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const allCar = await getCar(page);
      setCars((prev) => [...prev, ...allCar]);
    })();
  }, [page]);

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.conteiner}>
      <Form />
      <CarList cars={cars} />
      <button onClick={handleLoadMoreClick} className={styles.btn}>
        Load more
      </button>
    </div>
  );
};