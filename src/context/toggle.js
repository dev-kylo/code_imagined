import React, { useState } from 'react';


export const SignupContext = React.createContext({
    visible: false,
    show: () => {},
    exit: () => {}
})

const ModalContext = (props) => {

    const [visibility, toggle] = useState(false);

    const showModal = () => {
        console.log('Modal is visible')
        toggle(true);
    }

    const exitModal = () => {
        toggle(false);
    }

    return (
        <SignupContext.Provider value={{visible: visibility, show: showModal, exit: exitModal}}>
            {props.children}
        </SignupContext.Provider>
    ) 

}

export default ModalContext;