import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Draft } from './Components/FrontPage/Designe/Draft'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import { MainScreen } from './Components/FrontPage/MainScreen/MainScreen'
function App() {
  const routes = createBrowserRouter([
    {
      path : "/",
      Component : MainScreen
    },

    {
      path : "/draft",
      element : <Draft />
    }
  ])
  return (
    <>
      <RouterProvider router= {routes}></RouterProvider>
      {/* <RouterProvider router={routes}></RouterProvider> */}
        
      </>
  )
}

export default App
