import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Flex } from 'rebass'

const { default: styled } = require('styled-components')

const Container = styled.div`
    max-width: 1000px;
    padding: 25px 20px;
    position: relative;
    border: 5px solid #476ce4;
    border-radius: 15px;
    font-family: 'Montserrat';
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 780px) {
        padding: 15px 10px;
    }
`

const QuoteContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: space-between;
`

const Quote = styled.div`
    color: rgba(255, 255, 255, 0.3);
    font-size: 1.3rem;
    text-align: center;
    line-height: 28px;
    color: ${props => props.theme.colors.white};
    @media (max-width: 780px) {
        font-size: 1.1rem;
    }
`

const Profile = styled.img`
    border-radius: 50%;
    height: 75px;
    width: 75px;
    object-fit: cover;
`

const Name = styled.span`
    color: #476ce4;
    filter: brightness(2);
    font-size: 1.1rem;
    margin-left: 0.5rem;
`

const QuoteIcon = styled(FontAwesomeIcon)`
    padding: 0 1rem 1rem 1rem;
    color: white;
    fontsize: 1.4rem;
    @media (max-width: 780px) {
        padding: 0rem 0.2rem;
    }
`

const Testimonial = ({ name, text, profile }) => {
    return (
        <Container>
            <QuoteContainer>
                <QuoteIcon icon={faQuoteLeft} />
                <Quote> {text} </Quote>
                <QuoteIcon
                    icon={faQuoteRight}
                    style={{
                        alignSelf: 'flex-end',
                        marginBottom: '-2rem',
                    }}
                />
            </QuoteContainer>
            <Flex justifyContent="center" alignItems="center" mt={3}>
                <Profile class="logo" src={profile} alt="logo" />
                <Name>{name}</Name>
            </Flex>
        </Container>
    )
}

export default Testimonial
