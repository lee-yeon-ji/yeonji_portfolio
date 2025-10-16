import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {

        path: '/',
        element: <App />,
        children: [
            {

                path: '',
                element: <Home/>,

            },
            {
                path: '/about',
                element: <About/>,

            },
            {
                path: '/project',
                element: <Project/>,


            },

        ],

        errorElement: <ErrorPage/>,
    },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    </React.StrictMode>
);
