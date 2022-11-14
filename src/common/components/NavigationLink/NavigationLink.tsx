import React, { ReactNode } from 'react'

import { Link, useMatch } from 'react-router-dom'

import { ReactComponent as BlogsIcon } from '../../../assets/icons/blogs-icon.svg'
import { ReactComponent as PostsIcon } from '../../../assets/icons/posts-icon.svg'
import { Paths } from '../../routes'

import style from './NavigationLink.module.css'

type PropsType = {
  children: ReactNode
  to: string
}

export const NavigationLink = ({ children, to, ...props }: PropsType) => {
  const match = useMatch({
    path: to,
    end: false,
  })

  let icon

  switch (to) {
    case Paths.Blogs:
      icon = <BlogsIcon className={style['svg-icon']} />
      break
    case Paths.Posts:
      icon = <PostsIcon className={style['svg-icon']} />
      break
    default:
      icon = null
  }

  return (
    <Link to={to} {...props} className={`${style.link} ${match && style['link--active']}`}>
      {icon}
      {children}
    </Link>
  )
}
