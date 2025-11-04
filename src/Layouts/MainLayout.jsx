import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet>
                {/* All nested routes will be rendered here */}
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;