import React, { ReactNode } from 'react'
import 'carbon-components/scss/components/ui-shell/_header.scss'
import 'carbon-components/scss/components/ui-shell/_header-panel.scss'

import { HeaderMenuItem as CarbonHeaderMenuItem, HeaderMenuItemProps } from 'carbon-components-react'
import { Link } from 'react-router-dom'

export {
    Header,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderName,
    HeaderNavigation, 
    HeaderPanel,
} from 'carbon-components-react'

interface MyProps {
    to?: string
    href?: string
    isCurrentPage: boolean
    children: ReactNode | Array<ReactNode> | string
}

export const HeaderMenuItem: React.FC<MyProps & HeaderMenuItemProps> = React.forwardRef((
    props,
    ref
) => {
    let element: ReactNode | string = Link 
    if (props.href) {
        element = 'a'
    }
    return (
        // @ts-ignore
        <CarbonHeaderMenuItem {...props} element={element} ref={ref} >{props.children}</CarbonHeaderMenuItem>
    );
});

