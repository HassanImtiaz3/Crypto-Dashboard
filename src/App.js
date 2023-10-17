import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Support from './pages/Support/Support';
import Transactions from './pages/Transaction/Transactions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/transactions",
    element: <Transactions/>,
  },
  {
    path: "/support",
    element: <Support/>,
  },
]);

const App = () => {
 


  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
