import React, { useContext, useState, useEffect } from 'react';
import { SignupContext } from '../context/toggle';
import gsap from "gsap";

const withAnimationContext = (Cmp, withScrollTrigger = false) => {

    return (props) => {
        const animationsTurnedOn = useContext(SignupContext).animate;
        const mainT = gsap.timeline({ repeat: -1});
        const mainTl = useState(mainT)[0];

        useEffect(() => {
            if (withScrollTrigger){
                if ( animationsTurnedOn && props.beginAnimation){
                    if (props.restart && !mainTl.isActive()){
                        mainTl.restart();
                    }
                    else mainTl.play();
                }
                else {
                    mainTl.pause();
                }
            }
            else {  
                if ( animationsTurnedOn ){
                    mainTl.play();
                }
                else {
                    mainTl.pause();
                }
            }
        }, [props, animationsTurnedOn, mainTl])
    
        return <Cmp { ...props } tl={mainTl}></Cmp>

    }

}


export default withAnimationContext;