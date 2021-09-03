import React from 'react'
import { NewPost } from './NewPost'

import { Tile } from '../Components/Tile'

import STYLE from './index.module.scss'
import AdminHeader from './AdminHeader'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

function AdminApp() {
    let { path } = useRouteMatch();

    return (
        <>
            <AdminHeader/>
            <Tile className={STYLE.Admin__panel}>
                <Switch>
                    <Route exact path={`${path}/post`}>
                        <NewPost/>
                    </Route>
                    <Route exact path={`${path}/edit`}>
                        EDIT
                    </Route>
                </Switch>
            </Tile>
        </>
    )
}

export default AdminApp
