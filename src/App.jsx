// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Restaurante';
import Order from './pages/Order';
import Especialidade from './pages/Especialidade';
import Menu from './pages/Menu';
import './index.css'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path='/especialidade' element={<Especialidade />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

