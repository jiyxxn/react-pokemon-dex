import { useDispatch } from 'react-redux';
import { deletePokemon, registerPokemon } from '../store/pokemonSlice';

const usePokemonActions = () => {
  const dispatch = useDispatch();

  // * 포켓몬 카드에서 선택/해제 액션을 처리하는 이벤트 핸들러
  const handleSelectedPokemon = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지

    const toggleBtn = e.target.getAttribute('data-toggle');
    if (!toggleBtn) return; // 유효하지 않은 버튼 클릭 방지

    const selectedId = Number(
      e.target.closest('.poke-card').getAttribute('data-id')
    );
    /* 암시적 형변환 없이 정확한 NaN 판별
        - e.g. isNaN(""), isNaN("null") 은 값이 0으로 변환되면서 false가 반환됨*/
    if (Number.isNaN(selectedId)) return;

    // data-toggle 값에 따라 포켓몬 등록 또는 삭제 실행
    toggleBtn === 'register'
      ? dispatch(registerPokemon(selectedId))
      : dispatch(deletePokemon(selectedId));
  };

  return { handleSelectedPokemon };
};

export default usePokemonActions;
