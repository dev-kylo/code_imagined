import React from 'react'
import { Flex } from 'rebass';
import styled from 'styled-components';


const StyledFooter = styled.footer`
    margin: 4em 0;  
    @media only screen and (max-width: 780px){
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

const FooterContainer = styled.footer`
    width: 80%;
    margin: 2em auto;
    font-family: ${props => props.theme.fonts.par}
    font-size: 18px; 
    color: white;

    @media only screen and (max-width: 780px){
        margin: auto;
        padding: 0 1em;
    }

    small {
        margin: 1em 0;
        font-size: 18px; 

        @media only screen and (max-width: 480px){
            min-width: 100%;
            display: block;
            text-align: center;
         }

        a {
            margin: 0;
            padding: 0;
            font-size: 18px; 
            color: ${props => props.theme.colors.pink};
        }



    }
`




const Footer = () => {

  return (
  <StyledFooter>
    <FooterContainer>
        <hr></hr>
        <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <small> © 2021 The Great Sync - All Rights Reserved</small>
            <small><a href="mailto:kylo@thegreatsync.com">kylo@thegreatsync.com</a></small>
        </Flex>
    </FooterContainer>
  </StyledFooter>
  )
}

export default Footer;
