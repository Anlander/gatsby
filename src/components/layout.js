import React from "react"
import MainMenu from './MainMenu'
// import styled, {createGlobalStyle} from 'styled-components'
import PageTransition from 'gatsby-plugin-page-transitions'
import "../components/sass/layout.scss"




const Layout = ({ children }) => (
  <div classNaMe="Main-Layout">

    <MainMenu />
    <PageTransition >
      <div className="layout">{children}</div>
    </PageTransition>
    
  </div>
)


export default Layout
