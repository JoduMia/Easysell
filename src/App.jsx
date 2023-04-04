//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes/Routes'
import { useState } from 'react'

function App() {
const [darkmode, setDarkMode] = useState(true);
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
