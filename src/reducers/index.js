import { applyMiddleware, compose, createStore } from 'redux'

import rootReducer from './rootReducers'

// Redux DevTools Extension for Chrome and Firefox
const reduxDevTool = () => {
  return typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
}

export default function configureStore(initialState) {
  const middleware = applyMiddleware()

  const composedStoreEnhancer = compose(middleware, reduxDevTool())

  const store = composedStoreEnhancer(createStore)(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./rootReducers', () => {
      store.replaceReducer(require('./rootReducers'))
    })
  }

  return store
}
