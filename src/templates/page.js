import React from 'react'
import Layout from '../components/layout'
import "../components/sass/index.scss"
import MainMenu from '../components/MainMenu.js'

export default ({pageContext}) => (
    <Layout>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div>
            <p dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </div>
    </Layout>
);