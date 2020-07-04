import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import "../components/sass/index.scss"

export default ({pageContext}) => (
    <Layout>
        <Header />
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div>
            <p dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </div>
        
    </Layout>

    
);

