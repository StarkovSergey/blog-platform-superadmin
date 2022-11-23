import React, { ReactNode } from 'react'

import { Link } from 'react-router-dom'

import style from './Breadcrumbs.module.css'

type PropsType = {
  breadcrumbs: Breadcrumb[]
}

export type Breadcrumb = { title: string; link?: string }

export const Breadcrumbs = ({ breadcrumbs, ...props }: PropsType) => {
  return (
    <ul className={style.breadcrumbs} {...props}>
      {breadcrumbs.map((breadcrumb, index) => (
        <li key={index}>
          {/* eslint-disable-next-line no-nested-ternary */}
          {index === 0 ? (
            <h1 className={style.title}>
              <Link to={breadcrumb.link!}>{breadcrumb.title}</Link>
            </h1>
          ) : breadcrumb.link ? (
            <Link to={breadcrumb.link} className={style.breadcrumb}>
              {breadcrumb.title}
            </Link>
          ) : (
            breadcrumb.title
          )}
        </li>
      ))}
    </ul>
  )
}
