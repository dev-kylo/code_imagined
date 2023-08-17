import React from 'react'
import { Flex } from 'rebass'
import { H2 } from '../../components/UI/headings.styled'
import { P } from '../../components/UI/text.styled'

const FormResult = ({ heading, text }) => (
    <Flex flexDirection="column">
        {heading ? <H2 dark>{heading}</H2> : null}
        <P dark>{text}</P>
    </Flex>
)

export default FormResult
