import React from 'react';
import { Flex } from 'rebass';
import { H2 } from "./headings.styled";
import { P } from "./text.styled";


const FormResult = props => (
    <>
        <Flex flexDirection="column" >
            {props.heading? <H2 dark>{props.heading}</H2> : null}
            <P dark>{props.text}</P>
        </Flex>
    </>
)

export default FormResult;
