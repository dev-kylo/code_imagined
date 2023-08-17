import React, { useContext } from 'react'
import { Flex } from 'rebass/styled-components'
import { Button } from '../../components/UI/button.styled'
import { SignupContext } from '../../context/toggle'

const SignUpContainerButton = () => {
    const showSignUp = useContext(SignupContext).show

    return (
        <Flex justifyContent="center">
            <Button center clicked={showSignUp}>
                Sign Up
            </Button>
        </Flex>
    )
}

export default SignUpContainerButton
