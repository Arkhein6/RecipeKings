import React from 'react'
import { Homepage,Recipes } from './Pages'
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
    }
    ]
        
);



const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App