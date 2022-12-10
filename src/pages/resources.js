
import React from "react";
import Cards from "../components/UI/cards.styled";
//import Drawer from "../components/UI/drawer";
import MainVideo from "../components/UI/mainVideo.styled";
import PageSubtitle from "../components/UI/pageSubtitle.styled";
import PageTitle from "../components/UI/pageTitle.styled";
import SignUp from "../components/UI/signup.styled"
import Providers from "../providers/Providers";
import { TextContainer } from "../components/UI/textContainer";
import { H2 } from "../components/UI/headings.styled";
import styled from "styled-components";
import { Link } from "gatsby";


const CardStrip = styled(Link)`
  display: block;
  width: 80%;
  max-width: 60em;
  background: ${({red, theme}) => red ? theme.colors.navy : theme.colors.blue};
  color: white;
  padding: 2em 1em;
  margin: 2em auto;
  border-radius: 2em;
  position: relative;
  :hover {
    background: ${({theme}) => theme.colors.white};
    color: black;
    cursor: pointer;
  }
  @media(max-width: 780px){
      margin: 2.5em auto;
      padding: 0 1em;
      height: 5.5em;
      display: flex;
      align-items: center;
    }

  span {
    padding-left: 1em;
    font-size: 1.5rem;
    @media(max-width: 780px){
      padding-left: 0.5em;
      font-size: 1.2rem;
    }
  }
`

const CardDate = styled.span`
  position: absolute;
  bottom: 0.2em;
  right: 1em;
  background: ${({theme}) =>  theme.colors.red};
  padding: 0.2rem;
  @media(max-width: 780px){
    bottom: unset;
    right: unset;
    top: -1rem;
    left: 50%;
    transform:translate(-50%)
  }
`


const Resources = () => {

  return (
    <Providers>
        {/* <Drawer posts={posts} /> */}
        <PageTitle>Course Release Updates For 2023</PageTitle>
        <TextContainer>
            <H2>Wooohooo!</H2>
          <MainVideo />
          
        </TextContainer>
        <PageSubtitle> News & Updates</PageSubtitle>


        <CardStrip><span>A sneak preview of the course: A full insider's view to the making</span><CardDate>12 July 2022</CardDate></CardStrip>
        <CardStrip><span>Everything you need to know</span><CardDate>18 August 2022</CardDate></CardStrip>

        <SignUp />
  </Providers>
)};




export default Resources;

