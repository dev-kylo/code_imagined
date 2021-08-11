
import styled from 'styled-components';
import React from 'react';
import AnemoneIsland from './layers/anemone.styled';
import ObjectIsland from './layers/objectIsland.styled';
import Ship from './layers/ship.styled';
import Submarine from './layers/submarine.styled';
import { StaticImage } from "gatsby-plugin-image"
import LightHouseBeams from './layers/lighthouses.styled';
import VolcanoIsland from './layers/volacono.styled';
import RootGrowth from './layers/rootgrowth.styled';
import Rocks from './layers/rocks';
import useScreenSize from '../../../../hooks/useScreenSize';


function calcWidth(w, h){
    
    let ratio = (+w / +h);
    if (ratio > 1.3){
        let multiplier = 5;
        if (ratio > 2 && ratio < 2.6) multiplier = 1;
        let diff = (ratio - 1.3) / 0.1;
        let reduction = diff * multiplier;
        return `${Math.max((100 - reduction), 55)}%`;
    }

    return `${85}%`;
}


export const SVGContainer = styled.div`
    width: 85%;
    left: 8%;
    position: absolute;
    z-index: 100;
    top:20px;

    #waterfall, #white {
        background-color: white;
        color: white;
    }

    @media (max-width: 1200px){
        top:3%;
        width: 100%;
    }

    @media (max-width: 1100px){
        width: 105%;
        max-height: auto;
    }

    @media (max-width: 1000px){
        top: 20%;
        width: 105%;
        left: 5%;
    }

    @media (max-width: 600px){
        top: 42%;
        left: 65px;
        width: 62%;
    }

    @media (max-width: 550px){
        top:38%;
        left: 30px;
        width: 75%;
    }

    @media (max-width: 550px) and (max-height: 750px){
        top:45%;
        left: 20%;
        width: 58%;
    }


    @media (max-width: 480px) and (min-height: 700px){
        top:45%;
        left: 30px;
        width: 80%;
    }


    @media (max-width: 380px){
        top:50%;
        left: 20px;
        width: 85%;
    }

    @media (max-width: 380px) and (max-height: 700px){
        top:47%;
        left: 30px;
        width: 75%;
    }

    @media (max-width: 340px){
        top:50%;
        left: 20px;
        width: 75%;
    }

    @media (max-width: 350px) and (max-height: 600px){
        top:60%;
        left: 50px;
        width: 55%;
    }

    @media (orientation: landscape) {
        width: ${props => calcWidth(props.screenWidth, props.screenHeight)}
    }
`;


const LayeredSVG = () => {
    
    const [screenWidth, screenHeight] = useScreenSize();
    
    return (
        <SVGContainer screenWidth={screenWidth} screenHeight={screenHeight}>
                <StaticImage
                    src="../../../../images/Isles.png"
                    alt="The Execution Stack - a stack of isles with waterfalls"
                    placeholder="tracedSVG"
                    layout="fullWidth"
                />
                <RootGrowth />
                <AnemoneIsland />
                <VolcanoIsland />
                <ObjectIsland />
                <Rocks />
                <Ship 
                    position={{
                        left:"45%", 
                        bottom:"47%",
                        transform:"rotate(5deg)",
                        size:"medium", 
                        id:"shipbottom"
                    }}
                    animation={{
                        duration: 50,
                        x: 100,
                        ease: "Power1.easeOut"
                    }}
                />
                <Ship 
                    position={{
                        left:"45%",
                        bottom:"80%", 
                        transform:"scaleX(-1)" ,
                        size:"small",
                        id:"shiptop",
                    }}
                    animation={{
                        duration: 40,
                        x:150,
                        ease: "Power1.easeOut"
                    }}
                />
                <Submarine subtop/>
                <Submarine submiddle/>
                <Submarine subbottom/>
                <LightHouseBeams />
            </SVGContainer>
    )
};

export default React.memo(LayeredSVG);