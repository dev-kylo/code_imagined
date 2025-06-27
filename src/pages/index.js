import React from 'react'
import Lander from '../features/lander/lander'
import SignUp from '../features/signup/signup'
import '../utils/fontawesome'
import Providers from '../providers/Providers'

import Testimonials from '../features/testimonials/testimonials'
import SEO from '../layout/seo'
import Offers from '../features/lander/offers/offers'

const Home = () => {
    return (
        <>
            <SEO />
            <Providers transparentNavBar>
                <Lander />
                <Testimonials />
                <Offers />
                <SignUp />
            </Providers>
        </>
    )
}

export default Home
