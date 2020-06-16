import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
    flex-grow: 1;
    color:white;
    align-items: center;
    display: flex;

`

const SiteTitle = styled.div`
    color:white;
    font-weight: 200;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 5px;
   
    
`




const SiteInfo = () => (
    <StaticQuery query={graphql`

            {
                allWordpressSiteMetadata{
                edges{
                    node{
                    name
                    description
                    }
                }
                }
            }
    
    `} render={props => (

        <SiteInfoWrapper>
            <SiteTitle>
                {props.allWordpressSiteMetadata.edges[0].node.name}
            </SiteTitle>
            {/* <div>
                {props.allWordpressSiteMetadata.edges[0].node.description}
            </div> */}
        </SiteInfoWrapper>
       

   )} />
);

export default SiteInfo;