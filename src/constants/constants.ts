export type MenuItemType = {
  id: number
  name: string
  href: string
}

export const menuItems: Array<MenuItemType> = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'About us',
    href: '/about',
  },
  {
    id: 3,
    name: 'Target / Stop Loss',
    href: '/tsl',
  },
]
