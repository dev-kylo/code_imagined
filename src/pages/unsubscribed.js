import React, { useState } from "react"
import '../utils/fontawesome';
import Providers from "../providers/Providers";
import PageTitle from "../components/UI/pageTitle.styled";
import styled from 'styled-components';
import { TextContainer } from "../components/templates/post";
import Drawer from "../components/UI/drawer";
import SignUp from "../components/UI/signup.styled";

import { Flex, Box, Button} from 'rebass/styled-components';
import {
    Label,
    Input,
    Textarea
  } from '@rebass/forms/styled-components'
import { H2 } from "../components/UI/headings.styled";


  

 const HoneyInput = styled.div`
    opacity: 0;
    visibility: hidden;
    height: 1px;
 ` 


const UnSubscribed = () => {

    // const [experience, setExperience] = useState('');
    // const [goals, setGoals] = useState('');
    // const [reason, setReason] = useState('');


    return (
        <Providers>
            <Drawer />
            <PageTitle>You're unsubscribed!</PageTitle>
            <TextContainer>
                <p>I'm really sorry to see you go. Please can you let me know why you decided to unsubscribe, so I can make improvements to my content. Thank you!
                </p>

                <Box
                    as='form'
                    data-netlify="true"
                    name="unsubscribed"
                    method="POST"
                >
                        <input type="hidden" name="form-name" value="unsubscribed" />
                        <Flex flexDirection="column" mx={-2} mb={0}>
                            <Box width={1} px={2}>
                                <Label mb="0.4rem" htmlFor='improved'>What went wrong and how can I improve the content?</Label>
                                <Textarea
                                    id='improve'
                                    name='improve'
                                    rows="4"
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

                            <Box >
                                <Flex width="100%" justifyContent='center'>
                                    <Button variant='signup'>
                                        Submit
                                    </Button>
                                </Flex>
                            </Box>
                        </Flex>
            </Box>

                    
            </TextContainer>
            
        </Providers>
    )
}

export default UnSubscribed;