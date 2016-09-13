import React, { Component } from 'react'
import { List } from 'material-ui/List'
import ContactItem from './ContactItem'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import * as Firebase from '../../../services/firebase'
import './Contacts.scss'

class Contacts extends Component {

  static propTypes = {
    contacts     : React.PropTypes.array,
    setContacts  : React.PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { filterValue: '' }
  }

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
    this.setState({ filterValue: event.target.value })
  }

  filterContacts = (list, filter) => {
    if (filter === '') { return list }
    return list.filter(l => (l.fname + l.lname).toLowerCase().indexOf(filter.toLowerCase()) > -1)
  }

  render () {
    const { contacts } = this.props
    const visibleContacts = this.filterContacts(contacts, this.state.filterValue)
    return (
      <div className='container'>
        <Paper zDepth={2}>
          <List className='list'>
            <div className='search'>
              <TextField
                hintText='Search'
                onChange={this.handleOnChange}
              />
            </div>
            <Divider />
            {visibleContacts.map(c => { return <ContactItem key={c.key} item={c} /> })}
          </List>
        </Paper>
      </div>
    )
  }
}

export default Contacts
