import React from "react"
import App from './navbar'
// import styled, {createGlobalStyle} from 'styled-components'
import PageTransition from 'gatsby-plugin-page-transitions'
import "../components/sass/layout.scss"




const Layout = ({ children }) => (
  <div classNaMe="Main-Layout">

    <App />
    <PageTransition >
      <div className="layout">{children}</div>
    </PageTransition>
    
  </div>
)


export default Layout
