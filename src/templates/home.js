import React, { Fragment } from 'react'
import "../components/sass/homepage.scss"
import MainMenu from '../components/MainMenu'
import PageTransition from 'gatsby-plugin-page-transitions';
import '../images/gatsby-icon.png'
import Partners from '../components/partners'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from '../components/services'

AOS.init();



export default ({pageContext}) => (

    <Fragment>
            <MainMenu />
            <PageTransition>
                <div className="main">
                    <div className="section-flex"> 
                        <section className="flex-1">
                            <h2>{pageContext.acf.hero_title}</h2>
                            
                        </section>
                        <section className="flex-2">
                        <img src={pageContext.acf.picture_logo.source_url} alt='thumbnail' />
                        </section>
                    </div> 
                    <div className="background"></div>
                        <div>
                           <h1 data-aos="fade-in" data-aos-duration="1500" className="header-service"> Komplett service för att ta ditt företag till nästa nivå, <br></br>
                                <a href="/services">Läs mer om vår expertis</a></h1>
                            <div className="icons-single">
                            <Services />
                          </div>
                        </div>
                    
                        <div className="background"></div>

                    <div 
                        className="Sammarbeten" 
                        data-aos="fade-up"
                        data-aos-duration="3000"
                     > 
                         <section className="flex-3">
                            <div className="logo_images">
                              <Partners />  
                          </div>          
                       </section>    
                      </div>
                  </div>
                
            </PageTransition>
           
            
        </Fragment>
    
);