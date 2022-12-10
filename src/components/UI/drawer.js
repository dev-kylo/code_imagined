import { Link } from 'gatsby';
import React, {useContext} from 'react';
import { bubble as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { MenuContext } from '../../context/menuContext';
import { theme} from '../../theme';
import BurgerMenu from './burgerMenu';
import DrawerItem from './drawerItem';
import { Flex, Text} from 'rebass/styled-components/';
import { Label, Switch } from '@rebass/forms/styled-components';
import { SignupContext } from '../../context/toggle';
import { Hl } from './text.styled';


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


const Drawer = ({posts}) => {

  const {menuIsOpen, openMenu, closeMenu} = useContext(MenuContext);
  const {animate, toggleAnimate } = useContext(SignupContext);
    return (
      <MenuContainer>
          <Menu onClose={closeMenu} isOpen={menuIsOpen} right pageWrapId={ "page-wrap" } styles={styles} customBurgerIcon={<ButtonWrapper><BurgerMenu hide={menuIsOpen}  click={openMenu} /></ButtonWrapper>}>

            <Flex justifyContent='center' alignItems='center'>
            <Text fontSize={[14, 14, 18, 18]}><Hl red={!animate}>Animations {animate? 'ON' : 'OFF'}</Hl></Text>
                <Label sx={{display: 'flex', alignItems: 'center', width: '4em'}}> 
                    <Switch
                        color={animate? 'green' : 'red'}
                        checked={animate}
                        onClick={toggleAnimate}
                        sx={{ cursor: 'pointer' }}
                        m='5px'
                    />
                </Label>
            </Flex>
             
            <ul style={{width: '100%'}}>
              {/* <DrawerItem><Link to="/workshops">Workshops</Link></DrawerItem> */}
              <DrawerItem><Link to="/course-updates">🔥Course Release🔥</Link></DrawerItem>
              <DrawerItem><Link to="/posts/flying-ships-object-cloning-short-course">Taster Course</Link></DrawerItem>
              <DrawerItem><a target="_blank" rel="noopener noreferrer" href="https://www.codenewbie.org/podcast/how-to-use-different-memory-techniques-to-learn-coding"> Code Newbie Podcast</a></DrawerItem>
              <DrawerItem><Link to="/extra">Extra Reading</Link></DrawerItem>
            </ul> 
        
            
          </Menu>
      </MenuContainer>
    );

}


export default Drawer;

