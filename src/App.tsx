import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainApp from './MainApp'
import AdminApp from './AdminApp/pages/home'
import Navigation from './Components/Navigation'

function App() {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path="/">
                    <MainApp/>
                </Route>
                <Route path="/admin">
                    <AdminApp/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
