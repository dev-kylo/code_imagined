import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
    const imageStyle = { borderRadius: '5px' }

    const { alt = '', childImageSharp, image } = imageInfo

    if (!!image && !!image.childImageSharp) {
        return <GatsbyImage image={image.childImageSharp.gatsbyImageData} style={imageStyle} alt={alt} />
    }
    if (childImageSharp) {
        return <GatsbyImage image={childImageSharp.gatsbyImageData} style={imageStyle} alt={alt} />
    }
    if (image) {
        return <img style={{ imageStyle }} src={image} alt={alt} />
    }
    return null
}

export default PreviewCompatibleImage
