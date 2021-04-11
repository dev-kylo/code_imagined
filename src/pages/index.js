import React from "react";
import SEO from '../layout/seo';
import Layout from '../layout/layout';
import { theme } from '../theme';
import { ThemeProvider } from 'styled-components';
import Explainer from '../content/text/explainer';
import SvgTextGrid from '../content/svg_text_grid/svgTextGrid';
import Nav from '../components/UI/nav.styled';
import SignUp from "../components/UI/signup.styled";
import { LayersManager } from 'react-layers-manager'
// import Popup from '../styled/popup';
import ModalContext from '../context/toggle';
import '../utils/fontawesome';


const Home = () => {

  return (
    <ThemeProvider theme={theme}>
      <LayersManager>
        <SEO />
        <Layout >
          <ModalContext>
            <Nav />
            <SvgTextGrid />
            <Explainer />
            <SignUp />
          </ModalContext>
        </Layout>
      </LayersManager>
    </ThemeProvider>
  )
}

export default Home;
