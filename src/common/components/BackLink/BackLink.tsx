import React from 'react'

import { NavLink } from 'react-router-dom'

import { ReactComponent as Arrow } from './../../../assets/icons/arrow-back.svg'
import style from './BackLink.module.css'

type PropsType = {
  to: string
  linkText: string
  className?: string
}

export const BackLink = ({ linkText, to, className }: PropsType) => {
  return (
    <NavLink className={`${style['back-link']} ${className ?? ''}`} to={to}>
      <Arrow />
      {linkText}
    </NavLink>
  )
}
