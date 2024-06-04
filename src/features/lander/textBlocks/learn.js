import React from 'react'
import { H2 } from '../../../components/UI/headings.styled'
import { P } from '../../../components/UI/text.styled'
import { Copy } from '../../../components/layout/containers/containers.styled'

const learn = () => (
    <Copy>
        <H2 style={{ textAlign: 'center', color: 'white' }}>Can't REMEMBER the fundamentals?</H2>
        <P>
            By creating a mnemonic representation of all concepts, you can easily recall them and understand them. The
            best part? <span style={{ color: 'white' }}>You carry it everywhere in your imagination.</span>
        </P>
    </Copy>
)

export default learn
