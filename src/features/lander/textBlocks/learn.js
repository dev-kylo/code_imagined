import React from 'react'
import { H2 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'
import { Copy } from '../../../components/layout/containers/containers.styled'

const learn = () => (
    <Copy>
        <H2>Learn JavaScript visually </H2>
        <P>
            Computers need 0s and 1s. Programming languages are needed to instruct computers. Our brains need{' '}
            <strong style={{ color: 'white' }}>story and analogy</strong> to understand them.
        </P>
    </Copy>
)

export default learn
