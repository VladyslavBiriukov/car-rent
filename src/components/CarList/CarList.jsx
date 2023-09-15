import PropTypes from "prop-types";
import { Card } from "../Card/Card";
import styles from "./CarList.module.scss";

export const CarList = ({ cars, changeFav, fav }) => {
  return (
    <ul className={styles.cards}>
      {cars &&
        cars.map((car) => (
          <Card key={car.id} fav={fav} change={changeFav} data={car} />
        ))}
    </ul>
  );
};

CarList.propTypes = {
  cars: PropTypes.array,
  changeFav: PropTypes.func,
};