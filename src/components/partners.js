import React from 'react'
import { graphql, StaticQuery } from 'gatsby';
import "../components/sass/partners.scss"






const Partners = () => (
    
    <StaticQuery query={graphql`
    {
      allWordpressPage(filter: {title: {eq: "Home"}}) {
        edges {
          node {
            title
            acf {
              logo_gallery {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    
    
    
        
            
      
        
    `}render={data => (
        
      <div className="logo_image_single" >
      {data.allWordpressPage.edges.map((edge, key)  => (
        edge.node.acf.logo_gallery.map(({localFile}) =>
        <img
        src={
          localFile.childImageSharp.fluid.src
        }
        alt={localFile.name}
        className="slick-image"
      />

        )
    


      ))}
    </div>

        
        
    )} />
);

export default Partners;