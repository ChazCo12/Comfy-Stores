export const formatPrice = (number) => {
  const newNum = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNum;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => {
    return item[type];
  });
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
