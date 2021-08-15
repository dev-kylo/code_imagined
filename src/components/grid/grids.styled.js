import styled from 'styled-components';


export const LandingGrid = styled.section `
display: grid;
grid-template-columns: 1fr;
grid-template-rows:
    minmax(100vh, auto)
    minmax(60vh, auto)
    minmax(30vh, auto)
    minmax(55vh, auto)
    minmax(50vh, auto)
    minmax(55vh, auto)
    minmax(50vh, auto)
    minmax(55vh, auto)
    minmax(35vh, auto)
    minmax(50vh, auto);
grid-template-areas:
    "svg1"
    "svg1_text"
    "svg2"
    "svg2_text"
    "svg3"
    "svg3_text"
    "svg4"
    "svg4_text"
    "svg5"
    "svg5_text";

// @media (orientation: landscape) and (min-width: 550px) {
//     grid-template-rows:
//     minmax(160vh, auto)
//     minmax(45vh, auto)
//     minmax(30vh, auto)
//     minmax(45vh, auto)
//     minmax(30vh, auto)
//     minmax(55vh, auto)
//     minmax(40vh, auto)
//     minmax(55vh, auto)
//     minmax(35vh, auto)
//     minmax(50vh, auto);
// }
    

@media (min-width: 600px){
    grid-template-columns: 50% 50%;
    grid-template-areas:
    "svg1 svg1_text"
    "svg1 svg2"
    "svg2_text svg2"
    "svg2_text svg2"
    "svg3	svg2"
    "svg3 svg3_text"
    "svg3 svg4"
    "svg4_text svg4"
    "svg5 svg4"
    "svg5 svg5_text";

    grid-template-rows:
    minmax(80vh, auto)
    minmax(10vh, auto) 
    minmax(35vh, auto) 
    minmax(15vh, auto) 
    minmax(5vh, auto) 
    minmax(45vh, auto) 
    minmax(5vh, auto) 
    minmax(45vh, auto) 
    minmax(5vh, auto) 
    minmax(45vh, auto);   
}

@media (orientation: portrait) and (min-width: 1000px) {
    grid-template-rows:
    minmax(40vh, auto)
    minmax(15vh, auto)
    minmax(10vh, auto)
    minmax(5vh, auto)
    minmax(5vh, auto)
    minmax(10vh, auto)
    minmax(5vh, auto)
    minmax(15vh, auto)
    minmax(5vh, auto)
    minmax(15vh, auto);
}

`


;

export const GridArea = styled.div`
    grid-area: ${props => props.name};
    display: flex;
    position: relative;
     background-color: ${props => props.color};

`