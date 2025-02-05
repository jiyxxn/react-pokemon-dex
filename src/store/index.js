import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../store/pokemonSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
