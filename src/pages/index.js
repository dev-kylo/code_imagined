import React from "react";
import SEO from '../layout/seo';
import Layout from '../layout/layout';
import { theme } from '../layout/theme';
import { ThemeProvider } from 'styled-components';
import Explainer from '../content/text/explainer';
import SvgTextGrid from '../content/svg_text_grid/svgTextGrid';

// import Popup from '../styled/popup';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <Layout >
        
        <SvgTextGrid />
        <Explainer />
        
      </Layout>
    </ThemeProvider>
  )
}
