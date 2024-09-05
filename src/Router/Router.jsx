import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home/Home';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <p>About</p>
            }
        ]
    }
])

export default Router;