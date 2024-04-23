import React, { useEffect, useState } from 'react'
import '../utils/fontawesome'
import styled from 'styled-components'
import { Flex, Box, Button } from 'rebass/styled-components'
import { Label, Input, Textarea } from '@rebass/forms/styled-components'
import { Checkbox, Group } from '@mantine/core'
import Providers from '../providers/Providers'
import PageTitle from '../components/UI/pageTitle.styled'
import SignUp from '../features/signup/signup.styled'
import { TextContainer } from '../components/layout/containers/textContainer'
import { H2 } from '../components/UI/headings.styled'
import SEO from '../layout/seo'
import isBrowser from '../utils/isBrowser'
import { getTokenFromURL } from '../utils/getTokenFromUrl'

const HoneyInput = styled.div`
    opacity: 0;
    visibility: hidden;
    height: 1px;
`

const Subscribed = () => {
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        if (isBrowser()) {
            const id = getTokenFromURL('ck_subscriber_id', window.location.search)
            if (id) setUserId(id)
            //  else navigate('/');
        }
    }, [])

    return (
        <>
            <SEO
                title="Successful Subscription"
                description="You are successfully subscribed to The Great Sync newsletter and updates."
            />
            <Providers>
                <PageTitle>You're subscribed!</PageTitle>
                <TextContainer style={{ maxWidth: '900px', margin: 'auto' }}>
                    <p>
                        Over the next few days I will show you how to build a mental model with story and visual
                        analogy, and introduce you to The Great Sync.
                    </p>
                    <p>
                        Before you go check your emails, I WOULD love to hear from you and understand a bit more about
                        your background and goals.
                    </p>

                    <H2>Your JavaScript journey so far</H2>

                    <Box as="form" data-netlify="true" name="newsubscriber" method="POST" action="/thankyou">
                        <input type="hidden" name="form-name" value="newsubscriber" />
                        <Flex flexDirection="column" mx={-2} mb={0}>
                            <Box width={1} px={2} pb={4}>
                                <Label mb="0.4rem" htmlFor="experience">
                                    Which statements are true?
                                </Label>

                                <Group mt="lg">
                                    <Checkbox
                                        value="true"
                                        id="raw_beginner"
                                        name="raw_beginner"
                                        label="I am a raw beginner "
                                    />
                                    <Checkbox
                                        value="true"
                                        id="struggle_syntax"
                                        name="struggle_syntax"
                                        label="I struggle with syntax"
                                    />
                                    <Checkbox
                                        value="true"
                                        id="attended_bootcamp"
                                        name="attended_bootcamp"
                                        label="I attended a bootcamp"
                                    />
                                    <Checkbox
                                        value="true"
                                        id="react_no_confidence"
                                        name="react_no_confidence"
                                        label="I know React but lack confidence"
                                    />
                                    <Checkbox
                                        value="true"
                                        id="tutorial-hell"
                                        name="tutorial-hell"
                                        label="I am in tutorial hell"
                                    />
                                    <Checkbox
                                        value="true"
                                        id="career-transition"
                                        name="career-transition"
                                        label="I am career transitioning"
                                    />
                                    <Checkbox
                                        value="true"
                                        id="cant_build_own_app"
                                        name="cant_build_own_app"
                                        label="I can't build without a tutorial"
                                    />
                                    <Checkbox
                                        value="true"
                                        id="applying_jobs"
                                        name="applying_jobs"
                                        label="I am applying for jobs"
                                    />
                                </Group>
                            </Box>
                            <Box m="1rem 0" width={1} px={2}>
                                <Label mb="0.4rem " htmlFor="goals">
                                    What is your goal in the next 3-4 weeks? Try be specific.
                                </Label>
                                <Textarea id="goals" name="goals" rows="4" required />
                            </Box>
                            <Box m="1rem 0" width={1} px={2}>
                                <Label mb="0.4rem " htmlFor="reason">
                                    Why are you here? What drove you to look for visuals ways of learning?
                                </Label>
                                <Textarea id="reason" name="reason" rows="4" required />
                            </Box>

                            <Textarea
                                id="userid"
                                name="userid"
                                rows="1"
                                value={userId}
                                hidden
                                style={{ display: 'none' }}
                            />
                            <Textarea
                                id="account"
                                name="account"
                                rows="1"
                                value={`https://app.convertkit.com/subscribers/${userId}`}
                                hidden
                                style={{ display: 'none' }}
                            />

                            <HoneyInput>
                                <Input id="honey" name="honey" type="honey" />
                            </HoneyInput>
                            <Box>
                                <Flex width="100%" justifyContent="center">
                                    <Button variant="signup">Submit</Button>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </TextContainer>
                <SignUp />
            </Providers>
        </>
    )
}

export default Subscribed
