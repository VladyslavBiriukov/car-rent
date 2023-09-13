import PropTypes from "prop-types";
import style from "./Card.module.scss";

export const Card = ({ data }) => {
  const {
    accessories,
    address,
    description,
    engineSize,
    fuelConsumption,
    functionalities,
    img,
    make,
    mileage,
    model,
    rentalCompany,
    rentalConditions,
    rentalPrice,
    type,
    year,
  } = data;

  const splitAddress = address.split(",");

  return (
    <div className={style.card}>
      <img className={style.img} src={img} alt="car" />
      <p>
        {make} {model}, {year}
        <span>{rentalPrice}</span>
      </p>
      <p>
        {splitAddress[2]}|{splitAddress[1]}|{rentalCompany}
      </p>
      <p>
        {type}|{model}|{mileage}|{functionalities[0]}
      </p>
      <button className={style.btn}>Learn more</button>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};