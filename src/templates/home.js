
import React, { Fragment } from 'react'
import "../components/sass/homepage.scss"
import PageTransition from 'gatsby-plugin-page-transitions';
import '../images/gatsby-icon.png'
import Partners from '../components/partners'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from '../components/services'
import Navbar from '../components/navbar'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainMenu from '../components/MainMenu'
AOS.init();



export default ({pageContext}) => (

    <Fragment>
        <Navbar />
           
            <PageTransition className="position-rel">
                <div className="main">
                    <Container className="section-flex"> 
                        <Row className="flex-1">
                        <Col className="col-1">
                        </Col>
                            <Col data-aos="fade-right" data-aos-duration="1500" className="col-header col-6">
                                <img src={pageContext.acf.picture_logo.source_url} alt='thumbnail' />
                                <h2>{pageContext.acf.hero_title}</h2>
                                <a href="#menu-section"><img className="icon-down" src="arrow-down.png" alt='thumbnail' /></a>
                            </Col>
                            <Col >
                            {/* <a href="https://instagram.com" id="about">IG</a> */}
                           
                            </Col>
                        </Row>
                    </Container> 

                    <Container className="stickynavbar" id="menu-section">
                        <Row>
                            <Col className="onscroll-nav">< MainMenu /></Col>
                        </Row>
                    </Container>
                        
                    
                    
                         <Container className="service-container">
                         <h1 data-aos="fade-in" data-aos-duration="1500" className="header-service"> Komplett service för att ta ditt företag till nästa nivå <br></br>
                                <a href="/services">Läs mer om vår expertis <img src="/long-arrow.png"/></a>
                                <div className="border-width"></div>
                                </h1>
                                
                              <Row className="service-row">
                                  
                                <Services />
                              </Row>    
                              
                         </Container>
                             
                        
                        <div className="background">
                           
                        </div>
                       
                       <div 
                        className="Sammarbeten" 

                     > 
                         <section className="flex-3">
                            <div className="logo_images">
                              {/* <Partners />   */}
                              <h1>dadwd</h1>
                          </div>          
                       </section>     
                    </div>
                  </div> 
                
            </PageTransition>
           
            
        </Fragment>
    
);