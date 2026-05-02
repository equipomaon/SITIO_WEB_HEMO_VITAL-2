import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

// ASSETS - Asegúrate de que esta ruta sea la de tu logo nuevo con letras
import logo_vital from '../assets/huella.png'; 

// ESTILOS
import '../styles_scss/componentes_scss/navbar_component.scss';

export const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="navbar">
      
      {/* 🔹 CONTENEDOR PARA ESCRITORIO Y MÓVIL */}
      <div className="navbar__container">
        
        {/* LOGO (Siempre a la izquierda) */}
        <Link className="navbar__brand" to="/" onClick={cerrarMenu}>
          <img src={logo_vital} alt="Hemovital Logo" />
        </Link>

        {/* 🔹 LINKS PARA ESCRITORIO (Se ocultan en móvil) */}
        <div className="navbar__desktop-content">
          <div className="navbar__desktop-links">
            <NavLink className="nav-item" to="/">Link One</NavLink>
            <NavLink className="nav-item" to="/ruta-2">Link Two</NavLink>
            <NavLink className="nav-item" to="/ruta-3">Link Three</NavLink>
            <NavLink className="nav-item nav-item--dropdown" to="/ruta-4">
              Link Four <span>⌵</span>
            </NavLink>
          </div>

          <div className="navbar__desktop-actions">
            <button className="btn-outline">Button</button>
            <button className="btn-solid">Button</button>
          </div>
        </div>

        {/* 🔹 BOTÓN HAMBURGUESA (Solo visible en móvil) */}
        <button className="navbar__toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

      </div>

      {/* 🔹 MENÚ MÓVIL (Sidebar/Overlay que ya teníamos) */}
      <div className={`navbar__backdrop ${menuAbierto ? 'navbar__backdrop--open' : ''}`} onClick={cerrarMenu}></div>
      
      <div className={`navbar__overlay ${menuAbierto ? 'navbar__overlay--open' : ''}`}>
        <div className="navbar__overlay-header">
          <img src={logo_vital} alt="Logo" className="logo-small" />
          <button className="navbar__close" onClick={toggleMenu}>✕</button>
        </div>

        <div className="navbar__links-container">
          <NavLink className="navbar__link" to="/" onClick={cerrarMenu}>Link One</NavLink>
          <NavLink className="navbar__link" to="/ruta-2" onClick={cerrarMenu}>Link Two</NavLink>
          <NavLink className="navbar__link" to="/ruta-3" onClick={cerrarMenu}>Link Three</NavLink>
          <NavLink className="navbar__link" to="/ruta-4" onClick={cerrarMenu}>Link Four ⌵</NavLink>
        </div>

        <div className="navbar__actions">
          <button className="btn-menu-outline">Button</button>
          <button className="btn-menu-solid">Button</button>
        </div>
      </div>

    </nav>
  );
};