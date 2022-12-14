import './App.css';

import MainRoutes from "./pages/MainRoutes";

// import MainRoutes from './pages/MainRoutes';
import Navbar from './components/Navbar';
import Menpage from './pages/products/Men';
import Women from './pages/products/Women';

function App() {
  return (
    <div className="App">
      {/* <Women/> */}
      <Menpage/>
    </div>
  );
}

export default App;
