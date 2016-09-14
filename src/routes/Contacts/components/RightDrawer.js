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

  getAddress = () => {
    let address = ''
    if (this.props.contact.line1 !== '') address += this.props.contact.line1.trim() + '\n'
    if (this.props.contact.line2 !== '') address += this.props.contact.line2.trim() + '\n'
    if (this.props.contact.city !== '') address += this.props.contact.city.trim() + '\n'
    if (this.props.contact.county !== '') address += this.props.contact.county.trim() + '\n'
    if (this.props.contact.postcode !== '') address += this.props.contact.postcode.trim() + '\n'
    return address
  }

  render () {
    const { contact, open, drawerTap } = this.props
    const style = { margin: 12 }
    const appBarBg = { backgroundColor: blue500 }

    return (
      <Drawer width={400} openSecondary open={open}>
        <AppBar
          title={contact.fname + ' ' + contact.lname}
          iconElementLeft={<IconButton onTouchTap={drawerTap}><NavigationClose /></IconButton>}
          style={appBarBg}
        />
        <div className={'drawerItem'}>
          <div className={'bold'}>Address</div>
          <div>{contact.line1}</div>
          <div>{contact.line2}</div>
          <div>{contact.city}</div>
          <div>{contact.county}</div>
          <div>{contact.postcode}</div>
        </div>
        <div className={'drawerItem'}>
          <a
            className={'url'}
            href={'mailto:' + contact.email}
            target='_blank'
            rel='noopener noreferrer'
            title='Send email to {contact.fname} {contact.lname}'
          >{contact.email}</a>
        </div>
        <Divider />
        <div className={'buttonContainer'}>
          <CopyToClipboard
            text={this.getAddress()}
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
