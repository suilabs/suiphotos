import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import AdminHeader from '../leaves/AdminHeader'

const paths: Record<string, string> = {
    '/admin': 'post',
    '/admin/post': 'post',
    '/admin/edit': 'edit',
}

const HeaderContainer: React.FC = () => {
    const [panelExpanded, setPanelExpanded] = useState(false)
    let location = useLocation()
    
    const onActionClicked = () => setPanelExpanded(!panelExpanded)
    
    return <AdminHeader 
        onActionClick={onActionClicked} 
        currentPage={paths[location.pathname]} 
        panelExpanded={panelExpanded} 
    />
}

export default HeaderContainer
