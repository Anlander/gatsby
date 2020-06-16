import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/portfolioItems'
import "../components/sass/index.scss"
import "../components/sass/teams.scss"

export default ({pageContext}) => (
    <Layout>
        <div className="teams">
        {/* <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />  */}
        {/* <div>
            <p dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </div> */}
        <PortfolioItems />
        </div>
        
    </Layout>
);