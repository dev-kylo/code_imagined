import React, { useContext } from 'react'
import { Flex } from '@mantine/core'
import { SignupContext } from '../../context/toggle'
import { Button } from '../../components/UI/button.styled'
import isBrowser from '../../utils/isBrowser'

export function getTokenFromURL(paramName) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(paramName)
}

export function checkForPermissionParam() {
    const isSigned = getTokenFromURL('token')
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

    if (checkForValidUser()) return children

    return (
        <>
            <h2 style={{ textAlign: 'center' }}> Coming Soon!</h2>
            <p style={{ textAlign: 'center' }}>
                This course has not released yet. You will be emailed as soon as it is, by subscribing below.
            </p>
            <Flex justify="center" mt={24}>
                <Button clicked={showSignUp}> Sign Up</Button>
            </Flex>
        </>
        // <>
        //     <h2 style={{ textAlign: 'center' }}> Sign up to gain access</h2>
        //     <p style={{ textAlign: 'center' }}>
        //         By signing up to The Great Sync you will gain access to this short course, PLUS get all the updates and
        //         news.
        //     </p>
        //     <p style={{ textAlign: 'center' }}>If you have already signed up, click the link in the email to access.</p>
        //     <Flex justify="center" mt={24}>
        //         <Button clicked={showSignUp}> Sign Up</Button>
        //     </Flex>
        // </>
    )
}

export default SignUpWall
