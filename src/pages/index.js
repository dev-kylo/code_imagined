import React, { useContext, useEffect } from 'react'
import Lander from '../features/lander/lander'
import SignUp from '../features/signup/signup'
import '../utils/fontawesome'
import Providers from '../providers/Providers'

import Testimonials from '../features/testimonials/testimonials'
import { SignupContext } from '../context/toggle'
import SEO from '../layout/seo'
import Offers from '../features/lander/offers/offers'

const Home = () => {
    const showSignUp = useContext(SignupContext).show

    useEffect(() => {
        const checkIfAlreadyShown = localStorage.getItem('tgs-modal-shown') === 'true'
        let timer
        if (!checkIfAlreadyShown) {
            timer = setTimeout(() => {
                showSignUp()
                localStorage.setItem('tgs-modal-shown', true)
            }, [30000])
        }
        return () => {
            clearTimeout(timer)
        }
    }, [showSignUp])

    return (
        <>
            <SEO />
            <Providers transparentNavBar>
                <Lander />
                <Testimonials />
                {/* <ExplainerCard /> */}
                <Offers />
                <SignUp />
            </Providers>
        </>
    )
}

export default Home
