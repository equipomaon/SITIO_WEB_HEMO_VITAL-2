import { useState } from 'react'

import { AppRoutes } from './routes/AppRoutes.jsx'

import './styles_scss/base_scss/global.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
