
import React, { useContext } from 'react';
import { H2 } from './headings.styled';
import { Flex, Box, Button, Text } from 'rebass/styled-components';

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';
import {
    Label,
    Input,
  } from '@rebass/forms/styled-components'
import Modal from './modal.styled';
import { SignupContext } from '../../context/toggle';


const MageFunk = () => {
    const mageFunk = useStaticQuery(graphql`
        query mage {
            file(relativePath: { eq: "mage.png" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    `)
    return (
        <Img fluid={mageFunk.file.childImageSharp.fluid} alt="Mage Funk character with an invocation orb" />
    )
}

const SignUp = (props) => {

const visible = useContext(SignupContext).visible;
const exit = useContext(SignupContext).exit;
    
    return (
        <Modal show={visible} exit={() => exit()}>
            <Flex flexWrap="wrap">
                <Box bg="black" height="100%" width={[1, 1/3]}  sx={{ position: 'absolute', bottom: '0', left: '0'}}>
                    <Box width="100%"  sx={{
                        position: 'absolute',
                        bottom: '50%',
                        transform: 'translate(20%, 50%) scale(1.2)',
                        objectFit: "cover"
                    }}>
                        <MageFunk />
                    </Box>
                </Box>
                <Box width={[1, 1/3]}></Box>
                <Box p="1rem" pl="2rem" width={[1, 2/3]} >
                    <H2 dark>Take this journey with me</H2>
                    <Text color="navy" variant="signup">Explore javascript in a whole new way. Get to know it DEEPLY.</Text>
                    <Text color="navy" variant="signup">Be able to look at any Js code you write or read, and break it down piece by piece.</Text>


                    <Box
                        as='form'
                        onSubmit={e => e.preventDefault()}
                        py={3}>
                        <Flex flexDirection="column" mx={-2} mb={3}>
                            <Box m="1rem 0" width={1} px={2}>
                                <Label m="0.4rem 0" htmlFor='name'>Name</Label>
                                <Input
                                    id='name'
                                    name='name'
                                    defaultValue='Jane Doe'
                                />
                            </Box>
                            <Box width={1} px={2}>
                            <Label m="0.4rem 0" htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                name='email'
                                defaultValue='email'
                            />
                            </Box>
                            <Box px={2} ml='auto'>
                                <Flex width="100%" justifyContent='center'>
                                    <Button variant='signup'>
                                        Let's do it
                                    </Button>
                                </Flex>
                            </Box>
                        </Flex>
                        </Box>
                </Box>
            </Flex>
        </Modal>
)
                };

export default SignUp;