import React from 'react'
import { graphql, StaticQuery } from 'gatsby';
import '../components/sass/teams.scss'





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
                    acf {
                        work_as
                        about
                    }
                }
                }
                }
            }
      
        
    `}render={props => props.allWordpressWpPortfolio.edges.map(PortfolioItems => (
        <div class="container" key={PortfolioItems.node.id}>
        <div class="row team-row">
            <div>
            <div class="team-member text-center">
                <div class="team-img">
                <img src={PortfolioItems.node.featured_media.source_url} alt="" />
                <div class="overlay">
                    <div class="team-details text-center">
                    <p class="team-about"> {PortfolioItems.node.acf.about} </p>
                    </div>
                 </div>
                </div>
                <h6 class="team-title">{PortfolioItems.node.title}</h6>
                <span>{PortfolioItems.node.acf.work_as}</span>
            </div>
            </div>          
            </div>
        </div>
        
        
        
    ))} />
);

export default PortfolioItems;