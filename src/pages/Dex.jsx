import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { SectionWrapper } from '../components/Wrapper.jsx';

const Dex = () => {
  return (
    <SectionWrapper $gradient>
      <Dashboard />
      <PokemonList />
    </SectionWrapper>
  );
};

export default Dex;
