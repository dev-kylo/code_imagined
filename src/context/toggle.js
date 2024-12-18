/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react'
import isBrowser from '../utils/isBrowser'
import { getTokenFromURL } from '../utils/getTokenFromUrl'

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

    useEffect(() => {
        if (!isBrowser()) return
        // Check search params
        const userId = getTokenFromURL('ck_subscriber_id', window.location.search)
        const checkIfAlreadyShown = localStorage.getItem('tgs-modal-shown') === 'true'
        let timer
        if (!checkIfAlreadyShown && !userId) {
            timer = setTimeout(() => {
                showModal()
                clearTimeout(timer)
            }, 55000)
            localStorage.setItem('tgs-modal-shown', true)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [])

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
