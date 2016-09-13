import { connect } from 'react-redux'
import { setContacts } from '../modules/contacts'
import {
  setFilter,
  showReOpenUndo,
  hideReOpenUndo
} from '../modules/settings'
import Contacts from '../components/Contacts'

const mapDispatchToProps = {
  setContacts : setContacts,
  setFilter: setFilter,
  showReOpenUndo: showReOpenUndo,
  hideReOpenUndo: hideReOpenUndo
}

const mapStateToProps = (state) => ({
  contacts : state.contacts,
  settings : state.settings
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
