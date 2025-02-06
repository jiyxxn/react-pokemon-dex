// * 포켓몬 최대치 초과 여부 검증
export const validateMaximum = (prevData, max) => {
  if (prevData.length >= max) {
    return false;
  }
  return true;
};

// * 기존에 등록된 포켓몬 여부 검증
export const validateNotExisted = (prevData, selectedId) => {
  const isExisted = prevData.filter((data) => {
    return data.id === Number(selectedId);
  });

  if (isExisted.length > 0) {
    return false;
  }
  return true;
};
