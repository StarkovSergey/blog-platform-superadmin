import React, { ReactNode } from 'react'

import style from './PostTitle.module.css'

type PropsType = {
  children: ReactNode
  className?: string
}

export const PostTitle = ({ children, className, ...props }: PropsType) => {
  return (
    <h3 className={`${style.title} ${className ?? ''}`} {...props}>
      {children}
    </h3>
  )
}
