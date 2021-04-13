import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';


const withScrollToggle = (Cmp, restartWhenVisibile = false) => {

    return (props) => {

        const [visible, setVisibility] = useState(false);

        const onEnterViewport = () => {
            console.log('entered');
            setVisibility(true);
          }
         
        const onExitViewport = () => {
            console.log('exited');
            setVisibility(false);
          }
    
        return (
            <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
                <Cmp { ...props } restart={restartWhenVisibile} beginAnimation={visible}></Cmp>
            </ScrollTrigger>
        )
    }

}

export default withScrollToggle;