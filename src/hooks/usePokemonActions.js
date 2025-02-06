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

    toggleBtn === 'register'
      ? dispatch(registerPokemon(selectedId))
      : dispatch(deletePokemon(selectedId));
  };

  return { handleSelectedPokemon };
};

export default usePokemonActions;
