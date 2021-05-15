import React from 'react';
import { StaticImage } from "gatsby-plugin-image";


const LightBeam = () => (
        <StaticImage
            src="../../../images/lightbeam.png"
            alt="A beam of yellow light"
            placeholder="tracedSVG"
            fullWidth
        />
);

export default LightBeam;
