import React from 'react'
import { Flex } from 'rebass/styled-components'
import Providers from '../../providers/Providers'
import PageTitle from '../../components/UI/pageTitle.styled'

import { H2 } from '../../components/UI/headings.styled'
import DownloadLink from '../../components/UI/downloadLink.styled'
import SignUp from '../../features/signup/signup'
import { TextContainer } from '../../components/layout/containers/textContainer'
import SignUpWall from '../../features/courses/signUpWall'

const Thankyou = () => {
    const content = (
        <>
            <H2>Download your PDF roadmap to becoming a JavaScript professional</H2>
            <p>
                I have refined this roadmap over multiple years of teaching and working in the industry. It is a
                guideline, not a set path, for the optimal learning experience.
            </p>

            <p>I hope it helps you on your journey, whichever stage you are in.</p>

            <p>
                Email me your thoughts at kylo@thegreatsync.com, or DM me on{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/devkylo/">
                    Instagram
                </a>
            </p>
            <SignUpWall>
                <Flex justifyContent="center" marginTop="2rem">
                    <DownloadLink href={process.env.GATSBY_ROADMAP_DOWNLOAD_LINK} download>
                        Download the PDF
                    </DownloadLink>
                </Flex>
            </SignUpWall>
        </>
    )

    return (
        <Providers>
            <PageTitle>A Roadmap to JavaScript Professional</PageTitle>
            <TextContainer>{content}</TextContainer>
            <SignUp />
        </Providers>
    )
}

export default Thankyou
