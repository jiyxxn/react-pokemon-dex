import EmptyCard from './EmptyCard';
import { BoardWrapper } from './Wrapper';
import { MAX_POKEMON } from '../shared/constants.js';
import PokemonCard from './PokemonCard.jsx';
import { useSelector } from 'react-redux';
import usePokemonActions from '../hooks/usePokemonActions.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { createGlobalStyle } from 'styled-components';

const Dashboard = () => {
  const pokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const { handleSelectedPokemon } = usePokemonActions();

  const renderSelectedPokemonList = () => {
    const renderList = [];
    for (let i = 0; i < MAX_POKEMON; i++) {
      if (pokemon[i]) {
        renderList.push(
          <SwiperSlide key={i}>
            <PokemonCard
              key={i}
              img={pokemon[i].img_url}
              name={pokemon[i].korean_name}
              number={pokemon[i].id}
              types={pokemon[i].types}
              button={'delete'}
              arrivedAt={`/detail/${pokemon[i].id}`}
              onPokemonSelect={handleSelectedPokemon}
            />
          </SwiperSlide>
        );
      } else {
        renderList.push(
          <SwiperSlide key={i}>
            <EmptyCard />
          </SwiperSlide>
        );
      }
    }
    return renderList;
  };

  return (
    <>
      <GlobalStyles />
      <BoardWrapper
        $padding="40px"
        $backgroundColor="#fdf7e5"
        $shadow="0px 0px 10px 2px #e2c6ac;"
        $overflow="hidden"
      >
        <h2>Battle Partners 🚀</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          observer={true} // Swiper 크기 변화를 감지
          observeParents={true} // 부모 요소의 크기 변화를 감지
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
      </BoardWrapper>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  .swiper  {
    overflow: visible;
  }
  .swiper-wrapper {
    align-items: center;
  }
`;

export default Dashboard;
