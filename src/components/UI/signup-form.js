import React from 'react';
import { H3 } from './headings.styled';
import { P } from './text.styled';
import { Flex, Box, Button} from 'rebass/styled-components';
import {
    Label,
    Input,
  } from '@rebass/forms/styled-components'

const Form = (props) => (
    <>
    <H3 dark>The Great Sync is waiting</H3>
    <P small dark style={{'margin-bottom': '1em'}}>Sign up to take your first steps into this world.</P>
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
            <Box px={2} ml='auto'>
                <Flex width="100%" justifyContent='center'>
                    <Button variant='signup'>
                        Sign up
                    </Button>
                </Flex>
            </Box>
        </Flex>
        </Box>
    </>
);

export default Form;