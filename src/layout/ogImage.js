import React from 'react';
import { StaticImage } from "gatsby-plugin-image";


const ogImage = () => (
        <StaticImage
            src="../images/magePreview.png"
            alt="A beam of yellow light"
            placeholder="tracedSVG"
            fullWidth
        />
);

export default ogImage;
