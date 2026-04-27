import { useState } from 'react'

import { AppRoutes } from './Routes/AppRoutes.jsx'

import './Styles_scss/base_scss/global.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
