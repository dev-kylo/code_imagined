import React, { useState } from "react";
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
import FadeOnScroll from "../hoc/fadeOnScroll";


const Home = () => {

  const [scrollingDown, setScrollingDown] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <FadeOnScroll setScrollDown={ setScrollingDown }>
        <LayersManager>
          <Layout >
            <ModalContext>
              <Nav scrollingDown={scrollingDown} />
              <SvgTextGrid />
              <Explainer />
              <SignUp />
            </ModalContext>
          </Layout>
        </LayersManager>
      </FadeOnScroll>
    </ThemeProvider>
  )
}

export default Home;
