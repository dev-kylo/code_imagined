import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { graphql } from "gatsby";

const Slice_Code = ({ slice }) => {

    console.log(slice)

    let codeString = slice? slice.primary.codestring.text : '';

    if(slice){   	
        return (
            <SyntaxHighlighter language="javascript" style={vs2015} customStyle={{'font-size': '18px','font-family': 'monospace','line-height': '28px' }}>
                {codeString}
            </SyntaxHighlighter>
        );
    } else {
      return null;
    }
}

export default Slice_Code

export const query = graphql`
  fragment PostDataBodyCode on PrismicPostDataBodyCode {
    primary {
        codestring {
            text
        }
    }
  }
`