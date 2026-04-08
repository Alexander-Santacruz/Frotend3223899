import React from 'react';
import './App.css';

// Hice este navbar para que los usuarios naveguen fácil por la página
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Mi Sitio Web</h2>
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

// Esta sección principal es para dar la bienvenida al usuario
const MainSection = () => {
  return (
    <main className="main-section">
      <h1>Bienvenido</h1>
      <p>Esta es la página principal.</p>
      <button>Botón Básico</button>
    </main>
  );
};

// Agregué esta segunda sección para mostrar info básica en lista
const SecondSection = () => {
  return (
    <section className="second-section">
      <h2>Información</h2>
      <ul>
        <li>Punto 1</li>
        <li>Punto 2</li>
        <li>Punto 3</li>
      </ul>
    </section>
  );
};

// El aside es para enlaces extras, como una barra lateral útil
const Aside = () => {
  return (
    <aside className="aside">
      <h3>Enlaces</h3>
      <p><a href="#link1">Enlace 1</a></p>
      <p><a href="https://github.com/Alexander-Santacruz/Frotend3223899.git">Mi repositorio</a></p>
    </aside>
  );
};

// Footer simple para cerrar la página con derechos reservados
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 Mi Sitio. Todos los derechos reservados.</p>
    </footer>
  );
};

// Aquí junto todo en App, básico pero funcional
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MainSection />
      <SecondSection />
      <Footer />
    </div>
  );
};

export default App;