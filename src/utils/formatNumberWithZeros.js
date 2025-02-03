const formatNumberWithZeros = (number, n) => {
  return String(number).padStart(n, '0');
};

export default formatNumberWithZeros;
