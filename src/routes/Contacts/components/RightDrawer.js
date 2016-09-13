import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import { blue500 } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import CopyToClipboard from 'react-copy-to-clipboard'
import Snackbar from 'material-ui/Snackbar'
import * as Firebase from '../../../services/firebase'
import './RightDrawer.scss'

export default class RightDrawer extends Component {

  static propTypes = {
    contact: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    drawerTap: PropTypes.func.isRequired,
    showReOpenUndo: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { snackBarOpen: false }
  }

  handleTouchTap = () => {
    this.setState({ snackBarOpen: true })
  }

  handleRequestClose = () => {
    this.setState({ snackBarOpen: false })
  }

  closecontact = () => {
    this.props.showReOpenUndo(this.props.contact.key)
    Firebase.removeContact(this.props.contact.key)
  }

  render () {
    const { contact, open, drawerTap } = this.props
    const style = { margin: 12 }
    const appBarBg = { backgroundColor: blue500 }

    return (
      <Drawer width={400} openSecondary open={open}>
        <AppBar
          title={<span style={'title'}>{contact.fname} {contact.lname}</span>}
          iconElementLeft={<IconButton onTouchTap={drawerTap}><NavigationClose /></IconButton>}
          style={appBarBg}
        />
        <div>
          <div className={'list'}>{contact.feedback}</div>
          <div className={'list'}>
            <a
              className={'url'}
              href={contact.url}
              target='_blank'
              rel='noopener noreferrer'
              title='Send email to {contact.fname} {contact.lname}'
            >{contact.url}</a>
          </div>
          <div className={'list'}>{contact.browser}</div>
          <div className={'list'}>{contact.viewport}</div>
          <div className={'list'}>{this.formatDate(contact.dateRaised) }</div>
        </div>
        <Divider />
        <div className={'buttonContainer'}>
          <CopyToClipboard
            text={contact.feedback}
            onCopy={() => this.handleTouchTap()}
          >
            <RaisedButton label='Copy to clipboard' primary style={style} />
          </CopyToClipboard>
          <RaisedButton
            label='Close contact'
            secondary style={style}
            onTouchTap={this.closecontact}
          />
        </div>

        <Snackbar
          open={this.state.snackBarOpen}
          message='Copied...'
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
      </Drawer>
    )
  }

}
