import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterNav from '../Components/FooterNav';

const Main = () => {
    return (
        <div className=''>
            <Outlet />
            <FooterNav />
        </div>
    );
};

export default Main;