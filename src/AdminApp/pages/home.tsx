import React from 'react'
import NewPostContainer from '../containers/NewPost'

import { Tile } from '../../Components/Tile'

import STYLE from './home.module.scss'
import HeaderContainer from '../containers/HeaderContainer'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

function AdminApp() {
    let { path } = useRouteMatch();

    console.log(`${path}/post`)
    return (
        <>
            <HeaderContainer/>
            <Tile className={STYLE.Admin__panel}>
                <Switch>
                    <Route exact path={['/admin', `/admin/post`]}>
                        <NewPostContainer/>
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
