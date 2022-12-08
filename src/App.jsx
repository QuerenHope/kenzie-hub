import Routes from './routes';
import Global from './styles/global';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from './context/AuthContext';
import TechProvider from './context/TechContext';


function App() {
  return (
    <>
      <AuthProvider>
      <TechProvider>
        <Global  />
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              />
              {/* Same as */}
          <ToastContainer />
        <Routes  />
      </TechProvider>
      </AuthProvider>
    </>
  );
}

export default App;
