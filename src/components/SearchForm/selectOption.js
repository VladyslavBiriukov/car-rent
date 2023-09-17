export const selectOption = (array) => {
  return array.map((item) => ({ value: item, label: item }));
};

export const priceOption = (price) => {
  const option = [];
  for (let i = 10; i <= price; i += 10)
    option.push({
      value: i,
      label: i,
    });
  return option;
};