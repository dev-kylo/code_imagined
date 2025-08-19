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
        font-size: 3rem;
        lineheight: 1.2;
        textalign: left;
        color: white;
        textshadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        display: block;
        @media (max-width: 600px) {
            font-size: 1.8rem;
            padding-top: 1rem;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            .jsheader {
                font-size: 5rem;
            }
            .tagline {
                font-size: 1.3rem;
                text-shadow: none !important;
            }
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

    .desktop-hide {
        display: block;
        height: 1rem;
        @media (min-width: 600px) {
            height: 0;
            display: none;
        }
    }

    .mb-hide {
        display: block;
        height: 1rem;
        @media (max-width: 600px) {
            height: 0;
            display: none;
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

const Small = styled.span`
    color: ${props => props.theme.colors[props.color || 'black']};
    background: ${props => (props.bgColor ? props.theme.colors[props.bgColor] : 'transparent')};
    display: inline-block;
    font-size: 2rem;
    padding: 0rem 1rem;
    font-family: 'Passion One', serif;
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

const JsHeader = styled.span`
    font-size: 7rem;
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
                        For the {` `}
                        <Highlight className="large" color="pink">
                            visual thinkers
                        </Highlight>{' '}
                        <div className="mb-hide">
                            <br />
                        </div>
                        and career changers...
                        <br />
                        <div className="desktop-hide">
                            <br />
                        </div>
                        <JsHeader className="jsheader"> Master JavaScript</JsHeader>
                        <br />
                        {/* using visualization and imagination 🧠 */}
                        <Small className="tagline" color="navy" bgColor="pink">
                            {' '}
                            using visualization and imagination 🧠
                        </Small>
                    </H1>

                    <LandingSignup>
                        <SignUp
                            layout="plain"
                            noLastName
                            transparent
                            borderless
                            submitBtnText="How does it work? Hear from a senior software engineer..."
                        />
                    </LandingSignup>
                </Container>
            </Strapline>
        </div>
    )
}

export default Header2
