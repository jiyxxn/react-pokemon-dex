import './App.css';
import Router from './shared/Router';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="top-center"
        closeButton={false}
        autoClose={4000}
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
