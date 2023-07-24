import React, { useContext } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { H1, H2 } from '../../components/UI/headings.styled';
import { P } from '../../components/UI/text.styled';
import styled from 'styled-components';
import { DesktopDisplay, MobileDisplay} from '../../components/UI/containers.styled';
import { SignupContext } from '../../context/toggle';
import { Flex } from 'rebass/styled-components';
import {Button} from '../../components/UI/button.styled';

const Logo = styled.div`
    width: 160px;
    height: auto;
    display: block;
    margin: 2em auto;

    @media (min-width: 600px){
        width: 180px;
        height: auto;
        float: right;
        display: block;
        margin: 3em 3em 0 0;
    }
`
export  const Title = styled.div`
    display: inline-block;
    padding: 0.5em;
    padding-top: 0;
    z-index: 100;
    & h1 {
        margin-top: 0;
    }

    @media(min-width: 600px){
        padding: 2em;
        // padding-top: 1em;
    }

    @media (min-width: 1500px){
        padding: 2em;
    }


    @media (min-width: 1800px){
        margin-top: 2rem;
        padding: 2em;
    }
`

const Container = styled.section`
    max-width: 100%;

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

const SubHeading = styled.span`
    display: block;
    margin-top: 1rem; 
    font-size: 2rem!important;
    color: white;
    text-align: center;
    line-height: 35px;

    @media (min-width: 780px){
        font-size: 1.5rem;
    }
`



const Intro = props => {

    const showSignUp = useContext(SignupContext).show;

    if (props.mobile){
        return (
        <MobileDisplay>
            <Container>
                    <Logo>
                        <StaticImage
                            src="../../images/small_logo.png"
                            alt="The Execution Stack - a stack of isles with waterfalls"
                            placeholder="blurred"
                            fullWidth
                        />
                    </Logo>
                    <Title>
                        <H1>The Great Sync <SubHeading>- visual & memorable JavaScript</SubHeading></H1>
                                            
                        <Flex justifyContent="center">
                            <Button center clicked={showSignUp}>🚀Join the waiting list🚀</Button>
                        </Flex>
                    </Title>
            </Container>
        </MobileDisplay>
        )
    }
    else {
        return (
            <Container>
                <DesktopDisplay>
                    <Logo>
                        <StaticImage
                            src="../../images/small_logo.png"
                            alt="The Execution Stack - a stack of isles with waterfalls"
                            placeholder="blurred"
                            fullWidth
                        />
                    </Logo>
                </DesktopDisplay>
                <Title>
                    <DesktopDisplay>
                        <H1 style={{textAlign: 'center'}}>Frustrated by JavaScript?</H1>
                        <SubHeading>
                            Introducing <span style={{color: '#ab3528', fontWeight: 'bold'}}>The Syncer Program</span> - Level Up With Visual & Memorable JavaScript
                            </SubHeading>
                    </DesktopDisplay>
                    <MobileDisplay>
                        <H2> Build a foundation</H2>
                    </MobileDisplay>
                    <P style={{maxWidth: '600px', textAlign: 'center', margin: '1rem auto'}}>Join the flagship learning experience to help you finally see the big picture and be confident with JavaScript!</P>
                    
                    <Flex justifyContent="center">
                    <Button center clicked={showSignUp}>🚀Join the waiting list🚀</Button>
                    </Flex>
                    
                    {/* <Box
                        sx={{
                            display: 'inline-block',
                            color: 'white',
                            bg: '#AB3428',
                            px: 1,
                            py: 0.5,
                            my:2,
                            borderRadius: 9999,
                        }}>
                            <Link to="/course-updates" style={{textDecoration: 'none'}}><P>🚀Join the waiting list🚀</P></Link>
                        
                    </Box> */}
        
                </Title>
            </Container>
        )
    }
}

export default Intro;
