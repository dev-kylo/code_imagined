/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Fade, Flip } from 'react-awesome-reveal'
import { StaticImage } from 'gatsby-plugin-image'
import { H1 } from '../../components/UI/headings.styled'
import { fadeIn } from '../../utils/animations'
import ProfileCard from './profileCard/profileCard'

const Title = styled.div`
    display: inline-block;
    padding: 0.5em;
    padding-top: 0;
    z-index: 100;
    background: #00000085;
    transition: opacity 1s ease-in-out;

    opacity: ${({ visible }) => (visible ? 1 : 0)};

    background: #00000085;
    h1 {
        margin-top: 0;
        font-size: 3rem;
    }

    @media (min-width: 600px) {
        padding: 2em;
        font-size: 1rem;
        background: none;
        h1 {
            font-size: 3rem;
        }
    }

    @media (min-width: 1200px) {
        padding: 2em;
        font-size: 1rem;
        h1 {
            font-size: 4rem;
            margin-top: 2rem;
        }
        // padding-top: 1em;
    }

    @media (min-width: 1500px) {
        padding: 2em;
    }

    @media (min-width: 1800px) {
        margin-top: 4rem;
        padding: 2em;
        h1 {
            font-size: 5rem;
        }
    }
`

const Container = styled.section`
    max-width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2000;
    transition: opacity 1s ease-in-out;
    // opacity: ${({ visible }) => (visible ? 1 : 0)};
`

const Strapline = styled.div`
    // psition: relative;
    // height: 100vh;
    // background: yellow;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // background: green;
    // width: 100%

    // display: flex;
    // align-items: center;
    // justify-content: center;

    // position: relative;
    // width: 100%;
    // height: 100vh;
    // background: white;
    // z-index: -2;
    // &::before {
    //     content: '';
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     background: url('/fantasy-bg.png') no-repeat;
    //     background-size: cover;
    //     background-position: center;
    //     animation: ${fadeIn} 4s ease-out 0s forwards;
    //     z-index: -1;
    // }
`

const Span = styled.div`
    display: block;
    font-size: 1.75rem;
    font-family: ${props => props.theme.fonts.heading1};
    line-height: 1.5;
`

const Color = styled.div`
    color: ${props => props.theme.colors[`${props.color}`]};
    display: inline;
`

const ScrollContainer = styled.div`
    position: relative;
    background: purple;
    height: 150vh; /* Ensure there's enough content to scroll */
    z-index: -10;
`
const StickyHeader = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    background: red;
    z-index: -5;
    background: url('/fantasy-bg.png') no-repeat;
    background-size: cover;
    background-position: center;
    animation: ${fadeIn} 4s ease-out 0s forwards;
`

const Spacer = styled.div`
    height: 20vh; /* Create enough space for scrolling */
`
const ProfileCardWrapper = styled.div`
    z-index: 1000000;
    transition: opacity 1s ease-in-out;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
`

const Header = () => {
    const [isContainerVisible, setIsContainerVisible] = useState(true)
    const [showProfileCard, setShowProfileCard] = useState(false)
    const containerRef = useRef()
    const profileCardRef = useRef()

    useEffect(() => {
        const containerObserver = new IntersectionObserver(
            ([entry]) => {
                setIsContainerVisible(entry.isIntersecting)
            },
            {
                threshold: 0.9, // Adjust this threshold as needed
            }
        )

        const profileObserver = new IntersectionObserver(
            ([entry]) => {
                setShowProfileCard(entry.isIntersecting)
            },
            {
                threshold: 0.8, // Adjust this threshold as needed
            }
        )

        if (containerRef.current) {
            containerObserver.observe(containerRef.current)
        }

        if (profileCardRef.current) {
            profileObserver.observe(profileCardRef.current)
        }

        return () => {
            if (containerRef.current) {
                containerObserver.unobserve(containerRef.current)
            }
            if (profileCardRef.current) {
                profileObserver.unobserve(profileCardRef.current)
            }
        }
    }, [])

    return (
        <ScrollContainer>
            <StickyHeader>
                <Strapline ref={containerRef}>
                    <Container visible={isContainerVisible}>
                        <Title visible={isContainerVisible}>
                            <H1 style={{ textAlign: 'center', color: 'black' }}>
                                <Color color="blue">Imagine</Color> applying <br />
                                JavaScript fundamentals to <br />
                                ANY project
                            </H1>

                            <Span style={{ maxWidth: '600px', textAlign: 'center', margin: 'auto', color: 'black' }}>
                                No more <Color color="red">TUTORIAL HELL</Color>
                            </Span>
                            <Span style={{ maxWidth: '700px', textAlign: 'center', margin: 'auto', color: 'black' }}>
                                No more overwhelming <Color color="black">IMPOSTER SYNDROME</Color>
                            </Span>
                        </Title>
                    </Container>
                </Strapline>

                <Spacer />

                <ProfileCardWrapper ref={profileCardRef} visible={showProfileCard}>
                    <ProfileCard style={{ opacity: showProfileCard ? 1 : 0, transition: 'opacity 1s ease-in-out' }} />
                </ProfileCardWrapper>
            </StickyHeader>
        </ScrollContainer>
    )
}

export default Header
