
import React, { useContext } from 'react';
import {SignupContext} from '../../context/toggle';
import { Flex, Button, Text, Box} from 'rebass/styled-components/';
// import Drawer from './drawer';
import { Label, Switch } from '@rebass/forms/styled-components';


const Nav = props => {

    const showSignUp = useContext(SignupContext).show;
    const animate = useContext(SignupContext).animate;
    const toggleAnimations = useContext(SignupContext).toggleAnimate;   
    console.log('Animations are changing')
    console.log(animate)
return (
    <>
    {/* <Drawer></Drawer> */}
    <Box height="3.5em"></Box>
    <Flex
        px={2}
        color='white'
        bg='transparent'
        height="3.5em"
        width= '100%'
        justifyContent='space-between'
        sx={{
            position: 'fixed',
            top: '0',
            zIndex: '10000000'
        }}
        alignItems="center">
        {/* <Box></Box> */}
        <Button bg="red" onClick={() => showSignUp()}> Sign Up </Button>
        <Flex>
            <Label> 
                <Text>Animations On</Text>
                <Switch
                    checked={animate}
                    onClick={toggleAnimations}
                    // sx={{ width: "60px", height: "25px" }}
                />
            </Label>
        </Flex>
    </Flex>
    </>
)
};

export default Nav;
