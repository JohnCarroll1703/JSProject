import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './compos/navigation_bar.jsx'
import { Shop } from './pages/shop/shop.jsx';
import { Cart } from './pages/cart/cart.jsx';

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" />
                <Route path="/cart" />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
