import PropTypes from "prop-types";
import Select from "react-select";
import styles from "./Form.module.scss";
import { useEffect, useState } from "react";
import { getAllCar } from "../../api/api";
import { priceOption, selectOption } from "./select_option";
import { filterCar } from "./filter";

const initialValue = {
  make: "", // Изменяем "brand" на "make"
  rentalPrice: "", // Изменяем "price" на "rentalPrice"
  minMileage: "",
  maxMileage: "",
};

export const Form = ({ getSearchCar }) => {
  const [make, setMake] = useState(); // Изменяем "brand" на "make"
  const [allCar, setAllCar] = useState();
  let select = [];
  const [searchParams, setSearchParams] = useState(initialValue);

  useEffect(() => {
    (async () => {
      const all = await getAllCar();
      setAllCar(all);
      const allMakes = new Set();
      all.map((item) => allMakes.add(item.make)); // Изменяем "brand" на "make"
      setMake(Array.from(allMakes)); // Изменяем "brand" на "make"
    })();
  }, []);

  if (make) {
    select = selectOption(make); // Изменяем "brand" на "make"
  }

  const price = priceOption(300);

  const search = (e) => {
    e.preventDefault();
    getSearchCar(filterCar(searchParams, allCar));
  };

  return (
    <div>
      <form onSubmit={search} className={styles.form_conteiner}>
        <div>
          <label className={styles.label} htmlFor="brand_car">
            Car make {/* Изменяем "Car brand" на "Car make" */}
            <Select
              placeholder="Enter the text"
              unstyled
              options={select}
              classNamePrefix="custom"
              onChange={(e) =>
                setSearchParams((prev) => ({
                  ...prev,
                  make: e.value,
                }))
              }
              tabSelectsValue={searchParams.make}
            />
          </label>
        </div>
        <div>
          <label className={styles.label} htmlFor="brand_car">
            Price/ 1 hour
            <Select
              placeholder="$"
              unstyled
              options={price}
              classNamePrefix="custom_price"
              onChange={(search) =>
                setSearchParams((prev) => ({
                  ...prev,
                  rentalPrice: search.value, // Изменяем "price" на "rentalPrice"
                }))
              }
              tabSelectsValue={searchParams.rentalPrice} // Изменяем "price" на "rentalPrice"
              getOptionValue={(options) => options.label + "$"}
            />
            <span className={styles.price_span}>To</span>
          </label>
        </div>
        <div>
          <label className={styles.label}>
            Car mileage / km {/* Изменяем "Сar mileage / km" на "Car mileage / km" */}
            <div className={styles.input_form}>
              <div className={styles.mileage_conteiner}>
                <div className={styles.mileage_conteiner2}>
                  <div className={styles.mileage_single}>
                    <span>From</span>
                    <input
                      className={styles.mileage_input}
                      name="minMileage"
                      type="number"
                      onChange={(e) =>
                        setSearchParams((prev) => ({
                          ...prev,
                          minMileage: e.target.value,
                        }))
                      }
                      value={searchParams.minMileage}
                    />
                  </div>
                </div>
              </div>
              <div
                className={
                  styles.mileage_conteiner +
                  " " +
                  styles.mileage_conteiner_right
                }
              >
                <div className={styles.mileage_conteiner2}>
                  <div className={styles.mileage_single}>
                    <span>To</span>
                    <input
                      className={styles.mileage_input}
                      name="maxMileage"
                      type="number"
                      onChange={(e) =>
                        setSearchParams((prev) => ({
                          ...prev,
                          maxMileage: e.target.value,
                        }))
                      }
                      value={searchParams.maxMileage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
        <button className={styles.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  getSearchCar: PropTypes.func,
};
