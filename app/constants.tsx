import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Laundry',
    path: '/laundry',
    icon: <Icon icon="lucide:shopping-basket" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Orders', path: '/laundry-orders' },
      { title: 'Tracker', path: '/laundry-trackers' },
    ],
  },
  {
    title: 'Transactions',
    path: '/transactions',
    icon: <Icon icon="lucide:newspaper" width="24" height="24" />,
    submenu: false,
    // subMenuItems: [
    //   { title: 'Account', path: '/settings/account' },
    //   { title: 'Privacy', path: '/settings/privacy' },
    // ],
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: <Icon icon="lucide:user" width="24" height="24" />,
    submenu: false,
    // subMenuItems: [
    //   { title: 'Account', path: '/settings/account' },
    //   { title: 'Privacy', path: '/settings/privacy' },
    // ],
  },
  {
    title: 'Inventory',
    path: '/inventory',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: false,
    // subMenuItems: [
    //   { title: 'Account', path: '/settings/account' },
    //   { title: 'Privacy', path: '/settings/privacy' },
    // ],
  },
];