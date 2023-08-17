import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

const FadeOnScroll = ({ children, setScrollDown }) => {
    const [progress, setProgress] = useState(0)

    const onProgress = scroll => {
        if (scroll.progress > progress) {
            setScrollDown(true)
        } else setScrollDown(false)

        setProgress(scroll.progress)
    }

    return (
        <ScrollTrigger triggerOnLoad={false} onProgress={onProgress}>
            {children}
        </ScrollTrigger>
    )
}

export default FadeOnScroll
