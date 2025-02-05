import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store'; // 자동으로 해당 폴더 내부의 index.js를 찾도록 동작
import '@fortawesome/fontawesome-free/js/all.js';
import 'swiper/css';
import 'swiper/css/pagination';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
