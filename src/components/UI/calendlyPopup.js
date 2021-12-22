import React from "react";
import { PopupButton } from "react-calendly";
import styled from "styled-components";


const CalendlyButton = styled.div`
    button {
        background: ${props => props.theme.colors.red};
    color: white;
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 1.5em 0;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 1.2rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                box-shadow 150ms ease-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-shadow: 5px -5px ${props => props.theme.colors.green};


        &:hover,
        button:focus {
            background: ${props => props.theme.colors.blue};
            box-shadow: 7px -7px ${props => props.theme.colors.pink};
        }

        &:focus {
            outline: 1px solid #fff;
            outline-offset: -4px;
        }

        &:active {
            transform: scale(0.99);
        }
    }

`

const CalendlyPopupButton = () => {
    return (
        <CalendlyButton>
        <PopupButton
            className=""
            pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideGdprBanner: true,
                hideLandingPageDetails: false,
                primaryColor: '00a2ff',
                textColor: '4d5055'
            }}
            prefill={{
                date: new Date('2021-12-16T03:05:43.116Z'),
                email: 'test@test.com',
                firstName: 'Jon',
                lastName: 'Snow',
                name: 'Jon Snow'
            }}
            styles={{}}
            text="Join an upcoming workshop!"
            url="https://calendly.com/thegreatsync"
            utm={{
                utmCampaign: 'Spring Sale 2019',
                utmContent: 'Shoe and Shirts',
                utmMedium: 'Ad',
                utmSource: 'Facebook',
                utmTerm: 'Spring'
            }}
            />
            </CalendlyButton>
    )
};

export default CalendlyPopupButton;