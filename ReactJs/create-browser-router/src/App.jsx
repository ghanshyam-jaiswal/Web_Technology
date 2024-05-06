import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes'
import Context from './Context'

const App = () => {
  return (
    <Context>
        <RouterProvider router={routes}>

        </RouterProvider>
    </Context>
)
    
    
}

export default App