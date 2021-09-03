import React from 'react';
import { Link } from 'react-router-dom'

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

export default Navigation
