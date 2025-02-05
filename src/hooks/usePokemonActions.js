import { useDispatch } from 'react-redux';
import { deletePokemon, registerPokemon } from '../store/pokemonSlice';
import toggleBtnType from '../utils/toggleBtnType';

const usePokemonActions = () => {
  const dispatch = useDispatch();

  const handleSelectedPokemon = (e) => {
    e.stopPropagation();

    const toggleBtn = e.target.getAttribute('data-toggle');
    const selectedId = Number(
      e.target.closest('.poke-card').getAttribute('data-id')
    );

    if (toggleBtn === 'register') {
      dispatch(registerPokemon(selectedId));
      toggleBtnType(e, '삭제하기', 'delete');
    } else if (toggleBtn === 'delete') {
      dispatch(deletePokemon(selectedId));
      toggleBtnType(e, '데려가기', 'register');
    }
  };

  return { handleSelectedPokemon };
};

export default usePokemonActions;
