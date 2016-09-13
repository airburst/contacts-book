import { injectReducer } from '../../store/reducers'

export default (store) => ({
  // path : 'contacts',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define dependencies for bundling   */
      const Contacts = require('./containers/ContactsContainer').default
      const contactsReducer = require('./modules/contacts').default
      const settingsReducer = require('./modules/settings').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'contacts', reducer: contactsReducer })
      injectReducer(store, { key: 'settings', reducer: settingsReducer })

      /*  Return getComponent   */
      cb(null, Contacts)

    /* Webpack named bundle   */
    }, 'contacts')
  }
})
