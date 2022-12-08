import React, { useState } from 'react';


export const MenuContext = React.createContext({
    visible: false,
    show: () => {},
    exit: () => {},
    animate: true,
    toggleAnimate: () => {},

})

const MenuProvider = (props) => {

    const [isOpen, setOpen] = useState(false);

    const openHandler = () => {
      setOpen(!isOpen);
    };

    const closeHandler = () => {
      setOpen(false);
    }


    return (
        <MenuContext.Provider value={{
            openMenu: openHandler,
            closeMenu: closeHandler,
            menuIsOpen: isOpen
        }}>
                {props.children}
        </MenuContext.Provider>
    ) 

}

export default MenuProvider;