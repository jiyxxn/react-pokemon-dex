import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { SectionWrapper } from '../components/SectionWrapper';

const Dex = () => {
  return (
    <SectionWrapper>
      <Dashboard />
      <PokemonList />
    </SectionWrapper>
  );
};

export default Dex;
