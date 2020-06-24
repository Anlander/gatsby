import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby';
import '../components/sass/services.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../components/sass/homepage.scss"

AOS.init();



const Services = () => (
    
    <StaticQuery query={graphql`
    
    {
        allWordpressWpServices {
          edges {
            node {
            excerpt
            id
            title
            slug
            acf {
              about_service
              title
              service_image {
                source_url
              }
            }
            }
          }
        }
      }
      
      
        
    `}render={props => props.allWordpressWpServices.edges.map(ServiceItems => (
        <div key={ServiceItems.node.id}>
            <div data-aos="zoom-in" class="container-services">
                <img src={ServiceItems.node.acf.service_image.source_url} alt="" />
                <h2 dangerouslySetInnerHTML={{__html: ServiceItems.node.title}}/>
                <p>{ServiceItems.node.acf.about_service}</p>
                <Link to={`/services/${ServiceItems.node.slug}`} >
                    Read More
                </Link>
            </div>
            
        </div>


           

        
        
        
    ))} />
);

export default Services;