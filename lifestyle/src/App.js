import './App.css';

import MainRoutes from "./pages/MainRoutes";

// import MainRoutes from './pages/MainRoutes';
import Navbar from './components/Navbar';
import Checkout from './pages/checkout/Checkout';

function App() {
  return (
    <div className="App"> 
      <Checkout />   
    </div>
  );
}

export default App;
