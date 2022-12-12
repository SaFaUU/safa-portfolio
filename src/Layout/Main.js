import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-36 px-12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;