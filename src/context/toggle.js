/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react'

export const SignupContext = React.createContext({
    visible: false,
    show: () => {},
    exit: () => {},
    animate: true,
    toggleAnimate: () => {},
})

const ModalContext = ({ children }) => {
    const [visibility, setVisibility] = useState(false)
    const [play, toggleAnimations] = useState(true)

    const showModal = () => {
        setVisibility(true)
    }

    const signUpPopup = () => {
        const checkIfAlreadyShown = localStorage.getItem('tgs-modal-shown') === 'true'
        if (!checkIfAlreadyShown) {
            const timer = setTimeout(() => {
                showModal()
                clearTimeout(timer)
            }, 15000)
            localStorage.setItem('tgs-modal-shown', true)
        }
    }

    useEffect(() => signUpPopup(), [])

    const toggleAnimate = () => {
        toggleAnimations(!play)
    }

    const exitModal = () => {
        setVisibility(false)
    }

    return (
        <SignupContext.Provider
            value={{
                visible: visibility,
                show: showModal,
                exit: exitModal,
                animate: play,
                toggleAnimate,
            }}
        >
            {children}
        </SignupContext.Provider>
    )
}

export default ModalContext
