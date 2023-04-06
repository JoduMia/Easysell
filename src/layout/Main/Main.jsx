import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarNav from '../../components/SidebarNav/SidebarNav';

const Main = () => {
    return (
        <div className='flex'>
            <SidebarNav/>
            <Outlet/>
        </div>
    );
};

export default Main;