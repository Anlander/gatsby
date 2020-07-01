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
                            </Col>
                            <Col id="mySidenav" class="sidenav">
                            <a href="https://instagram.com" id="about">IG</a>
                            <a href="https://facebook.com" id="blog">FB</a>
                            </Col>
                        </Row>
                        
                    </Container> 
                    <Container className="stickynavbar">
                        <Row>
                            <Col className="onscroll-nav">< MainMenu /></Col>
                            <Col ClassName="onscroll-img"><h1>icons</h1></Col>
                        </Row>
                    <div ></div> 
                   
                        </Container>
                        
                    <h1 data-aos="flip-in" data-aos-duration="1500" className="header-service"> Komplett service för att ta ditt företag till nästa nivå, <br></br>
                                <a href="/services">Läs mer om vår expertis</a></h1>
                         
                         <Container>
                              <Row>
                                <Services />
                              </Row>    
                         </Container>
                             
                        
                        <div className="background">
                           
                        </div>
                        <div className="about-us">
                            <h4>
                                Veera Consulting AB är ett etablerat företag inom nykundsbearbetning och kvalificerad mötesbokning. 
                                Företaget består av olika affärsområden inom IT, HR, Media, Finans och Consulting, 
                                som hjälper företag inom respektive bransch att hitta nya potentiella kunder.
                            </h4>
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