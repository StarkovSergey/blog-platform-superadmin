import React, { ReactNode } from 'react'

import style from './BlogName.module.css'

type PropsType = {
  children: ReactNode
  className?: string
}

export const BlogName = ({ children, className, ...props }: PropsType) => {
  return (
    <h3 className={`${style.title} ${className}`} {...props}>
      {children}
    </h3>
  )
}
