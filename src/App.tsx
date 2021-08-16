import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import MainApp from './MainApp'
import AdminApp from './AdminApp'

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <h1>SUIpics</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/admin">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

function App() {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path="/">
                    <MainApp/>
                </Route>
                <Route exact path="/admin">
                    <AdminApp/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
