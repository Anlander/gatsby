import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components';


const FeutreImge = styled.img`
    max-width: 100%;
    display:flex;
    margin: 0 auto;
    max-height:100%;
`


export default ({pageContext}) => (
    <Layout>
     <div className="single-portfolio">
         <h1>
            {pageContext.title}
           </h1>
          <FeutreImge src={pageContext.featured_media.source_url} alt="thumbnail" />
    </div>
        
    </Layout>
);