import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';


const withScrollToggle = (Cmp, restartWhenVisibile = false, visibleOnLoad = false) => {

    return (props) => {

        const [visible, setVisibility] = useState(visibleOnLoad);

        const onEnterViewport = () => {
            if (visible === false) setVisibility(true);
          }
         
        const onExitViewport = () => {
            if (visible === true) setVisibility(false);
          }
    
        return (
            <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
                <Cmp { ...props } restart={restartWhenVisibile} beginAnimation={visible}></Cmp>
            </ScrollTrigger>
        )
    }

}

export default withScrollToggle;