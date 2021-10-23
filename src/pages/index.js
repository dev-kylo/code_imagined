import React from "react";
import Explainer from '../content/text/explainer';
import SvgTextGrid from '../content/svg_text_grid/svgTextGrid';
import SignUp from "../components/UI/signup.styled";
import '../utils/fontawesome';
import Providers from "../providers/Providers";


const Home = () => {


  return (
      <Providers>
        <SvgTextGrid />
        <Explainer />
        <SignUp />
      </Providers>

  )
}

export default Home;
