import React from 'react'
import styled from 'styled-components'
import islandSvg from '../../../../images/rain_island_10.svg'
import { ImageLabel } from '../../../../components/UI/ImageLabel'

const StyledSVG = styled(islandSvg)`
    width: 80%;
    position: absolute;
    z-index: 100;
    right: 50px;

    @media (max-width: 2000px) {
        width: 65%;
        top: 20px;
        right: 35px;
    }

    @media (max-width: 1400px) {
        width: 85%;
        top: 20px;
        right: 1px;
    }

    @media (max-width: 1100px) {
        width: 100%;
        top: 90px;
        right: 1px;
    }

    @media (max-width: 600px) {
        width: 95%;
        top: 0;
        right: 1px;
    }

    @media (max-width: 480px) {
        width: 92%;
        right: 10px;
    }
    @media (max-width: 350px) {
        width: 90%;
    }

    @media (orientation: landscape) and (max-width: 600px) {
        width: 45%;
        right: 25%;
    }

    .rain {
        z-index: -10;
        stroke-width: 10px;
    }
    .shrubs {
    }
    .toilet_shrubs {
    }
    .puddle {
    }
    .frontright {
    }
    .frontleft {
    }
`
const PrimitiveLabel = styled(ImageLabel)`
    bottom: 20%;
    right: 10%;
    transform: rotate(-40deg);
`

const RainIsland = props => {
    return (
        <div>
            <PrimitiveLabel>~ Primitive String</PrimitiveLabel>
            <StyledSVG />
        </div>
    )
}

export default RainIsland
