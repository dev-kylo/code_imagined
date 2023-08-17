import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import withAnimationContext from '../../../../hoc/withAnimationContext'

const MageContainer = styled.div`
    position: absolute;
    bottom: 50%;
    transform: translate(20%, 50%) scale(1.2);
    z-index: 1000;
    width: ${props => (props.invoking ? '70%' : '100%')};
    filter: ${props => (props.invoking ? 'saturate(0.3)' : 'saturate(1.1)')};
    transition: all 1s ease-out;

    @media (max-width: 500px) {
        display: none;
    }
`
const MageFunk = props => {
    let mageElement = useRef(null)

    useEffect(() => {
        const flyMage = () => {
            const tl = gsap.timeline()
            gsap.set(mageElement, { transform: props.transform })
            tl.to(mageElement, {
                y: 10,
                duration: 4,
                ease: 'Power1.easeInOut',
                yoyo: true,
                repeat: -1,
            })

            return tl
        }
        props.tl.add(flyMage())
    }, [props.tl, props.transform])

    return (
        <MageContainer invoking={props.invoking}>
            <div ref={el => (mageElement = el)}>
                <StaticImage
                    src="../../../../images/mage.png"
                    alt="Mage Funk sorceress character with an invocation orb"
                    placeholder="blurred"
                    fullWidth
                />
            </div>
        </MageContainer>
    )
}

export default withAnimationContext(MageFunk)
