import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} >
          <Route path="product-details" element={<ProductDetails />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
