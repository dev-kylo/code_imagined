
import React, { useContext } from 'react';
import {SignupContext} from '../../context/toggle';
import { Flex, Button, Text, Box} from 'rebass/styled-components/';
import { Label, Switch } from '@rebass/forms/styled-components';
import { Hl } from './text.styled';
import { DesktopDisplay } from './containers.styled';
import { MenuContext } from '../../context/menuContext';



const Nav = props => {

    const {openMenu, menuIsOpen} = useContext(MenuContext);
    const showSignUp = useContext(SignupContext).show;
    const animate = useContext(SignupContext).animate;
    const toggleAnimations = useContext(SignupContext).toggleAnimate;   

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
                <div>
                        <Button bg="blue" sx={{marginLeft: '1em'}} onClick={() => openMenu()}> {!menuIsOpen? 'Menu' : 'Close'}</Button>
                        {!menuIsOpen && <Button bg="red" sx={{marginLeft: '1em'}} onClick={() => showSignUp()}> Subscribe and Learn</Button>}
                </div>
                       <DesktopDisplay > 
                            <Flex >
                            <Text fontSize={[14, 14, 18, 18]}><Hl blue={!animate}>Animations {animate? 'ON' : 'OFF'}</Hl></Text>
                                <Label sx={{display: 'flex', alignItems: 'center', width: '4em'}}> 
                                    <Switch
                                        color={animate? 'green' : 'red'}
                                        checked={animate}
                                        onClick={toggleAnimations}
                                        sx={{ cursor: 'pointer' }}
                                        m='5px'
                                    />
                                </Label>
                            </Flex>
                    </DesktopDisplay>
            </Flex>
        </Box>

    <Box height="3.5em"></Box>
    </>
)
};

export default Nav;

