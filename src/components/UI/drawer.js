import React from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { theme} from '../../theme';

const MenuContainer = styled.div`
  width: auto;
  position: relative;
  max-width: 400px;
`

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '1em',
    top: '0.9em'
  },
  bmBurgerBars: {
    background: theme.colors.white
  },
  bmBurgerBarsHover: {
    background: theme.colors.navy
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: theme.colors.red,

  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    maxWidth: '550px'
  },
  bmMenu: {
    background: theme.colors.navy,
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Drawer = () => {

    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <MenuContainer>
          <Menu pageWrapId={ "page-wrap" } styles={styles}>
            <main id="page-wrap">
              
            </main>
          </Menu>
      </MenuContainer>
    );

}

export default Drawer;