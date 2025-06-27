/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect, useRef, useCallback } from 'react'
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
    const [visibility, setVisibility] = useState(false);
    const [play, toggleAnimations] = useState(true);
    const [activeInput, setActiveInput] = useState(false);
    const timer = useRef(null);

    const showModal = useCallback(() => {
        setVisibility(true)
    }, [])

    const setActiveUser = useCallback(() => {
        clearTimeout(timer.current)
        setActiveInput(true)
    }, [])

    useEffect(() => {
        if (!isBrowser()) return
        // Check search params
        const userId = getTokenFromURL('ck_subscriber_id', window.location.search)
        const checkIfAlreadyShown = localStorage.getItem('tgs-modal-shown') === 'true'
        if (!checkIfAlreadyShown && !userId && !activeInput) {
            timer.current = setTimeout(() => {
                showModal()
                clearTimeout(timer)
            }, 55000)
            localStorage.setItem('tgs-modal-shown', true)
        }
        return () => {
            clearTimeout(timer.current)
        }
    }, [])

    const toggleAnimate = useCallback(() => {
        toggleAnimations(!play)
    }, [play])

    const exitModal = useCallback(() => {
        setVisibility(false)
    }, [])

    return (
        <SignupContext.Provider
            value={{
                visible: visibility,
                show: showModal,
                exit: exitModal,
                animate: play,
                toggleAnimate,
                setActiveUser,
            }}
        >
            {children}
        </SignupContext.Provider>
    )
}

export default ModalContext
