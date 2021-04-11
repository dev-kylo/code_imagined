
import React, { useContext } from 'react';
import {SignupContext} from '../../context/toggle';
import { Flex, Image, Button} from 'rebass/styled-components/';
// import { Link } from "gatsby";


const Nav = props => {

    const showSignUp = useContext(SignupContext).show;

return (
    <Flex
        px={2}
        color='white'
        bg='red'
        height='3rem'
        width= '100%'
        justifyContent='space-between'
        alignItems="center">
        <Image
            src="https://blog.marketo.com/content/uploads/2018/07/GettyImages-643972462.jpg"
            sx={{
                width: '100px',
                borderRadius: 8,
            }}
            />
        <Button bg="navy" onClick={() => showSignUp()}> Sign Up </Button>
        {/* <Link variant='nav' href='#!'>
            Turn Animations Off
        </Link> */}
    </Flex>
)
};

export default Nav;