import React, { Component } from 'react'
import { List } from 'material-ui/List'
import ContactItem from './ContactItem'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import * as Firebase from '../../../services/firebase'
import './Contacts.scss'

class Contacts extends Component {

  componentDidMount () {
    Firebase.connect(this.updateContactsState)
  }

  updateContactsState = (c) => {
    this.props.setContacts(c)
  }

  contactNames = () => {
    return this.props.contacts.map(c => c.fname + ' ' + c.lname)
  }

  handleOnChange = (event) => {
    console.log(event.target.value)
  }

  render () {
    const { contacts } = this.props
    return (
      <List className='list'>
        <div className='search'>
          <TextField
            hintText='Hint Text'
            onChange={this.handleOnChange}
          />
        </div>
        <Divider />
        {contacts.map(c => { return <ContactItem key={c.key} item={c} /> })}
      </List>
    )
  }
}

Contacts.propTypes = {
  contacts     : React.PropTypes.array,
  setContacts  : React.PropTypes.func.isRequired
}

export default Contacts
