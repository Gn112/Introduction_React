import React from "react";

// Função de componente
export default function Header() {
  // "export default" exporta para o arquivo principal
  return (
    <header>
      <nav className="nav_header">
        <img
          src={require("../react-logo.png")}
          className="logo"
          alt="react-logo"
        />

        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
