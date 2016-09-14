import React, { Component, PropTypes } from 'react'
import Divider from 'material-ui/Divider'
import { ListItem } from 'material-ui/List'
import RightDrawer from './RightDrawer'
import './ContactItem.scss'

export default class ContactItem extends Component {

  static propTypes = {
    contact: PropTypes.object.isRequired,
    showReOpenUndo : PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  render () {
    const { contact } = this.props

    return (
      <div>
        <ListItem
          key={contact.key}
          onTouchTap={this.handleToggle}
        >
          {contact.fname} {contact.lname}
        </ListItem>
        <Divider />
        <RightDrawer
          contact={contact}
          open={this.state.open}
          drawerTap={this.handleToggle}
          showReOpenUndo={this.props.showReOpenUndo}
        />
      </div>
    )
  }

}
