export const filterCar = (search, array) => {
  const { make, rentalPrice, minMileage, maxMileage } = search; // Изменяем "brand" на "make"

  return array
    .filter(item => {
      if (make && item.make !== make) return false;
      if (rentalPrice && Number(item.rentalPrice.slice(1)) > rentalPrice) return false; // Изменяем "price" на "rentalPrice"
      if (minMileage && item.mileage < minMileage) return false;
      if (maxMileage && item.mileage > maxMileage) return false;
      return true;
    })
    .map(item => ({
      ...item,
      rentalPrice: "$" + Number(item.rentalPrice.slice(1))
    }));
};
