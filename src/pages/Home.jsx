import { useNavigate } from 'react-router-dom';
import { StartMainButton } from '../components/Button';
import { SectionWrapper } from '../components/Wrapper.jsx';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();
  return (
    <SectionWrapper height={'100vh'}>
      <MainBox>
        <h1>
          <img src="/main_img.png" alt="포켓몬" width="400" />
        </h1>
        <StartMainButton
          onClick={() => {
            navigate('./dex');
          }}
        >
          시작하기🎮
        </StartMainButton>
      </MainBox>
    </SectionWrapper>
  );
};

const MainBox = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 20px;

  h1 img {
    animation: bounce 0.6s cubic-bezier(0, 0, 0.18, 0.99) infinite alternate;
  }

  @keyframes bounce {
    to {
      transform: translateY(-30px);
    }
  }

  @media (max-width: 540px) {
    width: 80%;
  }
  @media (max-width: 1024px) {
    width: 60%;
  }
`;
export default Home;
