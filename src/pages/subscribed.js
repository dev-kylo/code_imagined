import React, { useState } from "react"
import '../utils/fontawesome';
import Providers from "../providers/Providers";
import PageTitle from "../components/UI/pageTitle.styled";
import styled from 'styled-components';
import Drawer from "../components/UI/drawer";
import SignUp from "../components/UI/signup.styled";
import { Flex, Box, Button} from 'rebass/styled-components';
import {
    Label,
    Input,
    Textarea
  } from '@rebass/forms/styled-components'
import { H2 } from "../components/UI/headings.styled";
import { TextContainer } from "../components/UI/textContainer";


  

 const HoneyInput = styled.div`
    opacity: 0;
    visibility: hidden;
    height: 1px;
 ` 


const Subscribed = () => {

    // const [experience, setExperience] = useState('');
    // const [goals, setGoals] = useState('');
    // const [reason, setReason] = useState('');


    return (
        <Providers>
            <Drawer />
            <PageTitle>You're subscribed!</PageTitle>
            <TextContainer>
                <p>Over the next few days I will be sending you a series of emails, where I will show you how to build a mental model 
                    with story and visual analogy, and introduce you to The Great Sync.
                </p>
                <p>Before you go, I WOULD love to hear from you and understand a bit more about your background and goals.</p>
                
                <H2>Tell me about you</H2>

                <Box
                    as='form'
                    data-netlify="true"
                    name="newsubscriber"
                    method="POST"
                    action="/thankyou"
                >
                        <input type="hidden" name="form-name" value="newsubscriber" />
                        <Flex flexDirection="column" mx={-2} mb={0}>
                            <Box width={1} px={2}>
                                <Label mb="0.4rem" htmlFor='name'>What is your level of experience with Javascript?</Label>
                                <Textarea
                                    id='experience'
                                    name='experience'
                                    rows="4"
                                    required
                                />
                            </Box>
                            <Box m="1rem 0" width={1} px={2}>
                                <Label mb="0.4rem " htmlFor='name'>What are your goals when it comes to learning Javascript?</Label>
                                <Textarea
                                    id='goals'
                                    name='goals'
                                    rows="4"
                                    required
                                />
                            </Box>
                            <Box m="1rem 0" width={1} px={2}>
                                <Label mb="0.4rem " htmlFor='name'>Why are you here? What drove you to look for visuals ways of learning?</Label>
                                <Textarea
                                    id='reason'
                                    name='reason'
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
                {/* <form data-netlify="true" name="newsubscriber" method="post" onSubmit={handleSubmit}>
                    
                    <input type="hidden" name="form-name" value="newsubscriber" />
                    
                    <label>What level of experience would you say you are?
                        <input name="experience" value={experience} type="text" onChange={(val) => setExperience(val)} />
                    </label>

                    <label>What are your goals when it comes to learning Javascript?
                        <input name="goals" type="text" value={goals} onChange={(val) => setGoals(val)} />
                    </label>

                    <label>What about what you have seen so far makes learning Javascript with visual analogy so exciting?
                        <input name="reason" type="text" value={reason} onChange={(val) => setReason(val)} />
                    </label>

                    <input type="submit"/>
                </form> */}
            
            
            </TextContainer>
            <SignUp />
            
        </Providers>
    )
}

export default Subscribed;