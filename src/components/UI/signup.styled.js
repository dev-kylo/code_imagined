
import React, { useContext } from 'react';
import { H2 } from './headings.styled';
import { P } from './text.styled';
import { Flex, Box, Button} from 'rebass/styled-components';
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';
import {
    Label,
    Input,
  } from '@rebass/forms/styled-components'
import Modal from './modal.styled';
import { SignupContext } from '../../context/toggle';
import styled from 'styled-components';


const MageContainer = styled.div`
    position: absolute;
    bottom: 50%;
    transform: translate(20%, 50%) scale(1.2);
    objectFit: cover;
    z-index: 1000;
    width: 100%;

    @media (max-width: 500px){
        // position: initial;
        // left: 50%;
        // transform: translate(-50%,50%) scale(0.8);
        display: none;
    }

`


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
        <MageContainer>
            <Img fluid={mageFunk.file.childImageSharp.fluid} alt="Mage Funk character with an invocation orb" />
        </MageContainer>
    )
}

const SignUp = (props) => {

const visible = useContext(SignupContext).visible;
const exit = useContext(SignupContext).exit;
    
    return (
        <Modal show={visible} exit={() => exit()}>
            <Flex flexWrap="wrap">
                <Box bg="black" height={['0%', '0%', '100%','100%']} width={[1,1,1/3, 1/3]}  sx={{ position: 'absolute', bottom: '0', left: '0'}}>
                    <MageFunk />
                </Box>
                <Box width={[1,1, 1/3, 1/3]}></Box>
                <Box p="1rem" pl={['0', '0', '0.5rem', '2rem']} width={[1, 1, 2/3, 2/3]} >
                    <H2 dark>The Great Sync is waiting</H2>
                    <P small dark>Enter this world with me and explore Javascript.</P>
                    <P small dark>Sign up for an introduction to The Great Sync.</P>
                    <Box
                        as='form'
                        onSubmit={e => e.preventDefault()}
                        py={3}>
                        <Flex flexDirection="column" mx={-2} mb={3}>
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