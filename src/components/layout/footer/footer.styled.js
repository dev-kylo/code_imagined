import { Link } from 'gatsby'
import React, { useContext } from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'
import LabelButton from '../../UI/LabelButton'
import { Highlight } from '../../UI/highlight'
import { SignupContext } from '../../../context/toggle'

const StyledFooter = styled.footer`
    margin-top: 5em;
    position: relative;
    font-family: ${props => props.theme.fonts.par};
    @media only screen and (max-width: 780px) {
        justify-content: center;
        padding: 0;
        flex-direction: column-reverse;
    }

    hr {
        background-color: ${props => props.theme.colors.green};
        height: 4px;
        border: none;
    }
`

const FooterContainer = styled.div`
    padding: 0 2rem 2rem 2rem;
    font-size: 18px; 
    color: white;
    z-index: 1000000;
    background: ${props => (props.dark ? 'transparent' : '#01150f')};
    font-family: ${props => props.theme.fonts.heading};    
    left: 50%
    transform: translateX(-50%)

    @media only screen and (max-width: 780px){
        margin: auto;
        padding: 0 1em;
    }

    small {
        margin: 1em 0;
        font-size: 18px; 
        color: ${props => (props.dark ? props.theme.colors.navy : 'white')};
        display: block;
        font-family: ${props => props.theme.fonts.par};
        @media only screen and (max-width: 480px){
            min-width: 100%;
            display: block;
            text-align: center;
         }

        a {
            margin: 0;
            padding: 0;
            font-size: 18px; 
            text-decoration: none;
            font-family: ${props => props.theme.fonts.par};
            color: ${props => (props.dark ? props.theme.colors.navy : props.theme.colors.pink)};
        }



    }
`

const Small = styled.small`
    font-size: 16px !important;
    font-family: ${props => props.theme.fonts.par};
    font-weight: bold;
    color: black !important;
`

const Footer = props => {
    const showSignUp = useContext(SignupContext).show
    return (
        <StyledFooter>
            <FooterContainer dark={props.dark} style={{ ...(props?.style || {}) }}>
                <hr />
                <Flex justifyContent="space-around" alignItems="center" flexWrap="wrap">
                    <div>
                        <small> © 2024 Code Imagined - The Great Sync. All Rights Reserved</small>
                        <small>
                            View the <Link to="/posts/terms-and-conditions"> Terms & Conditions</Link>
                        </small>
                        <small>
                            View the <Link to="/posts/privacy-policy"> Privacy Policy</Link>
                        </small>
                    </div>
                    <div>
                        <LabelButton cta="Get the FREE GUIDE" clicked={showSignUp}>
                            <div style={{ padding: '0.5rem 1rem' }}>
                                <div style={{ marginBottom: '0rem' }}>
                                    The <Highlight bgColor="yellow">3 Steps to JavaScript Confidence</Highlight>
                                </div>

                                <Small>
                                    <Highlight color="red">PLUS*</Highlight> a 2024 Roadmap to JS Professional PDF
                                </Small>
                            </div>
                        </LabelButton>
                    </div>
                </Flex>
            </FooterContainer>
        </StyledFooter>
    )
}

export default Footer
