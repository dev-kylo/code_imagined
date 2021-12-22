import React from "react"
import '../utils/fontawesome';
import Providers from "../providers/Providers";
import PageTitle from "../components/UI/pageTitle.styled";
import styled from 'styled-components';
import { TextContainer } from "../components/templates/post";
import Drawer from "../components/UI/drawer";


const Extra = () => {
    return (
        <Providers>
            <Drawer />
        <PageTitle postTitle>Extra Reading</PageTitle>
        <TextContainer>
            <p> Here is a list of my favourite resources and extra reading material for javascript, visual learning and mnemonics. </p>
            <h2>Javascript</h2>
            <ul>
                <li><a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://eloquentjavascript.net/Eloquent_JavaScript.pdf" >Eloquent Javascript</a> - free PDF version of the book</li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://javascript30.com/" >30 Days of Javascript</a> - a free course by Wes Bos</li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://dev.to/lydiahallie/javascript-visualized-the-javascript-engine-4cdf">JavaScript Visualized</a> - a blog series by Lydia Hallie</li>
            </ul>
            <h2>Visual Learning</h2>
            <ul>
                <li><a target="_blank" rel="noopener noreferrer" href="https://maggieappleton.com/">Illustrated.dev</a> - a digital garden by Maggie Appleton</li>
                <li><a target="_blank" rel="noopener noreferrer"  href="https://justjavascript.com/">Just Javascript</a> - JS Mental Model by Dan Abramov</li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=8pTEmbeENF4">The future of Programming</a> - a video presentation by Bret Victor</li>
            </ul>
            <h2>Mnemonics and Memory Techniques</h2>
            <ul>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.scribd.com/book/190998703/Moonwalking-with-Einstein-The-Art-and-Science-of-Remembering-Everything?utm_medium=cpc&utm_source=google_search&utm_campaign=3Q_Google_DSA_NB_RoW&utm_device=c&gclid=Cj0KCQiAk4aOBhCTARIsAFWFP9FSuFwpFREDPc4UgH4FcKplWnVAmAFAhYy34h6X86OBYOyzLjUAL7caAhrdEALw_wcB">Moonwalking with Einstein</a> - a fantastic journey into memory and memory palaces</li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://artofmemory.com/">The Art of Memory</a> - a starting point for learning mnemonics</li>
            </ul>
        </TextContainer>
        
        </Providers>
    )
}

export default Extra;