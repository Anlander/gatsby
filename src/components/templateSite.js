// import React from 'react'
// import { graphql, StaticQuery, Link } from 'gatsby';
// import styled from 'styled-components';


// // const TemplateCSS = styled.div`
// //  display:flex;
// //  background-color: rgb(3, 27, 77);
// //  height: 10vh;
// // `



// const templateSite = () => (
    
//     <StaticQuery query={graphql`
    
       
        
//     `}render={props =>(

    // <p dangerouslySetInnerHTML={{__html: pageContext.content}} />
//         </MainMenuWrapper>
//     )} />
// );

// export default templateSite;




// -------- PARTNERS



// import React from 'react'
// import { graphql, StaticQuery, Link } from 'gatsby';






// const Partners = (data) => (
    
//     <StaticQuery query={graphql`
    
//             {
//                 allWordpressPage {
//                     edges {
//                       node {
//                           title
//                         acf {
//                           partners {
//                             partner_icon {
//                               source_url
//                             }
//                           }
//                         }
//                       }
//                     }
//                   }


//             }
                
            
      
        
//     `}render={props => (
        
         
//         props.allWordpressPage.edges[0].node.acf.partners[0].map(partneritems => (
//             <img src={partneritems.partner_icon.source_url} alt="test"/>
//         ))

        
       
        
    
        
        
        
//     )} />
// );

// export default Partners;