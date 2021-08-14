import styled from 'styled-components';


export const Grid2 = styled.div`
    display: grid;
    grid-template-columns: ${props => props.col1size} ${props => props.col2size};
    grid-template-rows: minmax(100vh, 1fr);

    grid-template-areas: 
        "gridcol1 gridcol2";

    @media (max-width: 1300px){
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 900px){
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
        "gridcol2"
        "gridcol1";
    }
`

export const GridCol1 = styled.div `
    grid-area: gridcol1;
`
export const GridCol2 = styled.div `
    grid-area: gridcol2;
    padding: 2em;
    margin-top: 1em;
`

export const LandingGrid = styled.section `
display: grid;
grid-template-columns: 1fr;
grid-template-rows:
    minmax(160vh, auto)
    minmax(100vh, auto)
    minmax(50vh, auto)
    minmax(55vh, auto)
    minmax(50vh, auto)
    minmax(55vh, auto)
    minmax(50vh, auto)
    minmax(55vh, auto)
    minmax(50vh, auto)
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

@media (orientation: landscape) and (min-width: 580px) {
    grid-template-rows:
    minmax(100vh, auto)
    minmax(45vh, auto)
    minmax(30vh, auto)
    minmax(45vh, auto)
    minmax(30vh, auto)
    minmax(55vh, auto)
    minmax(40vh, auto)
    minmax(55vh, auto)
    minmax(35vh, auto)
    minmax(50vh, auto);
}
    

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

`


;

export const GridArea = styled.div`
    grid-area: ${props => props.name};
    display: flex;
    position: relative;
     background-color: ${props => props.color};

`