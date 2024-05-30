import { keyframes } from 'styled-components'

export const slideInFromBottomLeft = keyframes`
    0% {
        transform: translate(-100%, 100%);
        opacity: 0;
    }
    100% {
        transform: translate(0, 0);
        opacity: 1;
    }
`

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
