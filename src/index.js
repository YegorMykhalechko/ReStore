import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/App'
import ErrorBoundry from './components/ErrorBoundry'
import BookStoreService from './services/BookStoreService'
import {BookStoreServiceProvider} from './components/BookStoreServiceContext'

import store from './store'

const bookStoreService = new BookStoreService()



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookStoreServiceProvider value={bookStoreService}>
          <Router>
            <App />
          </Router>
        </BookStoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

