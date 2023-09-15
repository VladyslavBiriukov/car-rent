import PropTypes from "prop-types";
import styles from "./Card.module.scss";
import { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import { Heart } from "../SVG/Heart";

export const Card = ({ data, change, fav }) => {
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("fav"));
    if (local) {
      local.map((item) => {
        if (item.id === data.id) setFavorite(true);
      });
    }
  }, [data.id]);

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
  const [favorite, setFavorite] = useState(false);

  const defaultColor = {
    fill: "none",
    stroke: "white",
  };

  const favColor = {
    fill: "#3470FF",
    stroke: "#3470FF",
  };

  const splitAddress = address.split(",");

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleHeartClick = () => {
    setFavorite(!favorite);
    if (!favorite) {
      const local = JSON.parse(localStorage.getItem("fav"));
      if (local) {
        local.push(data);
        localStorage.setItem("fav", JSON.stringify(local));
        return;
      }
      localStorage.setItem("fav", JSON.stringify([data]));
    } else {
      const local = JSON.parse(localStorage.getItem("fav"));
      const remove = local.filter((item) => item.id !== data.id);
      if (fav !== undefined) {
        change();
      }
      localStorage.setItem("fav", JSON.stringify(remove));
    }
  };

  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="car" />
      <div onClick={handleHeartClick} className={styles.heart}>
        <Heart
          fill={favorite ? favColor.fill : defaultColor.fill}
          stroke={favorite ? favColor.stroke : defaultColor.stroke}
        />
      </div>
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
  change: PropTypes.func,
  fav: PropTypes.bool,
};