import React, { Fragment } from 'react'
import "../components/sass/homepage.scss"
import MainMenu from '../components/MainMenu'
import PageTransition from 'gatsby-plugin-page-transitions';
import '../images/gatsby-icon.png'
import Partners from '../components/partners'
import AOS from 'aos';
import 'aos/dist/aos.css';

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

                    

                    <div className="icon-more"> 
                        <h1 data-aos="fade-right" data-aos-duration="1500" className="icon-header"> Komplett service för att ta ditt företag till nästa nivå, <br></br>
                        Läs mer om vår expertis</h1>
                     <section className="flex-4">
                        <div data-aos="zoom-in" className="icon">
                            <img src={pageContext.acf.icon_1.source_url} alt="pic" />
                            <h2 dangerouslySetInnerHTML={{__html: pageContext.acf.icon_1.title}}/>
                            <p dangerouslySetInnerHTML={{__html: pageContext.acf.icon_1.caption}}/>
                        </div>

                        <div data-aos="zoom-in" className="icon">
                            <img src={pageContext.acf.icon_2.source_url} alt="pic" />
                            <h2 dangerouslySetInnerHTML={{__html: pageContext.acf.icon_2.title}}/>
                            <p dangerouslySetInnerHTML={{__html: pageContext.acf.icon_2.caption}}/>
                        </div>  

                        <div data-aos="zoom-in" className="icon">
                            <img src={pageContext.acf.icon_3.source_url} alt="pic" />
                            <h2 dangerouslySetInnerHTML={{__html: pageContext.acf.icon_3.title}}/>
                            <p dangerouslySetInnerHTML={{__html: pageContext.acf.icon_3.caption}}/>
                        </div>
                      </section>    
                    </div>

                    <div className="test"></div>
                    
                    


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