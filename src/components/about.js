import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import "../components/sass/about.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
const About = () => (
  <StaticQuery
    query={graphql`
    {
      allWordpressPage(filter: {title: {eq: "Om oss"}}) {
        edges {
          node {
            title
            acf {
              about_text_left
              about_text_right
              about_image_left {
                source_url
              }
              about_image_right {
                source_url
              }
            }
          }
        }
      }
    }
    
    `}
    render={data => (
        
      <div className="container-about">
        {data.allWordpressPage.edges.map((edge, key)  => (
        <Container className="container-about"> 
            <Row clasName="row-1-about">
             <Col><h4>{edge.node.acf.about_text_right}</h4></Col>
              <Col><img src={edge.node.acf.about_image_left.source_url} alt="Thumbnail" /></Col>
            </Row>
            
            <Row clasName="row-1-about">
              <Col><img src={edge.node.acf.about_image_right.source_url} alt="Thumbnail" /></Col>
              <Col><h4>{edge.node.acf.about_text_left}</h4></Col>
           </Row>
          </Container>  

          )
      
        )}
      </div>
       
      )} />
  );
  

export default About
