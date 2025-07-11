// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './../assets/styles/navbar.css'
import logo from './../assets/images/logo-tokio-food.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/menu">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/especialidade">Especialidade</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/order">Reservas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
