import { Link } from 'gatsby'
import React from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    margin-top: 5em;
    position: relative;
    // background: #00000099;
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
    font-family: ${props => props.theme.fonts.par}
    font-size: 18px; 
    color: white;
    z-index: 1000000;
 
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
            color: ${props => (props.dark ? props.theme.colors.navy : props.theme.colors.pink)};
        }



    }
`

const Footer = props => {
    return (
        <StyledFooter>
            <FooterContainer dark={props.dark} style={{ ...(props?.style || {}) }}>
                <hr />
                <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
                    <div>
                        <small> © 2024 Code Imagined - The Great Sync. All Rights Reserved</small>
                        <small>
                            View the <Link to="/posts/terms-and-conditions"> Terms & Conditions</Link>
                        </small>
                        <small>
                            View the <Link to="/posts/privacy-policy"> Privacy Policy</Link>
                        </small>
                    </div>
                    <small>Dev Kylo</small>
                </Flex>
            </FooterContainer>
        </StyledFooter>
    )
}

export default Footer
