import { NavLink, Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  // Función para cerrar sesión o ir a una ruta específica programáticamente
  const handleLogout = () => {
    // Aquí iría tu lógica de limpieza
    navigate('/'); // Redirige al inicio
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Mi Aplicación</Link>
      
      <div className="navbar-nav me-auto">
        {/* NavLink añade automáticamente la clase 'active' cuando la ruta coincide */}
        <NavLink 
          className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold' : ''}`} 
          to="/"
        >
          Inicio
        </NavLink>

        <NavLink 
          className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold' : ''}`} 
          to="/ruta-dos"
        >
          Vista 2
        </NavLink>

        <NavLink 
          className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold' : ''}`} 
          to="/ruta-tres"
        >
          Vista 3
        </NavLink>
          </div>

      <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </nav>
  );
};