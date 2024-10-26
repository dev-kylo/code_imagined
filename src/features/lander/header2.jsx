/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { H1 } from '../../components/UI/headings.styled'

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
        font-size: 3.5rem;
        lineheight: 1.2;
        textalign: left;
        color: white;
        textshadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        display: block;
        @media (max-width: 600px) {
            font-size: 1.8rem;
            padding-top: 1rem;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .large {
            font-size: 5rem;
            @media (max-width: 600px) {
                font-size: 3rem;
                display: block;
                margin-top: 1rem;
            }
        }
    }

    @media (max-width: 600px) {
        padding: 1rem;
        transform: translate(0, 0);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
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

const Highlight = styled.span`
    color: ${props => props.theme.colors[props.color || 'black']};
    background: ${props => (props.bgColor ? props.theme.colors[props.bgColor] : 'transparent')};
    display: inline;
`

const Small = styled.small`
    // color: #434343;
    font-size: 20px;
    padding-top: 2rem;
`

const LandingSignup = styled.div`
    form {
        background: none;
        box-shadow: none;

        .inputs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 0.5rem;

            @media (max-width: 350px) {
                grid-template-columns: 1fr;
            }
        }

        label {
            background: rgb(1 20 45);
            color: white;
            padding: 0 1rem;
        }

        input {
            margin: auto;
        }

        button {
            margin-top: 1rem;
        }
    }

    .form-completion-container {
        background: #ffffff91;
    }
`

const Header2 = () => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Strapline>
                <StaticImage
                    src="../../images/Callback_Executes.jpg"
                    alt="A devilish impish character"
                    placeholder="blurred"
                    className="cb"
                    style={{ overflow: 'hidden' }}
                />
                <Container>
                    <H1 id="lander-heading" as="span">
                        <Highlight className="large" color="pink">
                            Learn JavaScript
                        </Highlight>{' '}
                        visually.
                        <br />
                        <Highlight className="large" color="pink">
                            {' '}
                            Remember
                        </Highlight>{' '}
                        what you learn.
                        <br />
                        <Highlight className="large" color="pink">
                            Build
                        </Highlight>{' '}
                        with confidence.
                    </H1>
                    {/* <Subheading> Learn Visually. Build Projects. Grow Confidence.</Subheading> */}
                    {/* 
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px', maxWidth: '' }}>
                            <LabelButton cta="Get the FREE GUIDE" clicked={showSignUp}>
                                <div style={{ padding: '0.5rem 1rem' }}>
                                    <div style={{ marginBottom: '0.3rem' }}>
                                        The Great Sync{' '}
                                        <Highlight bgColor="yellow">Learning System & Roadmap </Highlight>
                                    </div>

                                    <Small>
                                        <Small>
                                            How to <Highlight color="red">gain confidence </Highlight>writing JavaScript{' '}
                                        </Small>
                                    </Small>
                                </div>
                            </LabelButton>
                        </div>
                    */}

                    <LandingSignup>
                        <SignUp
                            layout="plain"
                            noLastName
                            transparent
                            borderless
                            // convertKitTag={convertkit_tag_id}
                            submitBtnText="Get the PDF: Learn JS Memorably"
                            // borderless={borderless}
                        />
                    </LandingSignup>
                </Container>
            </Strapline>
        </div>
    )
}

export default Header2
