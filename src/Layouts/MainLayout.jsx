import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-screen">
                <Outlet>
                    {/* All nested routes will be rendered here */}
                </Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;