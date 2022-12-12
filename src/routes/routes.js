import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Routes,
} from "react-router-dom";
import AboutMe from '../components/AboutMe/AboutMe';
import ProjectPage1 from '../components/ProjectPage/ProjectPage1';
import ProjectPage2 from '../components/ProjectPage/ProjectPage2';
import ProjectPage3 from '../components/ProjectPage/ProjectPage3';
import Main from '../Layout/Main';
import Home from '../Pages/Home';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects-1',
                element: <ProjectPage1></ProjectPage1>
            },
            {
                path: '/projects-2',
                element: <ProjectPage2></ProjectPage2>
            },
            {
                path: '/projects-3',
                element: <ProjectPage3></ProjectPage3>
            },
            {
                path: '/about-me',
                element: <AboutMe></AboutMe>
            },
        ]
    }

])