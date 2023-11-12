import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// browser router using react router dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App';
import Update from './components/Update';
import Error from './components/Error';


import TaskContextProvider from './utils/TaskContextProvider';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error/>,

    children: [
      {
        path: "/",
        element: <App />,
    
      },
      {
        path: "/update/:id",
        element: <Update />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <TaskContextProvider>
        <RouterProvider router={router} />
      </TaskContextProvider>
  </React.StrictMode>
);
