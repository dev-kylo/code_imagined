import React from 'react';
import { H3 } from './headings.styled';
import { P } from './text.styled';
import { Flex, Box, Button} from 'rebass/styled-components';
import {
    Label,
    Input,
  } from '@rebass/forms/styled-components'
import styled from 'styled-components';

 const HoneyInput = styled.div`
    opacity: 0;
    visibility: hidden;
    position: absolute;
 ` 

const Form = (props) => (
    <>
    <H3 dark>Free email taster</H3>
    <P small dark style={{'margin-bottom': '1em'}}>The Syncer Program for learning JavaScript visually will launch again later this year, but in the meantime grab a <a style={{textDecoration: 'none'}} target="_blank" rel="noopener noreferrer" href="/posts/flying-ships-object-cloning-short-course">a tiny taster</a> of what is to come 🔥</P>
    <Box
        as='form'
        onSubmit={e => props.submit(e)}
        >
        <Flex flexDirection="column" mx={-2} mb={0}>
            <Box width={1} px={2}>
                <Label mb="0.4rem" htmlFor='name'>First Name</Label>
                <Input
                    id='fname'
                    name='fname'
                    required
                />
            </Box>
            <Box m="1rem 0" width={1} px={2}>
                <Label mb="0.4rem " htmlFor='name'>Last Name</Label>
                <Input
                    id='sname'
                    name='sname'
                    required
                />
            </Box>
            <Box width={1} px={2}>
            <Label mb="0.4rem" htmlFor='email'>Email</Label>
            <Input
                id='email'
                name='email'
                type='email'
                required
            />
            </Box>
            <HoneyInput>
                <Input
                    id='honey'
                    name='honey'
                    type='honey'
                />
            </HoneyInput>

            <Box px={2} ml='auto'>
                <Flex width="100%" justifyContent='center'>
                    <Button variant='signup' disabled={props.loading}>
                        Sign me up
                    </Button>
                </Flex>
            </Box>
        </Flex>
        </Box>
    </>
);

export default Form;