import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Counter from '../../Components/Counter/Counter';
import AppsSection from '../../Components/Apps/AppsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Counter></Counter>
            <AppsSection></AppsSection>
        </div>
    );
};

export default Home;