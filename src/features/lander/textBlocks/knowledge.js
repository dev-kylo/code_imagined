import React from 'react'
import { H2 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'
import { Copy } from '../../../components/layout/containers/containers.styled'

const knowledge = () => (
    <Copy>
        <H2 style={{ textAlign: 'center', color: 'white' }}> You CAN do this!</H2>
        <P>
            I didn't study computer science. <span style={{ color: 'white ' }}>I didn't find it easy</span>. I struggled
            with JavaScript. But I kept going, and I can help you do the same!
        </P>
    </Copy>
)

export default knowledge
