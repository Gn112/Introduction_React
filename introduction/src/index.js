import React from "react"; // Importa a biblioteca do REACT
import { createRoot } from "react-dom"; // Importa os métodos para escrever o JSX no DOM
import "./index.css"; // importa o arquivo css
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import MainContent from "./components/MainContent.js";

function App() {
  return (
    <div>
      <Header /> {/* Renderiza os componentes do REACT na tela */}
      <MainContent />
      <Footer />
    </div>
  );
}

// Função de manda renderizar o componente principal na tela
const root = document.getElementById("root");
createRoot(root).render(<App />)
