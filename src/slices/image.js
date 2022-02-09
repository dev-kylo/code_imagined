import { graphql } from "gatsby";
import React from "react";
import Img from "../components/UI/img";


const Slice_Image = ({ slice }) => {
    if(slice){  
        const data = slice.primary;
        return (
            <Img gatsbyImageData={data.uploaded_image.gatsbyImageData} altText={data.uploaded_image.alt} />
        )
    } else {
      return null;
    }
}

export default Slice_Image;

export const query = graphql`
  fragment PostDataBodyImage on PrismicPostDataBodyImage {
    primary {
        uploaded_image {
          alt
          gatsbyImageData(placeholder: BLURRED, width: 1200)
        }
      }
  }
`
