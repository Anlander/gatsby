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
                    <section className="section-flex"> 
                        <div className="flex-1">
                            <h2>Låt oss analysera & optimera din försäljning</h2>
                        </div>
                        <div className="flex-2">

                        
                    </div>
                    </section>
                </div>
            </PageTransition>
           
            
        </Fragment>
    
);