import React from 'react'
import { Homepage,Recipes,Account } from './Pages'
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";



const router = createBrowserRouter([
    {
        path:"/" ,
        element:<Homepage/>
    },
    {
        path:'/recipes',
        element: <Recipes />
    },
    {
        path:'/account',
        element: <Account />
    }
    ]
        
);



const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App