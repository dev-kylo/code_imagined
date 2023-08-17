/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useCallback, useState } from 'react'

export const MenuContext = React.createContext({
    visible: false,
    show: () => {},
    exit: () => {},
    animate: true,
    toggleAnimate: () => {},
})

const MenuProvider = ({ children }) => {
    const [isOpen, setOpen] = useState(false)

    const openHandler = useCallback(() => {
        setOpen(true)
    }, [])

    const closeHandler = useCallback(() => {
        setOpen(false)
    }, [])

    return (
        <MenuContext.Provider
            value={{
                openMenu: openHandler,
                closeMenu: closeHandler,
                menuIsOpen: isOpen,
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider
