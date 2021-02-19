import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AppSubmenu from './AppSubmenu'

class AppMenu extends Component {
  static defaultProps = {
    model: null,
    onMenuItemClick: null,
  }

  static propTypes = {
    model: PropTypes.array,
    onMenuItemClick: PropTypes.func,
  }

  render() {
    return (
      <div className="menu">
        <AppSubmenu
          items={this.props.model}
          className="layout-main-menu"
          onMenuItemClick={this.props.onMenuItemClick}
          root={true}
        />
      </div>
    )
  }
}

export default AppMenu
