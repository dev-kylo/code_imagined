import { Link } from 'gatsby';
import React, {useState} from 'react';
import { bubble as Menu } from 'react-burger-menu';
import styled from 'styled-components';
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
    right: 2rem;
    bottom: 2rem;
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
    background: theme.colors.black,
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
}

const Drawer = ({posts}) => {

  const [isOpen, setOpen] = useState(false);

    const openHandler = (e) => {
      e.preventDefault();
      setOpen(!isOpen);
    };

    const closeHandler = () => {
      setOpen(false);
    }


    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <MenuContainer>
          <Menu onClose={closeHandler} isOpen={isOpen} right pageWrapId={ "page-wrap" } styles={styles} customBurgerIcon={<ButtonWrapper><BurgerMenu hide={isOpen}  click={openHandler} /></ButtonWrapper>}>
      
            <ul style={{width: '100%'}}>
              <DrawerItem><Link to="/">Home</Link></DrawerItem>
              <DrawerItem><Link to="/workshops">Workshops</Link></DrawerItem>
              {/* <DrawerItem><Link to="/resources">Blog</Link></DrawerItem> */}
              <DrawerItem><Link to="/extra">Extra Reading</Link></DrawerItem>
            </ul> 
        
            
          </Menu>
      </MenuContainer>
    );

}


export default Drawer;

