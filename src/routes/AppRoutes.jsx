
import { Route, Routes, Navigate } from 'react-router-dom';

// RUTAS DE LA APLICACION

import { Ruta_Home } from './Ruta_Home.jsx';
import { Ruta_Eresveterinario } from './Ruta_Eresveterinario.jsx';
import { RutaTres } from './Ruta_tres.jsx';   


// COMPONENTES UI
import { MainLayout } from '../ui/index.js';

export const AppRoutes = () => {
    return (

        <>  
         

            <Routes>

                <Route element={<MainLayout />}>
                    <Route path="/home" element={<Ruta_Home />} /> 
                    <Route path="/ruta-dos" element={<Ruta_Eresveterinario />} />
                    <Route path="/ruta-tres" element={<RutaTres />} />
                </Route>

                <Route path="/" element={<Navigate to="/home" />} />

            </Routes>

        </>
    );
};

