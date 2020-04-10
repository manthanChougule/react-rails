import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { pageReducer } from '../reducers/pageReducer'

const store = createStore(pageReducer);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter >,
    document.body.appendChild(document.createElement('div')),
  )
})
