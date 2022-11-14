import React from 'react'

import { NavigationLink } from '../../common/components/NavigationLink/NavigationLink'
import { Paths } from '../../common/routes'

import style from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={style.nav}>
      <ul className={style['nav-list']}>
        <li>
          <NavigationLink to={Paths.Blogs}>Blogs</NavigationLink>
        </li>
        <li>
          <NavigationLink to={Paths.Posts}>Posts</NavigationLink>
        </li>
      </ul>
    </nav>
  )
}
