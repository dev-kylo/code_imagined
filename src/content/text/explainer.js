import React from 'react';
import styled from 'styled-components';
import {P} from '../../components/UI/text.styled';
import {Button} from '../../components/UI/button.styled';

const TextContainer = styled.section `
    width: 70%;
    margin: auto;
    margin-top: 2.5em;
    padding: 2em;
    margin-bottom: 1em;
`


const Explainer = () => {

    const signUp = () => {
        fetch('https://wizardly-einstein-c1d2c9.netlify.app/.netlify/functions/signup')
        .then(res => res.json())
        .then((res) => {
            console.log(res.message)
            return res;
        })
    }

    return (
        <TextContainer>
            <P>Hi!</P>
            <P>I'm Kylo. I am a Javascript developer, and have been for many years. That said, I am not a guru. I have not worked for Google. I did not high five .. after contributing to Node Js.</P>
            <P>What I can say is that I am someone who needed a way to 'level up' in Javascript.</P>
            <P>When I first started I threw myself into building things - anything and everything - as you should! As a visual learner, seeing my creations was incredibly satisfying. I remember thinking, "Whoa! I can do that in CSS??", and "Dude, I just built an entire React App with animated transitions!".</P>
            <P>Soon though, I began notice big gaps in my understanding. Yes I could create some fun things. But I still felt like I didn't have a full grasp of Javascript. I just couldn't fit all the pieces together.</P>
            <P>And that's when I began The Great Sync - a single, powerful resource which exposed the bare bones of Javascript,  which existed in my imagination. It could be referred back to whenever I was in need, such as being confused while reading documenation, or learning about something new.</P>
            <P>I have relied on it to grow my knowledge of the language, and have used it to coach many junior and apsiring devs. </P>
            <P>I would love for you to make it your own, to build it brick by brick, function invocation by function invocation, and create something in your mind that lasts forever.</P>
            <P> </P>
            <Button clicked={signUp}>Take me there!</Button>
        </TextContainer>
    )
}

export default Explainer