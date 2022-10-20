// assets
import { IconHierarchy, IconEditCircle, IconWallet } from '@tabler/icons'

// constant
const icons = { IconHierarchy, IconEditCircle, IconWallet }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

export const dashboard = {
    id: 'dashboard' as const,
    title: '',
    type: 'group' as const,
    children: [
        {
            id: 'workflows' as const,
            title: 'Workflows',
            type: 'item' as const,
            url: '/workflows',
            icon: icons.IconHierarchy,
            breadcrumbs: true
        },
        {
            id: 'contracts' as const,
            title: 'Contracts',
            type: 'item' as const,
            url: '/contracts',
            icon: icons.IconEditCircle,
            breadcrumbs: true
        },
        {
            id: 'wallets' as const,
            title: 'Wallets',
            type: 'item' as const,
            url: '/wallets',
            icon: icons.IconWallet,
            breadcrumbs: true
        }
    ]
}

export type Dashboard = typeof dashboard

// ==============================|| MENU ITEMS ||============================== //

export const menuItems = {
    items: [dashboard]
}
