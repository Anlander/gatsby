import React, { Fragment } from 'react'
// import { Link } from 'gatsby';
import "../components/sass/homepage.scss"
import MainMenu from '../components/MainMenu'
import PageTransition from 'gatsby-plugin-page-transitions';
import '../images/gatsby-icon.png'





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
                <div>
                        
                     {/* <p>Down arrow: <i class="arrow down"></i></p> */}
                </div>
                </div>
                
            </PageTransition>
           
            
        </Fragment>
    
);