import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import "../components/sass/main-menu.scss";


const MenuItem = styled(Link)`
    color:white;
    
    text-decoration: none;
    text-transform: uppercase;
    background:none;

`

const MainMenuInner = styled.div `
    background:none;
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
        // Temp Fix för home link, i och med att jag ändrat settings för frontpage i CMS skapar det en http link för just myportfolio. FIX ASAP 

        <div class="flex">
            <MainMenuInner>
            <li><MenuItem to="/home">Home</MenuItem></li>
            {props.allWordpressMenusMenusItems.edges[0].node.items.map(item =>(
                <MenuItem to={`/${item.slug}`} key={item.title}>
                  <li>{item.title}</li>  

                </MenuItem>
            ))}
            </MainMenuInner>
        </div>
        
    )} />
      
            
);

export default MainMenu;