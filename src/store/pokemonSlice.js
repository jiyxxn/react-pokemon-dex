import { createSlice } from '@reduxjs/toolkit';
import POKEMON_DATA from '../mocks/pokemonData';
import { validateExisted, validateMaximum } from '../utils/validate';
import { MAX_POKEMON } from '../shared/constants';
import { toast } from 'react-toastify';

const initialState = {
  selectedPokemon: [],
  pokemonData: POKEMON_DATA,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    registerPokemon: (state, action) => {
      if (!validateMaximum(state.selectedPokemon, MAX_POKEMON)) {
        toast.error('더 이상 데려갈 수 없습니다.');
        return;
      }
      if (!validateExisted(state.selectedPokemon, action.payload)) {
        toast.error('이미 데려간 포켓몬입니다.');
        return;
      }

      const selectedPokemon = state.pokemonData.find(
        (pokemon) => pokemon.id === action.payload
      );
      if (selectedPokemon) {
        toast.success(`${selectedPokemon.korean_name}, 전투 준비 완료 ⚔️`);
        state.selectedPokemon.push(selectedPokemon);
      }
    },

    deletePokemon: (state, action) => {
      const removedPokemon = state.selectedPokemon.find(
        (pokemon) => pokemon.id === action.payload
      );

      state.selectedPokemon = state.selectedPokemon.filter(
        (pokemon) => pokemon.id !== action.payload
      );
      toast.success(`${removedPokemon.korean_name}, 오늘은 여기까지! 🏠`);
    },
  },
});

export const { registerPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
