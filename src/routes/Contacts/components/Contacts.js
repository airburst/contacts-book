import React, { Component } from 'react'
import { List } from 'material-ui/List'
import ContactItem from './ContactItem'
import * as Firebase from '../../../services/firebase'

class Contacts extends Component {

  componentDidMount () {
    Firebase.connect(this.updateContactsState)
  }

  updateContactsState = (c) => {
    this.props.setContacts(c)
  }

  render () {
    const { contacts } = this.props
    return (
      <List>
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
