import React from 'react'
import { graphql, StaticQuery } from 'gatsby';
import "../components/sass/partners.scss"






const Partners = () => (
    
    <StaticQuery query={graphql`
    {
      wordpressPage {
        acf {
          logo_gallery {
            source_url
          }
        }
      }
    }
    
    
        
            
      
        
    `}render={data => (
        
      
        <div className="logo_image_single" >
          {data.wordpressPage.acf.logo_gallery.map((items, key)  => (
            <div key={key}>
              <img src={items.source_url} alt="thumbnail" />
            </div>
  
          ))}
        </div>

        
        
    )} />
);

export default Partners;