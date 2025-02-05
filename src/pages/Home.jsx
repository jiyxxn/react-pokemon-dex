import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { SectionWrapper } from '../components/Wrapper.jsx';

const Home = () => {
  const navigate = useNavigate();
  return (
    <SectionWrapper height={'100vh'}>
      <h1>
        <img src="/pokemon_logo.png" alt="포켓몬 로고" />
      </h1>
      <Button
        $big
        color="#3b5ca7"
        onClick={() => {
          navigate('./dex');
        }}
      >
        도감 보기
      </Button>
    </SectionWrapper>
  );
};

export default Home;
