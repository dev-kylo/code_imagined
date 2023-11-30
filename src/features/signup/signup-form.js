import React from 'react'
import { Flex, Box, Button } from 'rebass/styled-components'
import { Label, Input } from '@rebass/forms/styled-components'
import styled from 'styled-components'
import { P } from '../../components/UI/text.styled'
import { H3 } from '../../components/UI/headings.styled'

const HoneyInput = styled.div`
    opacity: 0;
    visibility: hidden;
    position: absolute;
`

const Form = ({ loading, submit }) => (
    <>
        <H3 dark>Hey I'm Kylo 👋</H3>
        <P small dark style={{ 'margin-bottom': '1em' }}>
            I want to show you how to begin building a mental model of JavaScript 🧠
        </P>
        <Box as="form" onSubmit={e => submit(e)}>
            <Flex flexDirection="column" mx={-2} mb={0}>
                <Box width={1} px={2}>
                    <Label mb="0.4rem" htmlFor="name">
                        First Name
                    </Label>
                    <Input id="fname" name="fname" required />
                </Box>
                <Box m="1rem 0" width={1} px={2}>
                    <Label mb="0.4rem " htmlFor="name">
                        Last Name
                    </Label>
                    <Input id="sname" name="sname" required />
                </Box>
                <Box width={1} px={2}>
                    <Label mb="0.4rem" htmlFor="email">
                        Email
                    </Label>
                    <Input id="email" name="email" type="email" required />
                </Box>
                <HoneyInput>
                    <Input id="honey" name="honey" type="honey" />
                </HoneyInput>

                <Box px={2} ml="auto">
                    <Flex width="100%" justifyContent="center">
                        <Button variant="signup" disabled={loading}>
                            Sign me up
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    </>
)

export default Form
