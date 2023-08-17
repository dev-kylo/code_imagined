import React, { useContext, useEffect } from 'react'
import Intro from '../features/lander/intro'
import Lander from '../features/lander/lander'
import SignUp from '../features/signup/signup.styled'
import '../utils/fontawesome'
import Providers from '../providers/Providers'
import Drawer from '../components/layout/sidenav/drawer'
import Testimonials from '../features/testimonials/testimonials'
import { SignupContext } from '../context/toggle'

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
        <Providers>
            <Drawer />
            <Lander />
            <Testimonials />
            <Intro />
            <SignUp />
        </Providers>
    )
}

export default Home
