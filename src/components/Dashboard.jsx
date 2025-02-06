import EmptyCard from './EmptyCard';
import { BoardWrapper } from './Wrapper';
import { MAX_POKEMON } from '../shared/constants.js';
import PokemonCard from './PokemonCard.jsx';
import { useSelector } from 'react-redux';
import usePokemonActions from '../hooks/usePokemonActions.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import GlobalStyles from '../styles/globalStyles.js';

const Dashboard = () => {
  const pokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const { handleSelectedPokemon } = usePokemonActions();

  const renderSelectedPokemonList = () =>
    Array.from({ length: MAX_POKEMON }, (_, i) => {
      const selected = pokemon[i];

      return (
        <SwiperSlide key={i}>
          {selected ? (
            <PokemonCard
              img={selected.img_url}
              name={selected.korean_name}
              number={selected.id}
              types={selected.types}
              button="delete"
              arrivedAt={`/detail?dexNum=${selected.id}`}
              onPokemonSelect={handleSelectedPokemon}
            />
          ) : (
            <EmptyCard />
          )}
        </SwiperSlide>
      );
    });

  return (
    <>
      <GlobalStyles />
      <BoardWrapper {...boardStyle}>
        <div>
          <h2>Battle Partners 🚀</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              1280: { slidesPerView: 6 },
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 4 },
              540: { slidesPerView: 3 },
              480: { slidesPerView: 2 },
            }}
          >
            {renderSelectedPokemonList()}
          </Swiper>
        </div>
      </BoardWrapper>
    </>
  );
};

const boardStyle = {
  $padding: '40px',
  $backgroundColor: '#fdf7e5',
  $boxShadow: '0px 0px 10px 2px #e2c6ac',
  $overflow: 'hidden',
};

export default Dashboard;
