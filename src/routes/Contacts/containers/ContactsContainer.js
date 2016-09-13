import { connect } from 'react-redux'
import { setContacts } from '../modules/contacts'
import Contacts from '../components/Contacts'

const mapDispatchToProps = {
  setContacts : setContacts
}

const mapStateToProps = (state) => ({
  contacts : state.contacts
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const contacts = (state) => state.contacts
    const tripleCount = createSelector(contacts, (count) => count * 3)
    const mapStateToProps = (state) => ({
      contacts: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
