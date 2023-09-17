export const filterCar = (search, array) => {
  const { brand, price, minMileage, maxMileage } = search;

  return array
    .filter(item => {
      if (brand && item.make !== brand) return false;
      if (price && Number(item.rentalPrice.slice(1)) > price) return false;
      if (minMileage && item.mileage < minMileage) return false;
      if (maxMileage && item.mileage > maxMileage) return false;
      return true;
    })
    .map(item => ({
      ...item,
      rentalPrice: "$" + Number(item.rentalPrice.slice(1))
    }));
};
