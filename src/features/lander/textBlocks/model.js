import React from 'react'
import { H2 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'
import { Copy } from '../../../components/layout/containers/containers.styled'

const model = () => (
    <Copy>
        <H2 style={{ textAlign: 'center', color: 'white' }}>Lacking CONFIDENCE ?</H2>
        <P>
            <span style={{ color: 'white ' }}>
                Imposter syndrome is at its most powerful in the early stages of learning.
            </span>{' '}
            A strong mental model combined with building the right projects will give you confidence in your skill as a
            developer.
        </P>
    </Copy>
)

export default model
