import React, { useContext, useEffect } from 'react'
import Lander from '../features/lander/lander'
import SignUp from '../features/signup/signup'
import '../utils/fontawesome'
import Providers from '../providers/Providers'

import Testimonials from '../features/testimonials/testimonials'
import { SignupContext } from '../context/toggle'
import SEO from '../layout/seo'
import ExplainerCard from '../features/lander/profileCard/explainerCard'
import Offers from '../features/lander/offers/offers'
import Footer from '../components/layout/footer/footer.styled'

const Home = () => {
    const showSignUp = useContext(SignupContext).show

    useEffect(() => {
        const checkIfAlreadyShown = localStorage.getItem('tgs-modal-shown') === 'true'
        if (!checkIfAlreadyShown) {
            showSignUp()
            // localStorage.setItem("tgs-modal-shown", true);
        }
    }, [showSignUp])

    return (
        <>
            <SEO />
            <Providers>
                <Lander />
                <Testimonials />
                <ExplainerCard />
                <Offers />
                <SignUp />
                <Footer />
            </Providers>
        </>
    )
}

export default Home
