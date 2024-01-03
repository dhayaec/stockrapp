export const APP_URL = ''

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

export const percentages = {
  target: [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.3, 1.5, 1.7, 2, 2.3, 2.5, 2.7, 2.9, 3],
  sl: [0.2, 0.3, 0.4, 0.5, 0.8, 1, 1.5, 1.7, 2],
}
