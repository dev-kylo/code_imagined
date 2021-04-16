import "@fontsource/playfair-display/900.css";
import "@fontsource/raleway";


export const theme = {
    breakpoints: ['350px', '500px', '800px', '1100px'],
    fontSizes: [
        12, 14, 16, 18, 20, 24, 32, 48, 64
    ],
    colors: {
        background: '#01140F',
        blue: '#0E34A0',
        grey: '#495867',
        white: '#bdd5ea',
        red: '#AB3428',
        green: '#008578',
        purple: '#5F5980',
        pink: 'pink',
        navy: '#041440'
    },
    fonts: {
        heading1: "'Playfair Display', serif",
        heading2: "font-family: 'Jockey One', sans-serif",
        par: "'Raleway', sans-serif"
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
      },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    shadows: {
        small: '0 0 4px rgba(0, 0, 0, .125)',
        large: '0 0 24px rgba(0, 0, 0, .125)'
    },
    variants: {
          nav: {
              color: 'white'
          },
          signup: {
              fontSize: [18, 18, 18, 18],
              fontFamily: "'Raleway', sans-serif"
          }
    },
    text: {
      fontFamily: "'Raleway', sans-serif"
    },
    buttons: {
        primary: {
          color: 'white',
          bg: '#AB3428',
          cursor: 'pointer'
        },
        signup: {
            color: 'white',
            bg: '#AB3428',
            margin: '1em auto',
            cursor: 'pointer',
            padding: '1em 1.5em',
            fontSize: '1.2em'
        }
    },
    forms: {
        input: {
          color: 'red',
          border: '2px solid navy',
          padding: '0.7rem',
          fontSize: [18],
        },
        select: {
        },
        textarea: {
        },
        label: {
          color: '#041440', 
          fontSize: '1.2rem',
          fontWeight: 'bold'
        },
        switch: {
            backgroundColor: 'white',
            color: 'red',
        },
        radio: {},
        checkbox: {},
    },
}