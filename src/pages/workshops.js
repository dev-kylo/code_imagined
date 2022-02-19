import React from "react"
import '../utils/fontawesome';
import Providers from "../providers/Providers";
import PageTitle from "../components/UI/pageTitle.styled";
import styled from 'styled-components';
import Drawer from "../components/UI/drawer";
import CalendlyPopupButton from "../components/UI/calendlyPopup";
import { TextContainer } from "../components/UI/textContainer";


const Calendly = styled.div`
    display: flex;
    justify-content: center;
`


const Workshops = () => {
    return (
        <Providers>
            <Drawer />
        <PageTitle postTitle>Upcoming Workshops</PageTitle>
        <TextContainer>
            <p>Throughout the year I run FREE 1 hour workshops covering a range of topics in Javascript, for complete newbies to more intermediate coders. In these sessions, we will break down javascript code into abstract images and stories, to better make sense of the code and remember the concepts we are learning!</p>
            <p>Some of my more popular workshops include:</p>
            <ul>
                <li>Exploring Functions Visually</li>
                <li>The Secret Life of Objects</li>
                <li>Wrapping our minds around Scope</li>
            </ul>
            <p>In addition, I run longer paid workshops, covering some of the more advanced areas. These will include more exercises and examples, access to The Great Sync illustrations, and an unforgettable way of remembering some of javascript's trickier concepts.</p>
           <p>These sessions include</p>
            <ul>
                <li>Following the This variable</li>
                <li>Constructors to Classes</li>
                <li>Aynchronous JS</li>
                <li>Closures</li>
            </ul>
            <p> The workshops are designed to be fun and relaxed. It's not meant to be an intimidating environment, and you will NEVER be asked to provide an answer to an exercise in front of the rest of the group (unless you want to). Learning to code can be so focussed on **making** and adding lines to your CV. That's not what The Great Sync is about. We are mastering our craft, and to do that we need to be child-like, use our imaginations and have fun! </p>
            <h2 style={{textAlign: 'center'}}>Upcoming Workshops</h2>
            <Calendly>
                <CalendlyPopupButton />
            </Calendly>
        </TextContainer>
        
        </Providers>
    )
}

export default Workshops;