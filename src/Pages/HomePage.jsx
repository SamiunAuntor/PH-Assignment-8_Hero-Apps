import React, { Suspense } from 'react';
import Banner from '../Components/Banner';
import TrendingApps from '../Components/TrendingApps';
import Loader from '../Components/Loader/Loader';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <TrendingApps />
        </div>
    );
};

export default HomePage;
