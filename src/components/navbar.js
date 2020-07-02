import React, { Component, Fragment } from 'react'
import OffCanvas from 'react-aria-offcanvas'
import MainMenu from '../components/MainMenu'
import "../components/sass/navbar.scss"

const Navigation = () => (
 <MainMenu />
)

export default class navbar extends Component {
  state = {
    isOpen: false,
  }

  open = () => {
    this.setState({ isOpen: true })
  }

  close = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <Fragment>
          <div className="Nav-header-div">
          <button
          id="menu-button"
          aria-label="Menu"
          aria-controls="menu"
          aria-expanded={this.state.isOpen}
          onClick={this.open}
        >
          MENU
        </button>
        <OffCanvas
          className="OffCanvas-open"
          isOpen={this.state.isOpen}
          onClose={this.close}
          labelledby="menu-button"
        >
          <button 
          onClick={this.close}
          id="close-button"
          >
              CLOSE
            </button>
          <Navigation />
        </OffCanvas>
          </div>
      </Fragment>
    )
  }
}