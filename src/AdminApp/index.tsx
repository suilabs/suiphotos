import React from 'react'
import { NewPost } from './NewPost'

import { Tile } from '../Components/Tile'

import STYLE from './index.module.scss'
import AdminHeader from './AdminHeader'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

function AdminApp() {
    let { path } = useRouteMatch();

    console.log(`${path}/post`)
    return (
        <>
            <AdminHeader/>
            <Tile className={STYLE.Admin__panel}>
                <Switch>
                    <Route exact path={`/admin/post`}>
                        <NewPost/>
                    </Route>
                    <Route exact path={`/admin/edit`}>
                        EDIT
                    </Route>
                </Switch>
            </Tile>
        </>
    )
}

export default AdminApp
