import React from 'react'
import { Flex, Box } from 'rebass/styled-components'
import { Label, Input } from '@rebass/forms/styled-components'
import styled from 'styled-components'
import { P } from '../../components/UI/text.styled'
import { H3 } from '../../components/UI/headings.styled'
import { Button } from '../../components/UI/button.styled'

export const HoneyInput = styled.div`
    opacity: 0;
    visibility: hidden;
    position: absolute;
`

const List = styled.ul`
    li {
        font-family: ${props => props.theme.fonts.par};
        color: ${props => (props.dark ? props.theme.colors.navy : props.theme.colors.white)};
        font-size: 16px;
        line-height: 28px;
        font-weight: bold;
    }
    margin-bottom: 1rem;
`

const SignUpForm = ({ loading, submit, centerBtn }) => (
    <>
        <H3 dark style={{ margin: 0, padding: 0 }}>
            Hey I'm Kylo 👋
        </H3>
        <P small dark style={{ fontSize: '16px', lineHeight: '24px' }}>
            I want to show you how to begin building a mental model of JavaScript. I will send you:
        </P>
        <List dark>
            <li>🏝️ The 3 Steps to Confidence</li>
            <li>🏝️ A 2024 Roadmap to JavaScript Professional</li>
            <li>🏝️ Intro to The Great Sync</li>
        </List>
        <Box as="form" onSubmit={e => submit(e)}>
            <Flex mx={-2} mb={3} mt={4} flexDirection={['column', 'row']}>
                <Box width={1} px={2}>
                    <Label mb="0.4rem" htmlFor="name">
                        First Name
                    </Label>
                    <Input id="fname" name="fname" required style={{ fontSize: '16px', padding: '0.5rem' }} />
                </Box>
                <Box width={1} px={2}>
                    <Label mb="0.4rem" htmlFor="name">
                        Last Name
                    </Label>
                    <Input id="sname" name="sname" required style={{ fontSize: '16px', padding: '0.5rem' }} />
                </Box>
            </Flex>
            <Flex flexDirection="column" mx={-2} mb={0}>
                <Box width={1} px={2}>
                    <Label mb="0.4rem" htmlFor="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        style={{ fontSize: '16px', padding: '0.5rem' }}
                    />
                </Box>
                <HoneyInput>
                    <Input id="H" name="H" type="honey" />
                </HoneyInput>

                <Box px={2} mt={4}>
                    <Flex width="100%" justifyContent="center">
                        <Button type="submit" color="yellow">
                            Sign me up
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    </>
)

export default SignUpForm
