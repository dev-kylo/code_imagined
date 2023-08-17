import React from 'react'
import styled from 'styled-components'
import objectSvg from '../../../../images/object_island.svg'

const StyledSVG = styled(objectSvg)`
    width: 100%;

    position: absolute;

    z-index: 10;

    @media (max-width: 1000px) {
    }

    @media (max-width: 600px) {
        width: 90%;
        top: -50%;
        right: 50%;
    }

    @media (max-width: 480px) {
        width: 80%;
        top: 0;
        right: 20px;
    }

    @media (max-width: 480px) and (min-height: 700px) {
        width: 90%;
    }

    .captain {
    }
    .captain .telescope {
    }
    .loo {
    }
    .rock {
    }
`

const RockIsland = props => {
    return (
        <div id="objectIsland">
            <StyledSVG />
        </div>
    )
}

export default RockIsland
