import React, { Component } from 'react'
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
      <div style={{ margin: '0 auto' }} >
        <h2>Contacts: {contacts.length}</h2>

        {contacts.map(c => { return (<div key={c.key}>{c.firstName} {c.lastName}</div>) }) }

        <button className='btn btn-default'>
          Copy Address
        </button>
      </div>
    )
  }
}

Contacts.propTypes = {
  contacts     : React.PropTypes.array,
  setContacts  : React.PropTypes.func.isRequired
}

export default Contacts

// {props.contacts.map(c => { return <ContactItem key={c.key} item={c} /> }) }
