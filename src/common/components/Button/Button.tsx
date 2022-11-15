import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

import style from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type PropsType = DefaultButtonPropsType & {
  children: ReactNode
  className: string
}

export const Button = ({ children, className, ...restProps }: PropsType) => {
  return (
    <button className={`${style.button} ${className}`} {...restProps}>
      {children}
    </button>
  )
}
