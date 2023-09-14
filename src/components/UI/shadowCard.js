import React from 'react'
import styled from 'styled-components'
import { Flex } from '@mantine/core'
import { navigate } from 'gatsby'
import { Button } from './button.styled'

const Card = styled.div`
    :hover,
    :focus,
    :active {
        filter: brightness(1.3);
    }
    margin-bottom: 5rem;
`

const Paper = styled.div`
    position: relative;
    height: 520px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-size: cover;
    background-position: center;
    box-shadow: 4px 11px 14px 6px rgb(79 79 79 / 41%);
`

const Content = styled.div`
    bottom: 2.5rem;
    padding: 1rem;
    position: absolute; // Add relative positioning to the content container
    z-index: 50; // Adjust the content's z-index to ensure it's above the overlay
`

const Title = styled.span`
    display: block;
    font-family: ${({ theme }) => theme.fonts.subheading};
    color: white;
    line-height: 1.2;
    font-size: 30px;
    margin-top: 15px;
    margin-bottom: 30px;
`

const Description = styled.span`
    display: block;
    font-family: ${({ theme }) => theme.fonts.par};
    line-height: 1.2;
    color: white;
    opacity: 1;
    font-weight: 700;
    font-size: 16px;
`

const Overlay = styled.div`
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#ffffff00 25%, #01130f 35%); // Adjust the opacity as needed
    pointer-events: none; // Allow clicks to go through the overlay
    z-index: 40;
`

const Background = styled.div`
    height: 40%;
    width: 100%;
    background-image: ${({ src }) => `url('${src}')`};
    position: relative;
    background-size: cover;
`

const ShadowCard = ({ image, title, description, type, link }) => {
    return (
        <Card>
            <Paper>
                <Overlay />
                <Background src={image} />
                <Content>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Flex justify="center" style={{ zIndex: 1000, marginTop: '3rem' }}>
                        <Button color={type === 'paid' ? 'red' : 'blue'} clicked={() => navigate(link)} size="small">
                            {type === 'paid' ? 'Learn More' : 'Free Access'}
                        </Button>
                    </Flex>
                </Content>
            </Paper>
        </Card>
    )
}

export default ShadowCard
