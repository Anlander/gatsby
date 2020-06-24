import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import SiteInfo from './SiteInfo';
import "../components/sass/main-menu.scss";





const MainMenuWrapper = styled.div`
 display:flex;
 height: 10vh;
`

const MenuItem = styled(Link)`
    color:white;
    display:flex;
    padding: 8px 16px;
    text-decoration: none;
    text-transform: uppercase;
    

`

const MainMenuInner = styled.div `
    margin: 0 auto;
    display:flex;
    width:80%;
    align-self: center;

`
// function scroll () {
//     if (window.pageYOffset > 0) {
//         if (scroll >= 150) {
//             this("main_menu").addClass("black");
//         } else {
//             this("main_menu").removeClass("black");
//         }
//     }
//   }

// onScroll={() => this.scroll}


const MainMenu = () => (
    
    <StaticQuery query={graphql`
    
        {
            allWordpressMenusMenusItems(filter: {
            name: {
                eq: "Main menu"  
            }
            }) {
            edges {
                node {
                name
                items {
                    slug
                    title
                    url
                }
                }
            }
            }
        }
        
    `}render={props =>(
        // vill du ändra vilken menu, EQ : FOOTER EX. (NAMNET)
        // Temp Fix för home link, i och med att jag ändrat settings för frontpage i CMS skapar det en http link för just myportfolio. FIX ASAP 
        <MainMenuWrapper className="main_menu">
              <MainMenuInner>
            <SiteInfo />
            <MenuItem to="/home">Home</MenuItem>
            {props.allWordpressMenusMenusItems.edges[0].node.items.map(item =>(
                <MenuItem to={`/${item.slug}`} key={item.title}>
                    {item.title}

                </MenuItem>
            ))}
            </MainMenuInner>
        </MainMenuWrapper>

        
    )} />
);

export default MainMenu;