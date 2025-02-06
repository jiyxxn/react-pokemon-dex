// * 숫자에 0을 채워 n자리 수로 만듦
const formatNumberWithZeros = (number, n) => {
  return String(number).padStart(n, '0');
};

export default formatNumberWithZeros;
