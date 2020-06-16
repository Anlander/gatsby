import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import '../components/sass/teams.scss'


const FeutreImge = styled.img`
    max-width: 100%;
    display:flex;
    margin: 0 auto;
    max-height:100%;
`


const PortfolioItems = () => (
    
    <StaticQuery query={graphql`
    
            {
                allWordpressWpPortfolio {
                edges {
                    node {
                    id
                    slug
                    title
                    content
                    excerpt
                    featured_media {
                        source_url
                    }
                    }
                }
                }
            }
      
        
    `}render={props => props.allWordpressWpPortfolio.edges.map(PortfolioItems => (
        <div className="single-team" key={PortfolioItems.node.id}>
            <FeutreImge src={PortfolioItems.node.featured_media.source_url} alt="thumbnail" />
            <h2>{PortfolioItems.node.title}</h2>
            <div dangerouslySetInnerHTML={{__html: PortfolioItems.node.excerpt}} />
            <Link to={`/portfolio/${PortfolioItems.node.slug}`}> Read More </Link>
        </div>
        
    ))} />
);

export default PortfolioItems;