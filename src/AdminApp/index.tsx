import React from 'react'
import { NewPost } from './NewPost'

import STYLE from './index.module.scss'
import { Tile } from 'carbon-components-react'

import 'carbon-components/scss/components/tile/_tile.scss'

function AdminApp() {
    return (<>
        <Tile className={STYLE.Admin__panel}>
            <NewPost />
        </Tile>
    </>)
}

export default AdminApp;
