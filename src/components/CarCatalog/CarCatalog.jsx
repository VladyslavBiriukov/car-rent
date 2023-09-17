import { useEffect, useState } from "react";
import { getCar } from "../../api/api";
import styles from "./CarCatalog.module.scss";
import { CarList } from "../CarList/CarList";
import { Form } from "../SearchForm/Form";

export const CarCatalog = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [searchCar, setSearchCar] = useState();

  useEffect(() => {
    (async () => {
      const allCar = await getCar(page);
      setCars((prev) => [...prev, ...allCar]);
    })();
  }, [page, searchCar]);

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  const handleGetSearchCar = (data) => {
    setSearchCar(data);
  };

  return (
    <div className={styles.conteiner}>
      <Form getSearchCar={handleGetSearchCar} />
      <CarList cars={searchCar ? searchCar : cars} />
      {searchCar && searchCar.length <= 12 ? (
        ""
      ) : (
        <button onClick={handleLoadMoreClick} className={styles.btn}>
          Load more
        </button>
      )}
    </div>
  );
};