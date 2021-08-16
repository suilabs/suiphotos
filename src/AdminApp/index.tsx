import React from 'react'
import { NewPost } from './NewPost'

import STYLE from './index.module.scss'

function AdminApp() {
    return (<>
        <div className={STYLE.Admin__panel}>
            <div>Upload your images</div>
            <NewPost />
        </div>
    </>)
}

export default AdminApp;
