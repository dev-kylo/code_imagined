import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { H1, H2 } from '../../components/UI/headings.styled';
import { P } from '../../components/UI/text.styled';
import styled from 'styled-components';
import { DesktopDisplay, MobileDisplay} from '../../components/UI/containers.styled';
import { Box } from 'rebass';
import { Link } from 'gatsby';


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
    padding: 1em;
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
        padding: 4em;
    }


    @media (min-width: 1800px){
        padding: 6em;
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
    font-size: 1.5rem;

    @media (min-width: 780px){
        font-size: 2rem;
    }
`



const Intro = props => {
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
                        <H1>The Great Sync <SubHeading>- visual & memorable Javascript</SubHeading></H1>
                        <DesktopDisplay>
                        <P>Do you find javascript difficult? Trying to level up? User your imagination to write and read javascript confidently.</P>
                        </DesktopDisplay>
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
                        <H1>The Great Sync<SubHeading>- visual & memorable Javascript </SubHeading></H1>
                    </DesktopDisplay>
                    <MobileDisplay>
                        <H2> Build a foundation</H2>
                    </MobileDisplay>
                    <P>Do you find javascript difficult? Trying to level up? User your imagination to write and read javascript confidently.</P>
                    <Box
                        sx={{
                            display: 'inline-block',
                            color: 'white',
                            bg: '#AB3428',
                            px: 1,
                            py: 0.5,
                            my:2,
                            borderRadius: 9999,
                        }}>
                            <Link to="/course-updates" style={{textDecoration: 'none'}}><P>🔥 Course Release Updates 🔥</P></Link>
                        
                    </Box>
        
                </Title>
            </Container>
        )
    }
}

export default Intro;
