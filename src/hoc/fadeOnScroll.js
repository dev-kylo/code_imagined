import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const FadeOnScroll = (props) => {

        const [progress, setProgress] = useState(0);

        const onProgress = (scroll) => {
          
            if(scroll.progress > progress){
                props.setScrollDown(true)
            }
            else props.setScrollDown(false)

            setProgress(scroll.progress);
        }
    
        return (
            <ScrollTrigger triggerOnLoad={false} onProgress={onProgress}>
                    {props.children}
            </ScrollTrigger>
        )
}

export default FadeOnScroll;