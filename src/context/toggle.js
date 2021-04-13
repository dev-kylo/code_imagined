import React, { useState } from 'react';


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