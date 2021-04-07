import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';
import styled from 'styled-components';
import gsap from "gsap";


const SubTop = styled.div`
    position: absolute;
    top: 0%;
    left: 20%;
    transform: scaleX(-1) rotate(30deg);
    z-index: 2000;
    width: 5%;

    @media (max-width: 700px){
        top: -15%;
        left: 65%;
    }
`

const SubMiddle = styled.div`
    position: absolute;
    top: 12%;
    right: 20%;
    z-index: 2000;
    transform: rotate(-10deg);
    width: 8%;
    @media (max-width: 700px){
        top: 22%;
        right: 65%;
    }
`

const SubBottom = styled.div`
    position: absolute;
    bottom: 70%;
    left: 18%;
    z-index: 2000;
    width: 11%;
    transform: rotate(15deg);
`

const Submarine = (props) => {
    const submarineImage = useStaticQuery(graphql`
    query sub{
        file(relativePath: { eq: "submarine.png" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid {
            ...GatsbyImageSharpFluid
            }
        }
        }
    }
    `);

    useEffect(() => {
     
        gsap.to('#subtop', {
            duration: 10,
            delay: 0,
            x: -40,
            y: 15,
            ease: "Power1.easeOut"
        });
        gsap.to('#submiddle', {
            duration: 20,
            delay: 5,
            x: -40,
            y: 80,
            ease: "Power1.easeInOut"
        })
        gsap.to('#subbottom', {
            duration: 40,
            delay: 0,
            x: 170,
            ease: "Power1.easeIn"
        })
    })
    
    if (props.subtop){
        return (
            <SubTop>
                <div id="subtop">
                    <Img fluid={submarineImage.file.childImageSharp.fluid} alt="Code Imagined" />
                </div>
            </SubTop>
        )
    }
    if (props.submiddle){
        return (
            <SubMiddle>
                <div id="submiddle">
                    <Img fluid={submarineImage.file.childImageSharp.fluid} alt="Code Imagined" />
                </div>
            </SubMiddle>
        )
    }
    else return (
        <SubBottom>
            <div id="subbottom">
                <Img fluid={submarineImage.file.childImageSharp.fluid} alt="Code Imagined" />
            </div>
        </SubBottom>
    )
}

export default Submarine;