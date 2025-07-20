import { Link } from 'react-router-dom';
import React from 'react'
import './../assets/styles/not-found.css'

export default function NotFound() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="not-found mt-5">
                    <h3>Erro 404 - Pagina não Encontrada</h3>
                    <Link to='/'>Home</Link>
                </div>
            </div>
        </div>
    )
}
