import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import ContactsRoute from './Contacts'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute: ContactsRoute(store)
  // childRoutes : [
  //   CounterRoute(store),
  //   ContactsRoute(store)
  // ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }
*/

export default createRoutes
