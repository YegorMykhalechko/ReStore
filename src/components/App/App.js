import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { HomePage, CardPage } from '../Pages'
import Header from '../Header'

import './App.css'

const App = () => {
    return (
        <main role="main" className="container">
            <Header />
            <Switch>
                <Route
                    path='/'
                    component={HomePage}
                    exact
                />
                <Route
                    path='/card'
                    component={CardPage}
                />
            </Switch>
        </main>
    )
}

export default App