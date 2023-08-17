import styled from 'styled-components'

const DrawerItem = styled.li`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* list-style-type: none; */
    text-transform: uppercase;
    border-bottom: 2px solid white;

    a {
        color: white;
        text-decoration: none;
        :hover {
            color: ${props => props.theme.colors.red};
            filter: brightness(1.5);
            font-weight: 800;
            border-color: ${props => props.theme.colors.navy};
        }
    }
`

export default DrawerItem
