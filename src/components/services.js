import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby';
import '../components/sass/services.scss'
import "../components/sass/homepage.scss"
import { Col } from 'react-bootstrap';
import LongArrow from "../../public/static/long-arrow.png";




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
        <Col key={ServiceItems.node.id} className="text-align-center">
          <Link to={`/services/${ServiceItems.node.slug}`} >
          <div className="div-grid">
            <img src={ServiceItems.node.acf.service_image.source_url} alt="" />
              <h2 dangerouslySetInnerHTML={{__html: ServiceItems.node.title}}/>
                <div className="overlay" >
                  <h4 className="h4-text-overlay">LÄS MER {ServiceItems.node.title} </h4>
                  <div className="text"><img src={LongArrow} alt="thumbnail"/></div>
              </div>
          </div>
          </Link>
          </Col>
               
            


           

        
        
        
    ))} />
);

export default Services;