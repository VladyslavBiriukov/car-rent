import PropTypes from "prop-types";
import styles from "./Card.module.scss";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const Card = ({ data }) => {
  const {
    address,
    functionalities,
    img,
    make,
    mileage,
    model,
    rentalCompany,
    rentalPrice,
    type,
    year,
  } = data;

  const [openModal, setOpenModal] = useState(false);

  const splitAddress = address.split(",");

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="car" />
      <div className={styles.carName}>
        <p>
          {make} <span className={styles.model}>{model}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </div>

      <div className={styles.description}>
        <p className={styles.address}>
          {splitAddress[1]} | {splitAddress[2]} | {rentalCompany}
        </p>
        <p className={styles.address}>
          {type} | {model} | {mileage} | {functionalities[0]}
        </p>
      </div>
      <button onClick={handleOpenModal} className={styles.btn}>
        Learn more
      </button>
      {openModal && <Modal data={data} close={handleModalClose} />}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};