
import { Route, Routes, Navigate } from 'react-router-dom';

// RUTAS DE LA APLICACION

import { Ruta_Home } from './Ruta_Home.jsx';
import { Ruta_Eresveterinario } from './Ruta_Eresveterinario.jsx';
import { Ruta_Donantes } from './Ruta_Donantes.jsx';
import { Ruta_Distribuidores } from './Ruta_Distribuidores.jsx';   


// COMPONENTES UI
import { MainLayout } from '../ui/index.js';

export const AppRoutes = () => {
    return (

        <>  
         

            <Routes>

                <Route element={<MainLayout />}>
                    <Route path="/home" element={<Ruta_Home />} /> 
                    <Route path="/soy-veterinario" element={<Ruta_Eresveterinario />} />
                   
                    

                    <Route path="/donantes" element={<Ruta_Donantes />} />
                    <Route path="/distribuidores" element={<Ruta_Distribuidores />} />
                    
                </Route>

                <Route path="/" element={<Navigate to="/home" />} />

            </Routes>

        </>
    );
};

