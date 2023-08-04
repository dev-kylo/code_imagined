
import React, { useContext } from 'react';
import {SignupContext} from '../../context/toggle';
import { Flex, Button, Box} from 'rebass/styled-components/';
import { MenuContext } from '../../context/menuContext';
import HomeButton from './homeButton';
import styled from 'styled-components';
import { DesktopDisplay } from './containers.styled';

const NavBtns = styled.div`
    @media(max-width: 780px){
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`

const Nav = props => {

    const {openMenu, menuIsOpen} = useContext(MenuContext);
    const showSignUp = useContext(SignupContext).show;

return (
    <>
        <Box height="3.5em" sx={{
                position: 'fixed',
                top: '0',
                bg:'black',
                zIndex: '10000000',
                width: '100%',
                transformOrigin: 'top',
                transition: 'opacity 1s,  transform 1s',
        }}>
            <Flex
                px={2}
                color='white'
                bg='transparent'
                justifyContent='space-between'
                alignItems="center"
                height="100%">
            
                {/* <Box></Box> */}
                <NavBtns>
                        <HomeButton />
                        {!menuIsOpen && <Button bg="red" sx={{marginLeft: '1em'}} onClick={() => showSignUp()}> FREE Email Taster</Button>}
                </NavBtns>
                <DesktopDisplay>
                {/* <span style={{fontSize: '1.3rem', fontWeight: 'bold'}}>🚀 Launching <span style={{fontSize: '1.8rem'}}>30 July</span> 🚀</span> */}
                </DesktopDisplay>
                <DesktopDisplay>
                    <Button bg="blue" sx={{marginRight: '1em'}} onClick={() => openMenu()}> {!menuIsOpen? 'Menu' : 'Close'}</Button></DesktopDisplay> 

            </Flex>
        </Box>

    <Box height="3.5em"></Box>
    </>
)
};

export default Nav;

