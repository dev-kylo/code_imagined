
import React, { useContext } from 'react';
import {SignupContext} from '../../context/toggle';
import { Flex, Button, Text, Box} from 'rebass/styled-components/';
// import Drawer from './drawer';
import { Label, Switch } from '@rebass/forms/styled-components';
import { Hl } from './text.styled';



const Nav = props => {


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
                opacity: `${props.scrollingDown? 0: 1}`,
                transform: `${props.scrollingDown? 'scaleY(0)': 'scaleY(1)'}`,
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
                <Button bg="red" sx={{marginLeft: '1em'}} onClick={() => showSignUp()}> Get Started</Button>
                <Flex>
                    <Label sx={{display: 'flex', alignItems: 'center'}}> 
                        <Text fontSize={[14, 14, 18, 18]}><Hl blue={animate? false: true}>Animations {animate? 'ON' : 'OFF'}</Hl></Text>
                        <Switch
                            color={animate? 'green' : 'red'}
                            checked={animate}
                            onClick={toggleAnimations}
                            sx={{ cursor: 'pointer' }}
                            m = '5px'
                        />
                    </Label>
                </Flex>
            </Flex>
        </Box>

    <Box height="3.5em"></Box>
    </>
)
};

export default Nav;

