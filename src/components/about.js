import React from "react"
import { StaticQuery, graphql } from "gatsby"

const About = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressPage(filter: {title: {eq: "Om oss"}}) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `}
    render={data => (
        
        <div className="logo_image_single" >
        {data.allWordpressPage.edges.map((edge, key)  => (
            <h1>{edge.node.title}</h1>
  
          )
      
        )}
      </div>
  
          
          
      )} />
  );
  

export default About
