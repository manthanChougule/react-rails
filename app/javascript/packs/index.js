import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App'

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import  userReducer  from '../reducers/pageReducer' 


const store = createStore( userReducer, composeWithDevTools(applyMiddleware(thunk)) ); //, applyMiddleware(thunk)

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
