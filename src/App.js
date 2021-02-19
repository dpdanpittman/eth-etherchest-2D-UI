import React from 'react'
import { ScrollPanel } from 'primereact/components/scrollpanel/ScrollPanel'
import classNames from 'classnames'
import { Router } from '@reach/router'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AppTopbar from './components/navigation/AppTopbar'
import AppMenu from './components/navigation/AppMenu'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import VerifyPage from './pages/VerifyPage'

import './styles/App.scss'

export const StateContext = React.createContext()

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      layoutMode: 'static',
      layoutColorMode: 'dark',
      staticMenuInactive: true,
      overlayMenuActive: true,
      mobileMenuActive: false,
      localState: {
        username: '',
        login: (username) =>
          this.setState((state) => ({
            localState: {
              ...state.localState,
              username,
            },
          })),
        loginType: undefined,
      },
    }

    this.onWrapperClick = this.onWrapperClick.bind(this)
    this.onToggleMenu = this.onToggleMenu.bind(this)
    this.onSidebarClick = this.onSidebarClick.bind(this)
    this.onMenuItemClick = this.onMenuItemClick.bind(this)
    this.createMenu()
  }

  onWrapperClick(e) {
    e.preventDefault()
    if (!this.menuClick) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false,
      })
    }

    this.menuClick = false
  }

  onToggleMenu(e) {
    e.preventDefault()
    this.menuClick = true

    if (this.isDesktop()) {
      if (this.state.layoutMode === 'overlay') {
        this.setState({
          overlayMenuActive: !this.state.overlayMenuActive,
        })
      } else if (this.state.layoutMode === 'static') {
        this.setState({
          staticMenuInactive: !this.state.staticMenuInactive,
        })
      }
    } else {
      const mobileMenuActive = this.state.mobileMenuActive
      this.setState({
        mobileMenuActive: !mobileMenuActive,
      })
    }
  }

  onSidebarClick(e) {
    e.preventDefault()
    this.menuClick = true
    setTimeout(() => {
      this.layoutMenuScroller.moveBar()
    }, 500)
  }

  onMenuItemClick(e) {
    e.preventDefault()
    if (!event.item.items) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false,
      })
    }
  }

  createMenu() {
    this.menu = [
      {
        label: 'Ecosystem',
        items: [
          {
            label: 'Trending Posts',
            to: '/trending',
          },
        ],
      },
      {
        label: 'Community',
        items: [
          {
            label: 'Hive Blog',
            command: () => {
              /*window.location = "https://steem-engine.com/?p=market&t=KFQ";*/
              window.open('https://peakd.com/@etherchest', '_blank')
            },
          },
          {
            label: 'Chat on Discord',
            icon: { ExitToAppIcon },
            command: () => {
              /*window.location = "https://steem-engine.com/?p=market&t=KFQ";*/
              window.open('https://discord.gg/eMQpEKS', '_blank')
            },
          },
        ],
      },
    ]
  }

  addClass(element, className) {
    if (element.classList) element.classList.add(className)
    else element.className += ' ' + className
  }

  removeClass(element, className) {
    if (element.classList) element.classList.remove(className)
    else
      element.className = element.className.replace(
        new RegExp(
          '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
          'gi',
        ),
        ' ',
      )
  }

  isDesktop() {
    return window.innerWidth > 1024
  }

  componentDidUpdate() {
    if (this.state.mobileMenuActive)
      this.addClass(document.body, 'body-overflow-hidden')
    else this.removeClass(document.body, 'body-overflow-hidden')
  }

  render() {
    let wrapperClass = classNames('layout-wrapper', {
      'layout-overlay': this.state.layoutMode === 'overlay',
      'layout-static': this.state.layoutMode === 'static',
      'layout-static-sidebar-inactive':
        this.state.staticMenuInactive && this.state.layoutMode === 'static',
      'layout-overlay-sidebar-active':
        this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
      'layout-mobile-sidebar-active': this.state.mobileMenuActive,
    })
    let sidebarClassName = classNames('layout-sidebar', {
      'layout-sidebar-dark': this.state.layoutColorMode === 'dark',
    })

    return (
      <div className={wrapperClass} onClick={this.onWrapperClick}>
        <AppTopbar onToggleMenu={this.onToggleMenu} />
        <div
          ref={(el) => (this.sidebar = el)}
          className={sidebarClassName}
          onClick={this.onSidebarClick}
        >
          <ScrollPanel
            ref={(el) => (this.layoutMenuScroller = el)}
            style={{ height: '120%' }}
          >
            <div className="layout-sidebar-scroll-content">
              <div className="layout-logo">
                <a href="/">
                  <img alt="Logo" src="https://i.imgur.com/TJP9RZ0.png" />
                </a>
                <br />
                <br />
              </div>
              <AppMenu
                model={this.menu}
                onMenuItemClick={this.onMenuItemClick}
              />
            </div>
          </ScrollPanel>
        </div>
        <div className="layout-main">
          <Router>
            <HomePage path="/" />
            <LoginPage path="/login" />
            <SignupPage path="/signup" />
            <VerifyPage path="/verify/:code" />
          </Router>
        </div>
        <div className="layout-mask"></div>
      </div>
    )
  }
}

export default App
