import { Link } from 'gatsby';
import React, {useContext} from 'react';
import { bubble as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { MenuContext } from '../../context/menuContext';
import { theme} from '../../theme';
import BurgerMenu from './burgerMenu';
import DrawerItem from './drawerItem';


const MenuContainer = styled.div`
  width: auto;
  position: relative;
  max-width: 400px;

  @media (min-width: 800px){
    .bm-menu-wrap {
      min-width: 300px
    }
  }

`

const ButtonWrapper = styled.div`
  position: fixed;
  right: 4rem;
  bottom: 2rem;
  z-index: 10000;
  width: 50px!important;
  height: auto!important;

  @media(max-width: 780px){
    right: 1.5rem;
    bottom: 1rem;
  }

`


const styles = {
  bmCrossButton: {
    height: '24px',
    width: '24px',
    right: '15px'
  },
  bmCross: {
    background: theme.colors.white,
    width: '6px',
    height: '28px',
  },
  bmMenuWrap: {
    position: 'fixed',
    maxWidth: '550px',
  },
  bmMenu: {
    background: theme.colors.blue,
    padding: '1.5em 1em 0',
    fontSize: '1.15em',
    width: '100%'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'block',
    width: '100%!important'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

const Highlight = styled.span`
  background: ${({ theme }) =>  theme.colors.red};
  color: white;
  padding: 0.5em 1em;
`

const Drawer = ({posts}) => {

  const {menuIsOpen, openMenu, closeMenu} = useContext(MenuContext)

    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <MenuContainer>
          <Menu onClose={closeMenu} isOpen={menuIsOpen} right pageWrapId={ "page-wrap" } styles={styles} customBurgerIcon={<ButtonWrapper><BurgerMenu hide={menuIsOpen}  click={openMenu} /></ButtonWrapper>}>
      
            <ul style={{width: '100%'}}>
              <DrawerItem><Link to="/">Home</Link></DrawerItem>
              {/* <DrawerItem><Link to="/workshops">Workshops</Link></DrawerItem> */}
              <DrawerItem><Highlight><Link to="/posts/flying-ships-object-cloning-short-course">Course Release</Link></Highlight></DrawerItem>
              <DrawerItem><Link to="/posts/flying-ships-object-cloning-short-course">Taster Course</Link></DrawerItem>
              <DrawerItem><a target="_blank" rel="noopener noreferrer" href="https://www.codenewbie.org/podcast/how-to-use-different-memory-techniques-to-learn-coding"> Code Newbie Podcast</a></DrawerItem>
              <DrawerItem><Link to="/extra">Extra Reading</Link></DrawerItem>
            </ul> 
        
            
          </Menu>
      </MenuContainer>
    );

}


export default Drawer;

