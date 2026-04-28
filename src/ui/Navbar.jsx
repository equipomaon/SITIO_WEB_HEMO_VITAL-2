import { NavLink, Link, useNavigate,  } from 'react-router-dom';
import { useState } from 'react';


//ESTILOS
import '../styles_scss/componentes_scss/navbar_component.scss';

export const Navbar = () => {
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleLogout = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className={`navbar ${menuAbierto ? 'navbar--open' : ''}`}>
 
      {/* 🔹 BRAND */}
      <Link className="navbar__brand" to="/">
        Logo_aplicacion
      </Link>

      {/* 🔹 BOTÓN HAMBURGUESA */}
      <button className="navbar__toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* 🔹 MENÚ */}
      <div className={`navbar__menu ${menuAbierto ? 'navbar__menu--open' : ''}`}>

        <NavLink className="navbar__link" to="/">Inicio</NavLink>
        <NavLink className="navbar__link" to="/ruta-dos">¿Eres veterinario?</NavLink>
        <NavLink className="navbar__link" to="/ruta-tres">¿Quieres ser donante?</NavLink>
        <NavLink className="navbar__link" to="/ruta-tres">Productos o servicios</NavLink>
        <NavLink className="navbar__link" to="/ruta-tres">Distribuidores</NavLink>

      </div>

      {/* 🔹 BOTÓN 
      <button
        className="navbar__button navbar__button--danger"
        onClick={handleLogout}
      >
        Cerrar Sesión
      </button>
      */}

    </nav>
  );
};