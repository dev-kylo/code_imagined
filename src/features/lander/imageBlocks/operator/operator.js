import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { ImageLabel } from '../../../../components/UI/ImageLabel'

const OperationLabel = styled(ImageLabel)`
    z-index: 1000;
    top: 40%;
    right: 25%;
    transform: rotate(90deg);

    @media (max-width: 600px) {
        right: 15%;
    }
`

const MutationLabel = styled(ImageLabel)`
    z-index: 1000;
    top: 20%;
    left: 15%;

    @media (max-width: 600px) {
        left: 5%;
    }
`

const Operator = () => (
    <div style={{ position: 'relative' }}>
        <StaticImage
            src="../../../../images/operator.png"
            alt="A dark soceress holding a syringe"
            placeholder="blurred"
        />
        <OperationLabel>~ Operation</OperationLabel>
        <MutationLabel>~ Mutation</MutationLabel>
    </div>
)

export default Operator
