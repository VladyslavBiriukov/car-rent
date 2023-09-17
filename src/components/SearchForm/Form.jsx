import { useEffect, useState } from "react";
import styles from "./Form.module.scss";
import { getAllCar } from "../../api/api";

export const Form = () => {
  const [brand, setBrand] = useState();
  const [allCar, setAllCar] = useState();

  console.log("brand", brand);

  useEffect(() => {
    (async () => {
      const all = await getAllCar();
      setAllCar(all);
      const brand = new Set();
      all.map((item) => brand.add(item.make));
      setBrand(Array.from(brand));
    })();
  }, []);

  const search = (e) => {
    e.preventDefault();
    console.log("allar", allCar);
    const brand = e.target.brand_car.value;
    const price = e.target.select.value;
    const findBrand = allCar.filter((item) => item.make === brand);
    const findPrice = allCar.filter((item) => {
      console.log(item.rentalPrice.slice(1, item.rentalPrice.length));
      console.log("price", price);
      console.log(item.rentalPrice.slice(1, item.rentalPrice.length) < price);
    });
    console.log("findcar", findPrice);
  };

  return (
    <div>
      <form onSubmit={search} className={styles.form_conteiner}>
        <div>
          <label style={{ display: "block" }} htmlFor="brand_car">
            Car brand
            <input
              list="brand"
              id="brand_car"
              name="brand_car"
              placeholder="Enter the text"
            />
            <datalist id="brand" name="brand">
              {brand &&
                brand.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
            </datalist>
          </label>
        </div>
        <div>
          <label>
            Price/ 1 hour
            <select name="select">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
              <option value="90">90</option>
              <option value="100">100</option>
              <option value="110">110</option>
              <option value="120">120</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Сar mileage / km
            <input name="min" type="number" />
            <input name="max" type="number" />
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};