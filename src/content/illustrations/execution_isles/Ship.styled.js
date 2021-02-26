import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';
import styled from 'styled-components';
import gsap from "gsap";


const Island1Container = styled.div`
    position: absolute;
    bottom: 47%;
    left: 45%;
    transform: rotate(5deg);
    z-index: 2000;
    width: 17%;
`

const Island2Container = styled.div`
    position: absolute;
    top: 10%;
    left: 45%;
    z-index: 2000;
    transform: scaleX(-1);
    width: 9%;
`

const Ship = (props) => {
    const shipImage = useStaticQuery(graphql`
    query shipfloat{
        file(relativePath: { eq: "Ship_vsmall.png" }) {
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
     
        gsap.to('#shipbottom', {
            duration: 20,
            delay: 1,
            x: 150,
            ease: "Power1.easeOut"
        });
        gsap.to('#shiptop', {
            duration: 30,
            delay: 0,
            x: 170,
            ease: "Power1.easeIn"
        })
    })
    
    if (props.islandTop){
        return (
            <Island1Container>
                <div id="shipbottom">
                    <Img fluid={shipImage.file.childImageSharp.fluid} alt="Code Imagined" />
                </div>
            </Island1Container>
        )
    }
    else return (
        <Island2Container>
            <div id="shiptop">
                <Img fluid={shipImage.file.childImageSharp.fluid} alt="Code Imagined" />
            </div>
        </Island2Container>
    )
}

export default Ship;