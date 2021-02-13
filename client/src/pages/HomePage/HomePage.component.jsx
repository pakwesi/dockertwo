import React from 'react';
import styled from 'styled-components';

import IntroSection from '../../components/HomePageComponent/IntroSection';
import HeaderSection from '../../components/HomePageComponent/HeaderSection';
import TextSection from '../../components/HomePageComponent/TextSection';
import ServiceCards from '../../components/HomePageComponent/ServiceCards';
import PriceCards from '../../components/HomePageComponent/PriceCards';
import GallerySection from '../../components/HomePageComponent/GallerySection';
import TextAniSection from '../../components/HomePageComponent/TextAniSection';
import InformationSection from '../../components/HomePageComponent/InfomationSection';
import DesignInfoSection from '../../components/HomePageComponent/DesignInfoSection';
import TextDance from '../../components/HomePageComponent/TextDance';
import VideoDance from '../../components/HomePageComponent/VideoDance';
import Register from '../../components/Auth/Register';


const HomePage = () => {
    return (
        <div>
        <HeaderSection />
        <TextSection />
        <IntroSection />
        <InformationSection />
        <TextDance />
        <DesignInfoSection />
        <TextAniSection />
        <PriceCards />
        <VideoDance />
        </div>
    )
}

export default HomePage;

