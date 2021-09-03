import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

// @ts-ignore
import { AppSwitcher20 } from '@carbon/icons-react'

import {
    Header,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderMenuItem,
    HeaderName,
    HeaderNavigation,
    HeaderPanel
} from '../Components/Header'
import { Switcher, SwitcherItem } from '../Components/Switcher'

const paths: Record<string, string> = {
    '/': 'post',
    '/post': 'post',
    '/edit': 'edit',
}

const AdminHeader = () => {
    const [panelExpanded, setPanelExpanded] = useState(false)
    let location = useLocation()

    return (
        <>
            <Header aria-label="Sui Photos Header">
                <HeaderName prefix="SUI">Photos</HeaderName>
                <HeaderNavigation aria-label="Navigation">
                    <HeaderMenuItem to={`post`} isCurrentPage={paths[location.pathname] === 'post'}>
                        New Post
                    </HeaderMenuItem>
                    <HeaderMenuItem to={`edit`} isCurrentPage={paths[location.pathname] === 'edit'}>
                        Edit Gallery
                    </HeaderMenuItem>
                </HeaderNavigation>
                <HeaderGlobalBar>
                    <HeaderGlobalAction
                        aria-label="App Switcher"
                        tooltipAlignment="end"
                        onClick={() => setPanelExpanded(!panelExpanded)}
                    >
                        <AppSwitcher20/>
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
                <HeaderPanel aria-label="Header Panel" expanded={panelExpanded}>
                    <Switcher aria-label="Switcher Container">
                        <SwitcherItem aria-label="Log out">Log out</SwitcherItem>
                    </Switcher>
                </HeaderPanel>
            </Header>
        </>
    )
}

export default AdminHeader
