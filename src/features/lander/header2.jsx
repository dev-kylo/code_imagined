/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Button, Flex } from '@mantine/core'
import { H1, H2 } from '../../components/UI/headings.styled'
import { SignupContext } from '../../context/toggle'
import SignUp from '../signup/signup'

const Container = styled.div`
    top: 0;
    max-width: 800px;
    position: absolute;
    text-align: center;
    padding: 3rem 2rem;

    z-index: 2000;
    transition: opacity 1s ease-in-out;

    #lander-heading {
        font-size: 6rem;
        margin: 0rem;
    }

    @media (max-width: 600px) {
        padding: 1rem;
        transform: translate(0, 0);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        #lander-heading {
            max-width: auto;
            font-size: 4rem;
            margin-bottom: 1rem;
        }
    }
`

const Strapline = styled.div`
    position: relative;
    width: 100%;
    height: 95vh;
    background: white;
    z-index: 0;
    textshadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    img {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: fit;
        object-position: top;
        z-index: ;
    }
`

const Subheading = styled(H2)`
    color: white;
    text-align: center;
    font-size: 1.8rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const Header2 = () => {
    const showSignUp = useContext(SignupContext).show
    return (
        <div style={{ position: 'relative' }}>
            <Strapline>
                <StaticImage
                    src="../../images/Callback_Executes.jpg"
                    alt="A devilish impish character"
                    placeholder="blurred"
                    className="cb"
                />
                <Container>
                    <H1
                        id="lander-heading"
                        as="span"
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                            display: 'block',
                        }}
                    >
                        The Great Sync
                        <br />
                        JavaScript Mental Model
                    </H1>
                    <Subheading> Learn Visually. Build Projects. Grow Confidence.</Subheading>
                    <Flex justifyContent="center" mt={4}>
                        <Button
                            onClick={showSignUp}
                            size="md"
                            center
                            clicked={showSignUp}
                            style={{ background: 'yellow', color: 'black', margin: 'auto' }}
                        >
                            Get the introductory course
                        </Button>
                    </Flex>
                </Container>
            </Strapline>
        </div>
    )
}

export default Header2
