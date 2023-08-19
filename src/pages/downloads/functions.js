import React from 'react'
import { Flex } from 'rebass/styled-components'
import Providers from '../../providers/Providers'
import PageTitle from '../../components/UI/pageTitle.styled'

import { H2 } from '../../components/UI/headings.styled'
import DownloadLink from '../../components/UI/downloadLink.styled'
import SignUp from '../../features/signup/signup.styled'
import { TextContainer } from '../../components/layout/containers/textContainer'

const Thankyou = () => {
    let authorised = ''
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) {
        const urlParams = new URLSearchParams(window.location.search)
        authorised = urlParams.get('tkn')
    }

    let content = (
        <>
            <H2>This guide is free for subscribers</H2>
            <p>
                {' '}
                If you are a subscriber, look for an email from me about a free guide to functions. Please note, this is
                only emailed to you once you have completed the short email course.
            </p>
            <p> If you are not a subscriber, and would like to access this guide, please subscribe above.</p>
        </>
    )

    if (authorised === process.env.GATSBY_FUNCTIONS_DOWNLOAD_TOKEN) {
        content = (
            <>
                <H2>My gift to you</H2>
                <p>
                    I have worked really hard to make this guide as useful and informative as possible. I would love and
                    appreciate any feedback - good or bad.
                </p>

                <p>
                    Email me your thoughts at kylo@thegreatsync.com, or DM me on{' '}
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/kylorobs">
                        {' '}
                        Twitter
                    </a>{' '}
                    or{' '}
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/devkylo/">
                        Instagram
                    </a>
                </p>
                <Flex justifyContent="center">
                    <DownloadLink href={process.env.GATSBY_FUNCTIONS_DOWNLOAD_LINK} download>
                        A Visual Memory Model for Functions - pdf, 3MB
                    </DownloadLink>
                </Flex>
            </>
        )
    }

    return (
        <Providers>
            <PageTitle>A Visual Memory Model For Functions</PageTitle>
            <TextContainer>{content}</TextContainer>
            <SignUp />
        </Providers>
    )
}

export default Thankyou
