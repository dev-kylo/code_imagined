import { graphql } from 'gatsby';
import React, {useState} from 'react';
import { bubble as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { theme} from '../../theme';
import CircleCrossIcon from './circleCross';



const MenuContainer = styled.div`
  width: auto;
  position: relative;
  max-width: 400px;

  @media (min-width: 800px){
    .bm-menu-wrap {
      min-width: 500px
    }
  }



`

const ButtonWrapper = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 10000;
  width: 56px!important;
  height: auto!important;

`


const styles = {
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: theme.colors.red,

  },
  bmMenuWrap: {
    position: 'fixed',
    maxWidth: '550px',
  },
  bmMenu: {
    background: theme.colors.black,
    padding: '1.5em 1em 0',
    fontSize: '1.15em',
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
          <Menu onClose={closeHandler} isOpen={isOpen} right pageWrapId={ "page-wrap" } styles={styles} customBurgerIcon={<ButtonWrapper><CircleCrossIcon hide={isOpen}  onClick={openHandler} /></ButtonWrapper>}>
            <main id="page-wrap">
              <h3>The Great Sync</h3>
              <p> A bit about me</p>
              <h3>HOME</h3>
              <h3>RESOURCES</h3>
              <h4> Most Recent Posts</h4>
              {posts.map(edge => <a key={edge.node.id}> {edge.node.frontmatter.title}</a>)}
            </main>
          </Menu>
      </MenuContainer>
    );

}


export default Drawer;

