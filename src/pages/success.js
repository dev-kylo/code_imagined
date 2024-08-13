import React from 'react'
import '../utils/fontawesome'
import { Flex } from 'rebass'
import { navigate } from 'gatsby'
import Providers from '../providers/Providers'
import PageTitle from '../components/UI/pageTitle.styled'
import { TextContainer } from '../components/layout/containers/textContainer'
import SEO from '../layout/seo'
import { Button } from '../components/UI/button.styled'

const Success = () => {
    const isBrowser = typeof window !== 'undefined'
    let msg = ''
    if (isBrowser) {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        msg = urlParams.get('msg')
    }

    return (
        <>
            <SEO title="Successful submission" />
            <Providers>
                <PageTitle postTitle>Thank you for submitting!</PageTitle>
                <TextContainer>
                    <p>{decodeURIComponent(msg)}</p>
                    <Flex width="100%" justifyContent="center">
                        <Button variant="signup" clicked={() => navigate(-1)}>
                            Go back
                        </Button>
                    </Flex>
                </TextContainer>
            </Providers>
        </>
    )
}

export default Success
