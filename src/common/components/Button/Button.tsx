import React, { ReactNode } from 'react'

import style from './Button.module.css'

type PropsType = {
  children: ReactNode
}

export const Button = ({ children }: PropsType) => {
  return <button className={style.button}>{children}</button>
}
