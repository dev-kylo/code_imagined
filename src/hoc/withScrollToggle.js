import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';


const withScrollToggle = (Cmp) => {

    return (props) => {

        const [visible, setVisibility] = useState(false);

        const onEnterViewport = () => {
            setVisibility(true)
          }
         
        const onExitViewport = () => {
            setVisibility(false)
          }
    
        return (
            <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
                <Cmp { ...props } animate={visible}></Cmp>
            </ScrollTrigger>
        )
    }

}

export default withScrollToggle;