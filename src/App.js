import './App.css';
import AppRoutes from './components/Routes';
import { Toaster } from 'react-hot-toast'
function App() {

  return (<>
    <Toaster />
    <AppRoutes />
  </>);
}

export default App;
