
import React, { Fragment } from 'react'
import "../components/sass/homepage.scss"
import PageTransition from 'gatsby-plugin-page-transitions';
import '../images/gatsby-icon.png'
import Partners from '../components/partners'
import Services from '../components/services'
import About from '../components/about'
import Navbar from '../components/navbar'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainMenu from '../components/MainMenu'
import arrowdown from "../images/arrow-down.png";
import LongArrow from "../images/long-arrow.png";





export default ({pageContext}) => (

    <Fragment>
        <Navbar />
           
            <PageTransition className="position-rel">
                <div className="main">
                    <Container className="section-flex"> 
                        <Row className="flex-1">
                        <Col className="col-1">
                        </Col>
                            <Col className="col-header col-6">
                                <img src={pageContext.acf.picture_logo.source_url} alt='thumbnail' />
                                <h2>{pageContext.acf.hero_title}</h2>
                                <a href="#menu-section"><img className="icon-down" src={arrowdown} alt='thumbnail' /></a>
                               </Col>
                             <Col >
                            {/* <a href="https://instagram.com" id="blog">IG</a>                            */}
                            </Col>
                        </Row>
                    </Container> 


                    {/* STICKY MENU SECTION */}
                    <Container className="stickynavbar" id="menu-section">
                        <Row>
                            <Col className="onscroll-nav">< MainMenu /></Col>
                        </Row>
                    </Container>
                    {/* END */}   

                    {/* ABOUT SECTION */}
                        <About />

                     {/* END */}   
                    
                       {/* SERVICE SECTION */}
                         <Container className="service-container">
                         <h1 className="header-service"> Komplett service för att ta ditt företag till nästa nivå <br></br>
                                <a href="/services">Läs mer om vår expertis <img src={LongArrow} alt="thumb" /></a>
                                <div className="border-width"></div>
                                </h1> 
                              <Row className="service-row">    
                                <Services />
                              </Row>     
                         </Container>
                         {/* END */}   
                             
                        
                        <div className="background">
                           
                        </div>
                       

                {/* PARTNER SECTION */}   
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
                {/* END */}   

            </PageTransition>
           
            
        </Fragment>
    
);