import './App.css';
import Router from './shared/Router';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="top-right"
        hideProgressBar
        closeButton={false}
        autoClose={1000}
        theme="light"
        transition={Slide}
      />
    </>
  );
}

export default App;
