import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

import style from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type PropsType = DefaultButtonPropsType & {
  children: ReactNode
  className?: string
  variant?: 'outlined' | ''
}

export const Button = ({ children, className, variant = '', ...restProps }: PropsType) => {
  return (
    <button className={`${style.button} ${className || ''} ${style[variant]}`} {...restProps}>
      {children}
    </button>
  )
}
