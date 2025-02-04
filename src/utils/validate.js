import { toast } from 'react-toastify';
export const validateMaximum = (prevData, max) => {
  if (prevData.length >= max) {
    // toast.warning('더 이상 데려갈 수 없습니다.');
    return false;
  }
  return true;
};

export const validateExisted = (prevData, selectedId) => {
  const isExisted = prevData.filter((data) => {
    return data.id === Number(selectedId);
  });

  if (isExisted.length > 0) {
    alert('이미 데려간 포켓몬입니다.');
    return false;
  }
  return true;
};
