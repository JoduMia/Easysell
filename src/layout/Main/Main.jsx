import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

const Main = () => {
    return (
        <div className='grid grid-cols-5 relative'>
            <Sidebar className='col-span-1'/>
            <div className='col-span-4'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Main;