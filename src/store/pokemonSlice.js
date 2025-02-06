import { createSlice } from '@reduxjs/toolkit';
import POKEMON_DATA from '../mocks/pokemonData';
import { validateNotExisted, validateMaximum } from '../utils/validate';
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
    // * 포켓몬 등록
    registerPokemon: (state, action) => {
      const selectedPokemon = state.pokemonData.find(
        (pokemon) => pokemon.id === action.payload
      );

      if (!selectedPokemon) return;

      if (!validateMaximum(state.selectedPokemon, MAX_POKEMON)) {
        toast.error('더 이상 데려갈 수 없습니다.');
        return;
      }
      if (!validateNotExisted(state.selectedPokemon, action.payload)) {
        toast.error('이미 데려간 포켓몬입니다.');
        return;
      }

      toast.success(`${selectedPokemon.korean_name}, 전투 준비 완료 ⚔️`);
      state.selectedPokemon.push(selectedPokemon);
    },

    // * 포켓몬 삭제
    deletePokemon: (state, action) => {
      const removedPokemon = state.selectedPokemon.find(
        (pokemon) => pokemon.id === action.payload
      );

      if (!removedPokemon) return;

      state.selectedPokemon = state.selectedPokemon.filter(
        (pokemon) => pokemon.id !== action.payload
      );
      toast.success(`${removedPokemon.korean_name}, 오늘은 여기까지! 🏠`);
    },
  },
});

export const { registerPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
