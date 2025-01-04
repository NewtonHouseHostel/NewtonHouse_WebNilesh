import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import {Home, About, Activities, Alumni, Supt, Notice,} from './components'
import Layout from '../Layout.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path:'Activities',
        element:<Activities/>
      },
      {
        path:'Alumni',
        element:<Alumni/>
      },
      {
        path:'About',
        element: <About/>
      },
      {
        path:'Supt',
        element:<Supt/>
      },
      {
        path:'Notice',
        element:<Notice/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
