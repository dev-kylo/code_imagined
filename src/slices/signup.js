
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import SignUp from "../components/UI/signup.styled";



const Slice_Signup = ({ slice }) => {
    if(slice){  
        const { id } = slice.primary;
        let signup = null;
        if (id === 'Flying Ships') signup = <SignUp />
        return signup
    } else {
      return null;
    }
}

export default Slice_Signup;

export const query = graphql`
  fragment PostDataBodySignUp on PrismicPostDataBodySignUp {
    primary {
        id
      }
  }
`
