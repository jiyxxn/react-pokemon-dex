export const validateMaximum = (prevData, max) => {
  if (prevData.length >= max) {
    return false;
  }
  return true;
};

export const validateExisted = (prevData, selectedId) => {
  const isExisted = prevData.filter((data) => {
    return data.id === Number(selectedId);
  });

  if (isExisted.length > 0) {
    return false;
  }
  return true;
};
