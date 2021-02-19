import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ParallaxProvider } from 'react-scroll-parallax'

import App from './App'
import reportWebVitals from './reportWebVitals'
import configureStore from './reducers'

import './index.css'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#00002e',
    },
  },
})

let initialState = {}

// rehydrate initialState for JS app
if (window.__INITIAL_STATE__) {
  initialState = window.__INITIAL_STATE__

  // Transform into Immutable.js collections,
  // but leave top level keys untouched for Redux
  Object.keys(initialState).forEach((key) => {
    initialState[key] = fromJS(initialState[key])
  })
}

const store = configureStore(initialState)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ParallaxProvider>
          <App />
        </ParallaxProvider>
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
