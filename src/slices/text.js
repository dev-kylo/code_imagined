import React from "react";
import { PrismicRichText } from '@prismicio/react'
import { graphql } from "gatsby";

const Slice_Text = ({ slice }) => {
    if(slice){   	
        return (
            <div>
                {/* {RichText.render(slice.primary.content)}  */}
                <PrismicRichText field={slice.primary.content.richText} />
            </div>
        );
    } else {
      return null;
    }
}

export default Slice_Text;

export const query = graphql`
  fragment PostDataBodyText on PrismicPostDataBodyText {
    primary {
        content {
          richText
        }
    }
  }
`

