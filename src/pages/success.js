import React from 'react'
import '../utils/fontawesome'
import { Flex } from 'rebass'
import { navigate } from 'gatsby'
import { Loader } from '@mantine/core'
import Providers from '../providers/Providers'
import PageTitle from '../components/UI/pageTitle.styled'
import { TextContainer } from '../components/layout/containers/textContainer'
import SEO from '../layout/seo'
import { Button } from '../components/UI/button.styled'
import { Copy } from '../components/layout/containers/containers.styled'

const Success = () => {
    const isBrowser = typeof window !== 'undefined'
    let msg = ''
    if (isBrowser) {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const successMessage = urlParams.get('msg')
        msg = successMessage ? decodeURIComponent(successMessage) : 'Thank you for your submitting, I appreciate you!'
    }

    return (
        <>
            <SEO title="Successful submission" />
            <Providers>
                <PageTitle postTitle>Thank you for submitting!</PageTitle>
                <Copy>
                    <TextContainer>
                        {!msg && (
                            <Flex width="100%" justifyContent="center">
                                <Loader color="red" size="xl" />
                            </Flex>
                        )}
                        <p>{msg}</p>
                        <Flex width="100%" justifyContent="center">
                            <Button variant="signup" clicked={() => navigate('/')}>
                                Back to the home page
                            </Button>
                            {/* <Button color="yellow" type="external" link="https://www.youtube.com/watch?v=SmomuyZuDwc">
                                Watch me improve this function
                            </Button> */}
                        </Flex>
                    </TextContainer>
                </Copy>
            </Providers>
        </>
    )
}

export default Success
