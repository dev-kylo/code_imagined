import styled from 'styled-components'
import React from 'react'
import { Button } from './button.styled'

const Container = styled.div`
    max-width: 480px;
    .cta {
        padding: 0.5rem;
        background: ${({ theme }) => theme.colors.green};
        color: white;
        height: 100%;
    }

    &:hover .cta {
        background: ${({ theme }) => theme.colors.yellow};
        color: ${({ theme }) => theme.colors.navy};
    }

    &:hover .textblock {
        background: white;
    }
`

const TextBlock = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
`

const LabelButton = ({ children, clicked, cta }) => {
    return (
        <Button style={{ padding: 0, margin: '1rem', background: '#ffffffbd' }} color="yellow" clicked={clicked}>
            <Container>
                <div className="cta">{cta}</div>
                <TextBlock className="textblock">{children}</TextBlock>
            </Container>
        </Button>
    )
}

export default LabelButton
