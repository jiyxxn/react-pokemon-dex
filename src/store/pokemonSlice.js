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
        toast.success('포켓몬이 전투에 참여합니다 ⚔️');
        state.selectedPokemon.push(selectedPokemon);
      }
    },

    deletePokemon: (state, action) => {
      state.selectedPokemon = state.selectedPokemon.filter(
        (pokemon) => pokemon.id !== action.payload
      );
      toast.success('포켓몬이 집으로 돌아갔습니다 🏠');
    },
  },
});

export const { registerPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
