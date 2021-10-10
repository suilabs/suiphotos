import React from 'react'

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
} from '../../Components/Header'
import { Switcher, SwitcherItem } from '../../Components/Switcher'

interface Props {
    currentPage: string
    onActionClick: () => void
    panelExpanded: boolean
}

const AdminHeader: React.FC<Props> = ({currentPage, onActionClick, panelExpanded}) => {
    return (
        <>
            <Header aria-label="Sui Photos Header">
                <HeaderName prefix="SUI">Photos</HeaderName>
                <HeaderNavigation aria-label="Navigation">
                    <HeaderMenuItem to={`/admin/post`} isCurrentPage={currentPage === 'post'}>
                        New Post
                    </HeaderMenuItem>
                    <HeaderMenuItem to={`/admin/edit`} isCurrentPage={currentPage === 'edit'}>
                        Edit Gallery
                    </HeaderMenuItem>
                </HeaderNavigation>
                <HeaderGlobalBar>
                    <HeaderGlobalAction
                        aria-label="App Switcher"
                        tooltipAlignment="end"
                        onClick={onActionClick}
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
