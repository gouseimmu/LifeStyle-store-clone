import './App.css';

import MainRoutes from "./pages/MainRoutes";

import Navbar from './components/Navbar';
import AllMenProducts from './pages/products/AllMenProducts';
import AllProducts from './pages/products/AllProducts';
import Section from './pages/products/Section';

function App() {
  return (
    <div className="App">
      {/* <Women/> */}
      {/* <Men/> */}
      {/* <AllMenProducts/> */}
      {/* <AllProducts/> */}
      <Section/>
    </div>
  );
}

export default App;
