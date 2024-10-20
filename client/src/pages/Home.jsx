import React from 'react'
import Hero from '../sections/Hero'
import HomeCustomize from '../sections/HomeCustomize'
import HomeTrending from '../sections/HomeTrending'
import HomeOverlays from '../sections/HomeOverlays'
import HomeProductSelection from '../sections/HomeProductSelection'
import HomeTab from '../sections/HomeTab'
import HomeCatalogue from '../sections/HomeCatalogue'
import HomeServices from '../sections/HomeServices'
import HomePartners from '../sections/HomePartners'

const Home = () => {
    return (
        <>
            <Hero />
            <HomeCustomize />
            <HomeTrending />
            <HomeOverlays />
            <HomeProductSelection />
            <HomeTab />
            <HomeCatalogue />
            <HomeServices />
            <HomePartners />
        </>
    )
}

export default Home