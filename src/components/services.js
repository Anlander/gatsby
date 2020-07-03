import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby';
import '../components/sass/services.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../components/sass/homepage.scss"
import { Col } from 'react-bootstrap';




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
        <Col key={ServiceItems.node.id} className="text-align-center" data-aos-duration="1500" >
          <Link to={`/services/${ServiceItems.node.slug}`} >
          <div className="div-grid">
            <img  data-aos="fade-left" src={ServiceItems.node.acf.service_image.source_url} alt="" />
              <h2 dangerouslySetInnerHTML={{__html: ServiceItems.node.title}}/>
                <div className="overlay" >
                  <h4 className="h4-text-overlay">LÄS MER {ServiceItems.node.title} </h4>
                  <div className="text"><img src="/long-arrow.png"/></div>
              </div>
          </div>
          </Link>
          </Col>
               
            


           

        
        
        
    ))} />
);

export default Services;