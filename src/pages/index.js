import React from "react";
import Explainer from '../content/text/explainer';
import SvgTextGrid from '../content/svg_text_grid/svgTextGrid';
import SignUp from "../components/UI/signup.styled";
import '../utils/fontawesome';
import Providers from "../providers/Providers";
import Drawer from "../components/UI/drawer";


const Home = () => {

  return (
      <Providers>
        <Drawer />
        <SvgTextGrid />
        <Explainer />
        <SignUp />
      </Providers>

  )
}

export default Home;
