import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import withAnimationContext from '../../../../hoc/withAnimationContext'
import withAnimateOnScroll from '../../../../hoc/withAnimateOnScroll'
import LayeredOrb from './SVG.styled'

const Invocation = props => {
    let refo = useRef(null)

    const pulseRings = el => {
        const tl = gsap.timeline()
        tl.addLabel('start')
        tl.to(el, {
            duration: 1,
            ease: 'power2.easeOut',
            repeat: 5,
            scale: 1.1,
            opacity: 0.3,
            stagger: {
                // wrap advanced options in an object
                each: 0.2,
                from: 'center',
                ease: 'Power1.easeInOut',
            },
        })
        return tl
    }

    const expandRim = el => {
        const tl = gsap.timeline()
        tl.from(el, {
            duration: 8,
            ease: 'power2.easeIn',
            repeat: 1,
            scale: 0.95,
        })
        return tl
    }

    useEffect(() => {
        const rim = refo.querySelector('g[id*="rim"]')
        const rings = refo.querySelectorAll('svg .ring')
        props.tl.add(pulseRings(rings))
        props.tl.add(expandRim(rim), '-=3s')
    })

    return (
        <div ref={el => (refo = el)}>
            <LayeredOrb />
        </div>
    )
}

export default withAnimateOnScroll(withAnimationContext(Invocation, true), true)
