// import PropTypes from "prop-types";
// import { createPortal } from "react-dom";
// import styles from "./Modal.module.scss";
import closeSVG from "../../images/svg/close.svg";

import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
// import closeSVG from "/images/x.svg";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Modal = ({ data, close }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [close]);

  const {
    id,
    accessories,
    address,
    description,
    engineSize,
    fuelConsumption,
    img,
    make,
    mileage,
    model,
    rentalConditions,
    rentalPrice,
    type,
    year,
  } = data;

  const splitAddress = address.split(",");
  const splitRentalConditions = rentalConditions.split("\n");
  const minimumAge = splitRentalConditions[0].split(":");

  const handleClose = () => {
    close();
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return (
    <>
      {createPortal(
        <div onClick={handleCloseModal} className={styles.backdrop}>
          <div className={styles.modal}>
            <div className={styles.modal_conteiner}>
              <img
                onClick={handleClose}
                width={461}
                height={248}
                className={styles.close}
                src={closeSVG}
                alt="close"
              />
              <img className={styles.img} src={img} alt="car" />
              <div className={styles.carName}>
                <p>
                  {make} <span className={styles.model}>{model}</span>, {year}
                </p>
              </div>

              <div className={styles.description}>
                <p className={styles.address}>
                  {splitAddress[1]} | {splitAddress[2]} | {id} | Year:{year} |
                  Type: {type}
                </p>
                <p className={styles.address}>
                  Fuel Consumption: {fuelConsumption} | Engine Size:{" "}
                  {engineSize}
                </p>
              </div>
              <p className={styles.car_description}>{description}</p>
              <div>
                <p className={styles.accessories}>
                  Accessories and functionalities:
                </p>
                <p className={styles.accessories_item}>
                  {accessories[0]} | {accessories[1]} | {accessories[2]}
                </p>
              </div>
              <h3 className={styles.rental_conditions}>Rental Conditions:</h3>
              <div className={styles.rental}>
                <p className={styles.conditions}>
                  {minimumAge[0]}:
                  <span className={styles.age}>{minimumAge[1]}</span>
                </p>
                <p className={styles.conditions}>{splitRentalConditions[1]}</p>
                <p className={styles.conditions}>{splitRentalConditions[2]}</p>
                <p className={styles.conditions}>
                  Mileage:{" "}
                  <span className={styles.age}>
                    {Intl.NumberFormat("en").format(mileage)}
                  </span>
                </p>
                <p className={styles.conditions}>
                  Price: <span className={styles.age}>{rentalPrice}</span>
                </p>
              </div>
              <NavLink to="tel:+380730000000" className={styles.btn}>
                Rental car
              </NavLink>
            </div>
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

Modal.propTypes = {
  data: PropTypes.object,
  close: PropTypes.func,
};