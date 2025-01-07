import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.js'
import './components/global.css'
import {createBrowserRouter , RouterProvider} from 'react-router'
import Home from './components/Home.js'
import Error from './components/Error.js'
import CountryDetails from './components/CountryDetails.js'

const root = ReactDOM.createRoot(document.querySelector('#root')); 
const router = createBrowserRouter([
    {path:'/',
    element:<App/>,
    errorElement :<Error/>,
    children:[{
        path:'/',
        element:<Home/>
    },
    {
        path:'/:Country',
        element:<CountryDetails/>
    }
]
    }
])
root.render(<RouterProvider router = {router} />)
