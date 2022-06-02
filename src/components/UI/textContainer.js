import styled from "styled-components"

export const TextContainer = styled.section `
    width: 70%;
    margin: auto;
    padding: 2em;
    max-width: 850px;
    margin-bottom: 1em;
    background-color: white;
    min-height: 80vh;
    @media(max-width: 800px){
        padding: 1em;
        width: 80%;
    }

    p, li {
      font-family: ${props => props.theme.fonts.par};
      color: ${props => props.theme.colors.navy};
      font-size: ${props => props.small? '18px': '22px'};
      padding: 0.5em 0;
      line-height: ${props => props.small? '26px': '33px'};
      z-index: 150;

      strong {
          color: ${props => props.theme.colors.red};
          font-weight: bold;
      }
      
      @media (max-width: 1100px){
          line-height: 28px;
      }

      @media (max-width: 900px){
          font-size: ${props => props.small? '18px': '20px'};
          line-height: ${props => props.small? '26px': '28px'};;
      }

      @media (max-width: 800px){
          font-size: 18px;
          line-height: 26px;
      }

      @media (max-width: 500px){
          line-height: 24px;
      }

      @media (max-width: 350px){
          font-size: 16px;
          line-height: 24px;
      }
    }

    h2, h3 {
        font-family: ${props => props.theme.fonts.heading1};
        color: ${props => props.theme.colors.navy};
        text-align: left;
        padding: 0.5em 0;
        margin: 1em 0;
      }
    h2 {
        font-size: 28px;
        @media (min-width: 600px){
            font-size: 30px;
        }
    }
    h3 {
        font-size: 22px;
        margin: 0.5em 0;
        @media (min-width: 600px){
            font-size: 25px;
        }
    }

    ul {
      li {
        margin-left: 1rem;
        padding:0.2rem;
       list-style: initial;
      }
    }
    img {
        max-width: 100%;
    }
`
