import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers';

const createStoreWithMiddleware  = compose(
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
  reducers,
  createStoreWithMiddleware
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('reducers', () => {
    const nextRootReducer = require('reducers').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store;