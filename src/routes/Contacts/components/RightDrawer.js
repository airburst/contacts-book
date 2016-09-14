import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import { grey800, fullWhite } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import CopyToClipboard from 'react-copy-to-clipboard'
import Snackbar from 'material-ui/Snackbar'
import ContentCopy from 'material-ui/svg-icons/content/content-copy'
import Save from 'material-ui/svg-icons/content/save'
import Delete from 'material-ui/svg-icons/action/delete'
import FontIcon from 'material-ui/FontIcon'
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
    this.state = {
      snackBarOpen: false,
      changedContact: this.props.contact
    }
  }

  handleTouchTap = () => {
    this.setState({ snackBarOpen: true })
  }

  handleRequestClose = () => {
    this.setState({ snackBarOpen: false })
  }

  removeContact = () => {
    this.props.showReOpenUndo(this.props.contact.key)
    Firebase.removeContact(this.props.contact.key)
  }

  handleChange = (field, event) => {
    let update = Object.assign({}, this.state.changedContact)
    update[field] = event.target.value
    this.setState({ changedContact: update })
    // let update = {}  // This version makes per-field changes in realtime but feels slow
    // update[field] = event.target.value
    // Firebase.updateContactByKey(this.props.contact.key, update)
  }

  handleSave = () => {
    this.props.drawerTap()
    Firebase.updateContact(this.state.changedContact)
  }

  render () {
    const { contact, open, drawerTap } = this.props
    const style = { margin: 12 }
    const appBarBg = { backgroundColor: grey800 }

    return (
      <Drawer width={350} openSecondary open={open} containerStyle={{ backgroundColor:grey800 }}>
        <AppBar
          title={contact.fname + ' ' + contact.lname}
          iconElementLeft={<IconButton onTouchTap={drawerTap}><NavigationClose /></IconButton>}
          style={appBarBg}
        />
        <div className={'drawerItem'}>
          <TextField
            floatingLabelText='First name'
            defaultValue={contact.fname}
            onChange={this.handleChange.bind(this, 'fname')}
          />
          <TextField
            floatingLabelText='Surname'
            defaultValue={contact.lname}
            onChange={this.handleChange.bind(this, 'lname')}
          />
          <TextField
            floatingLabelText='Address'
            multiLine={true}
            rows={4}
            rowsMax={4}
            defaultValue={contact.address}
            onChange={this.handleChange.bind(this, 'address')}
          />
          <TextField
            floatingLabelText='Postcode'
            defaultValue={contact.postcode}
            onChange={this.handleChange.bind(this, 'postcode')}
          />
          <TextField
            floatingLabelText='Telephone'
            defaultValue={contact.tel}
            onChange={this.handleChange.bind(this, 'tel')}
          />
          <TextField
            floatingLabelText='Email Address'
            defaultValue={contact.email}
            onChange={this.handleChange.bind(this, 'email')}
          />
        </div>
        <Divider />
        <div className={'buttonContainer'}>
          <CopyToClipboard
            text={contact.address}
            onCopy={() => this.handleTouchTap()}
          >
            <RaisedButton
              icon={<ContentCopy color={fullWhite} />}
              secondary style={style}
            />
          </CopyToClipboard>
          <RaisedButton
            icon={<Save color={fullWhite} />}
            primary style={style}
            onTouchTap={this.handleSave}
          />
          <RaisedButton
            icon={<Delete color={fullWhite} />}
            primary style={style}
            onTouchTap={this.removeContact}
          />
        </div>

        <Snackbar
          open={this.state.snackBarOpen}
          message='Copied Address...'
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
      </Drawer>
    )
  }
}
