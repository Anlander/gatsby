import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/portfolioItems'
import "../components/sass/index.scss"
import "../components/sass/teams.scss"

export default ({pageContext}) => (
    <Layout>
        <div class="row heading">
            <div class="col-md-6 col-md-offset-3">
            <h2 class="text-center bottom-line">Meet Our Team</h2>
            <p class="subheading text-center">Creative Nerds</p>
        </div>
        <div className="teams">
        <PortfolioItems />
        </div>
           
        </div>
        
    </Layout>
);