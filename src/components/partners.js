import React from 'react'
import { graphql, StaticQuery } from 'gatsby';
import "../components/sass/partners.scss"
import { Col, Container, Row } from 'react-bootstrap';





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
        
      <Container className="logo_image_single" >
        <Row classNAme="partners-row">
        
      {data.allWordpressPage.edges.map((edge, key)  => (
        edge.node.acf.logo_gallery.map(({localFile}) =>
        
        <Col data-aos="fade-in">
        <img
        src={
          localFile.childImageSharp.fluid.src
        }
        alt={localFile.name}
        className="slick-image"
      />
      </Col>
      

        )
    


      ))}
      </Row>
    </Container>

        
        
    )} />
);

export default Partners;