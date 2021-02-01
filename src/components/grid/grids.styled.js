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
    100vh
    45vh
    30vh
    45vh
    30vh
    55vh
    40vh
    55vh
    35vh
    50vh;
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
    70vh
    10vh 
    35vh
    15vh
    5vh
    45vh
    5vh
    45vh
    5vh
    45vh;  
}

@media (min-width: 780px){
    grid-template-rows:
    85vh
    20vh 
    35vh
    15vh
    15vh
    45vh
    15vh
    45vh
    15vh
    45vh;
}


@media (min-width: 700px) and (orientation: portrait) and (min-height: 1050px){
    grid-template-rows:
    45vh
    15vh 
    15vh
    15vh
    15vh
    25vh
    10vh
    30vh
    10vh
    20vh;
}
`;

export const GridArea = styled.div`
    grid-area: ${props => props.name};
    display: flex;
    position: relative;
     background-color: ${props => props.color};

`