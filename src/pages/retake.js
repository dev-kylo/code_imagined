import React from "react"
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
import { Link } from "gatsby";


 const HoneyInput = styled.div`
    opacity: 0;
    visibility: hidden;
    height: 1px;
 ` 

const TextAreaInput = styled(Textarea)`
    border: 2px solid navy;
    color: #AB3428;
    font-size: 18px;
`

const Retake = () => {

    return (
        <Providers>
            <Drawer />
            <PageTitle>The updated short course</PageTitle>
            <TextContainer>
                <p>When The Great Sync started, it consisted of a scattered, unevenly spaced sequence of emails. This has been consolidated and thoroughly improved, with new video content and a cleaner, more readable blog format. You can read more about it <Link to="/posts/flying-ships-object-cloning-short-course">here</Link>.</p>
                <p>It does not tackle any new topics. It is still only meant to be a short introduction to learning javascript with the help of mnemonics.</p>
                <p> If you would like to enroll in the course, fill in the form below.</p>           
                <H2>Flying Ships & Object Cloning Short Course</H2>
                <Box
                    as='form'
                    data-netlify="true"
                    name="retake"
                    method="POST"
                    action="/retake-success"
                >
                        <input type="hidden" name="form-name" value="retake" />
                        <Flex flexDirection="column" mx={-2} mb={0}>
                            <Box width={1} px={2}>
                                <Label mb="0.4rem" htmlFor='email'>Email address</Label>
                                <Input
                                    id='email'
                                    name='email'
                                    required
                                />
                            </Box>
                            <Box m="1rem 0" width={1} px={2}>
                                <Label mb="0.4rem " htmlFor='fullname'>Full name</Label>
                                <Input
                                    id='fullname'
                                    name='fullname'
                                    required
                                />
                            </Box>
                            <Box m="1rem 0" width={1} px={2}>
                                <Label mb="0.4rem " htmlFor='reason'>Any particular reason you want to retake the short course?</Label>
                                <TextAreaInput
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
                                        Sign me up
                                    </Button>
                                </Flex>
                            </Box>
                        </Flex>
            </Box>
            
            </TextContainer>
            <SignUp />
            
        </Providers>
    )
}

export default Retake;