import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="hero-banner">
      <div className="overlay">
        <div className="hero-text">
          <h1>SUA FOOD TOKIO</h1>
          <p>
            Sabores modernos, com um toque de Tóquio.<br /> Descubra uma experiência
            gastronómica única.
          </p>
          <Link to="/order" className="btn-banner">
            Pedir já
          </Link>
          <Link to="/" className="btn-banner-cont ml-3">
            Contacte-nos
          </Link>
        </div>
      </div>
    </section>
  );
}
