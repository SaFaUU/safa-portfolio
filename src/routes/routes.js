import React from 'react';
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Routes,
} from "react-router-dom";
import App from '../App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    }

])
export default Routes;