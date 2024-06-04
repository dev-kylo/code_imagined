import styled from 'styled-components'

export const Fullscreen = styled.section`
    width: 100%;
    min-height: 100vh;
`

export const Copy = styled.section`
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    max-width: 600px;
    text-align: center;
`

export const MobileDisplay = styled.div`
    @media (min-width: 600px) {
        display: none;
        visibility: hidden;
        opacity: 0;
    }
`

export const DesktopDisplay = styled.div`
    @media (max-width: 600px) {
        display: none;
        visibility: hidden;
        opacity: 0;
    }
`
