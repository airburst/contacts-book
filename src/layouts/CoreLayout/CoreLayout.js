import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import theme from './materialTheme'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <div role='main' id='main'>

      <AppBar
        title='Contact Book'
        showMenuIconButton={false}
      />

      <Paper zDepth={0}>
        {children}
      </Paper>
    </div>
  </MuiThemeProvider>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
