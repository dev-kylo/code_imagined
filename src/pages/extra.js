import React, { useEffect } from "react"
import '../utils/fontawesome';
import Providers from "../providers/Providers";
import PageTitle from "../components/UI/pageTitle.styled";
import PageSubtitle from "../components/UI/pageSubtitle.styled";
import styled from 'styled-components';
import { TextContainer } from "../components/templates/post";
import { H2 } from "../components/UI/headings.styled";
import SignUp from "../components/UI/signup.styled";
import Drawer from "../components/UI/drawer";
const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const Extra = () => {
    return (
        <Providers>
            <Drawer />
        <PageTitle postTitle>Extra Reading</PageTitle>
        <TextContainer>
            <p> Here is a list of my favourite resources and extra reading material for javascript, visual learning and mnemonics. </p>
            <h2>Javascript</h2>
            <ul>
                <li>Eloquent Javascript - PDF version</li>
                <li>Javascript 30</li>
                <li>Javascript 30</li>
            </ul>
            <h2>Visual Learning</h2>
            <ul>
                <li>Illustrated.dev</li>
                <li>Just Javascript</li>
                <li>The future of Programming</li>
                <li>Where thingies let us down</li>
            </ul>
            <h2>Mnemonics and Memory Techniques</h2>
            <ul>
                <li>The book I have just read</li>
                <li>Moonwalking with Einsteing</li>
                <li>Mnemonics - a starting point</li>
            </ul>
        </TextContainer>
        
        </Providers>
    )
}

export default Extra;