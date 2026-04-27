import { NavLink, Link, useNavigate } from 'react-router-dom';


//ESTILOS
import '../styles_scss/componentes_scss/navbar_component.scss';

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">

      {/* 🔹 BRAND / LOGO */}
      <Link className="navbar__brand" to="/">
        Logo_aplicacion
      </Link>

      {/* 🔹 MENÚ DE NAVEGACIÓN */}
      <div className="navbar__menu">

        <NavLink
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
          to="/"
        >
          Inicio
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
          to="/ruta-dos"
        >
           ¿Eres veterinario? 
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
          to="/ruta-tres"
        >
          ¿Quieres ser donante? 
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
          to="/ruta-tres"
        >
          Productos o servicios 
        </NavLink>

         <NavLink
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
          to="/ruta-tres"
        >
          Distribuidores
        </NavLink>

      </div>

      {/* 🔹 ACCIÓN (LOGOUT) */}
      <button
        className="navbar__button navbar__button--danger"
        onClick={handleLogout}
      >
        Cerrar Sesión
      </button>

    </nav>
  );
};