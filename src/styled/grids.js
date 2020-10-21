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
grid-template-columns: 50% 50%;
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
grid-template-areas:
    "svg1 svg1_copy"
    "svg1 svg2"
    "svg2_copy	svg2"
    "svg2_copy	svg2"
    "svg3	svg2"
    "svg3 svg3_copy"
    "svg3 svg4"
    "svg4_copy svg4"
    "svg5 svg4"
    "svg5 svg5_copy"
`;

export const GridArea = styled.div`
    grid-area: ${props => props.name};
    display: flex;
     background-color: ${props => props.color};
`