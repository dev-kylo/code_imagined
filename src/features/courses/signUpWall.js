import React, { useContext, useEffect, useState } from 'react'
import { Flex, Loader } from '@mantine/core'
import { SignupContext } from '../../context/toggle'
import { Button } from '../../components/UI/button.styled'
import isBrowser from '../../utils/isBrowser'
import { getTokenFromURL } from '../../utils/getTokenFromUrl'


export function checkForPermissionParam() {
    const isSigned = getTokenFromURL('token', window.location.search)
    if (isSigned && isSigned === process.env.GATSBY_USERTOKEN) {
        localStorage.setItem('tgs-user', process.env.GATSBY_USERTOKEN)
        return true
    }
    return false
}

export function checkForValidUser() {
    if (isBrowser()) {
        const user = localStorage.getItem('tgs-user') === process.env.GATSBY_USERTOKEN
        if (!user) return checkForPermissionParam()
        return true
    }
    return false
}

const SignUpWall = ({ children }) => {
    const showSignUp = useContext(SignupContext).show
    const [isChecking, setIsChecking] = useState(true)
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if (!isValid) {
            if (checkForValidUser()) setIsValid(true)
        }
        setIsChecking(false)
    }, [isValid])

    if (isChecking)
        return (
            <Flex justify="center" mt={24}>
                <Loader color="red" size="xl" />
            </Flex>
        )

    if (isValid) return children

    return (
        <>
            <h2 style={{ textAlign: 'center' }}> Sign up to gain access</h2>
            <p style={{ textAlign: 'center' }}>
                By signing up to The Great Sync you will gain access to this short course, PLUS get all updates and
                news.
            </p>
            <p style={{ textAlign: 'center' }}>
                If you have already signed up, click the link in the email originally sent to you.
            </p>
            <Flex justify="center" mt={24}>
                <Button clicked={showSignUp}> Sign Up</Button>
            </Flex>
        </>
    )
}

export default SignUpWall
