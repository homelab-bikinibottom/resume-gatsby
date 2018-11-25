import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers';

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
  reducers,
  createStoreWithMiddleware
);

export default store;