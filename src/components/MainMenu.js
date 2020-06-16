import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import SiteInfo from './SiteInfo';
import "../components/sass/main-menu.scss";


const MainMenuWrapper = styled.div`
 display:flex;
 background-color: rgb(3, 27, 77);
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
    width: 100% !important; 
    margin: 0 auto;
    display:flex;
    width:960px;
    align-self: center;

`

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
        <MainMenuWrapper className="main_menu">
              <MainMenuInner>
            <SiteInfo />
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