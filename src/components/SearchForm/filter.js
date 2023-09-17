export const filterCar = (search, array) => {
  const { brand, price, minMileage, maxMileage } = search;

  if (brand !== "" && price !== "" && minMileage !== "" && maxMileage !== "") {
    const filtred = array
      .filter((item) => item.make === brand)
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: "$" + item.rentalPrice }))
      .filter(
        (item) => item.mileage >= minMileage && item.mileage <= maxMileage
      );
    return filtred;
  }

  if (brand !== "" && price !== "" && minMileage !== "" && maxMileage === "") {
    const filtred = array
      .filter((item) => item.make === brand)
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: "$" + item.rentalPrice }))
      .filter((item) => item.mileage >= minMileage);
    return filtred;
  }

  if (brand !== "" && price !== "" && minMileage === "" && maxMileage !== "") {
    const filtred = array
      .filter((item) => item.make === brand)
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: "$" + item.rentalPrice }))
      .filter((item) => item.mileage <= maxMileage);
    return filtred;
  }

  if (brand !== "" && price === "" && minMileage !== "" && maxMileage !== "") {
    const filtred = array
      .filter((item) => item.make === brand)
      .filter(
        (item) => item.mileage >= minMileage && item.mileage <= maxMileage
      );
    return filtred;
  }

  if (brand === "" && price !== "" && minMileage !== "" && maxMileage !== "") {
    const filtred = array
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: "$" + item.rentalPrice }))
      .filter(
        (item) => item.mileage >= minMileage && item.mileage <= maxMileage
      );
    return filtred;
  }

  if (brand !== "" && price !== "" && minMileage === "" && maxMileage === "") {
    const filtred = array
      .filter((item) => item.make === brand)
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: "$" + item.rentalPrice }));
    return filtred;
  }

  if (brand !== "" && price === "" && minMileage !== "" && maxMileage === "") {
    const filtred = array
      .filter((item) => item.make === brand)
      .filter((item) => item.mileage >= minMileage);
    return filtred;
  }

  if (brand === "" && price !== "" && minMileage !== "" && maxMileage === "") {
    const filtred = array
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: "$" + item.rentalPrice }))
      .filter((item) => item.mileage >= minMileage);
    return filtred;
  }

  if (brand !== "" && price === "" && minMileage === "" && maxMileage !== "") {
    const filtred = array
      .filter((item) => item.make === brand)
      .filter((item) => item.mileage <= maxMileage);
    return filtred;
  }

  if (brand === "" && price !== "" && minMileage === "" && maxMileage !== "") {
    const filtred = array
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: "$" + item.rentalPrice }))
      .filter((item) => item.mileage <= maxMileage);
    return filtred;
  }

  if (brand === "" && price === "" && minMileage !== "" && maxMileage !== "") {
    const filtred = array.filter(
      (item) => item.mileage >= minMileage && item.mileage <= maxMileage
    );
    return filtred;
  }

  if (brand !== "" && price === "" && minMileage === "" && maxMileage === "") {
    const filtred = array.filter((item) => item.make === brand);
    return filtred;
  }

  if (brand === "" && price !== "" && minMileage === "" && maxMileage === "") {
    const filtred = array
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: "$" + item.rentalPrice }));
    return filtred;
  }

  if (brand === "" && price === "" && minMileage !== "" && maxMileage === "") {
    const filtred = array.filter((item) => item.mileage >= minMileage);
    return filtred;
  }

  if (brand === "" && price === "" && minMileage === "" && maxMileage !== "") {
    const filtred = array.filter((item) => item.mileage <= maxMileage);
    return filtred;
  }
};