import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import AllTasks from './components/AllTasks';
import Error from './components/Error';
import Child1 from './components/Child1';
import Child2 from './components/Child2';


const appRouter = createBrowserRouter([
  {
    
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <App/>,
        children: [
          {
            path: "/alltasks",
            element: <AllTasks />
          }
        ]
      },
      {
        path: "/error",
        element: <Error/>
      }
     
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>
);
