import React, { useState } from 'react';
import { useEffect } from 'react';


export const SignupContext = React.createContext({
    visible: false,
    show: () => {},
    exit: () => {},
    animate: true,
    toggleAnimate: () => {},

})

const ModalContext = (props) => {

    const [visibility, toggle] = useState(false);
    const [play, toggleAnimations] = useState(true);

    const showModal = () => {
        toggle(true);
    }

    
  const signUpPopup = () => {
    const checkIfAlreadyShown = localStorage.getItem("tgs-modal-shown") === 'true';
    console.log('Sing up')
    if(!checkIfAlreadyShown){

        const timer = setTimeout(() => {
            showModal();
            clearTimeout(timer);
        }, 15000)
        localStorage.setItem("tgs-modal-shown", true);
    }
  }

    useEffect(() => signUpPopup(), [])

 
    const toggleAnimate = () => {
        console.log('toggling animations')
        toggleAnimations(!play);
     
    };

    const exitModal = () => {
        toggle(false);
    }

    return (
        <SignupContext.Provider value={{
            visible: visibility, 
            show: showModal, 
            exit: exitModal,
            animate: play,
            toggleAnimate
        }}>
                {props.children}
        </SignupContext.Provider>
    ) 

}

export default ModalContext;