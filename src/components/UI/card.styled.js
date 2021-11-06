import styled from 'styled-components';
import { Card, Image, Text } from "rebass/styled-components";
import React from 'react';
import { theme } from '../../theme';

const Paper = styled.div`
    background: ${({red, theme}) => red ? theme.colors.navy : theme.colors.blue};
    height: 8rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem;

    :hover {
        background: ${({theme}) => theme.colors.green};
        cursor: pointer;
        
    }


    span {
        font-size: 2rem;
        font-family: ${props => props.theme.fonts.heading2};
        font-weight: 900;
        color: white;
        padding: 0;
        margin: 0;


    }
`


const StyledCard = styled(Card)`
    margin: 1rem;
    border: ${({red, theme}) => red ? "4px solid" + theme.colors.navy : "4px solid" + theme.colors.blue};
    
    :hover > span {
        color: ${({theme}) => theme.colors.green};
        
    }

    @media(min-width: 1000px){
        margin: auto;
    }

`


const PostCard = (props) => (
    <StyledCard width={[ 256, 320 ]} mx='auto' red={props.red}>
        <Image src='https://source.unsplash.com/random/512x384?space' />
        <Paper className="paper" red={props.red}>
            <span>
               {props.children}
            </span>
        </Paper>
    </StyledCard>
);

export default PostCard;