import './App.css';
import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import About from './components/About';
import Navbar from './components/Navbar';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Products />} >
            <Route path="product-details" element={<ProductDetails />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
