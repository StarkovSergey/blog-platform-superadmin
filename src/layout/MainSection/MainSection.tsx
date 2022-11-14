import React, { ReactNode } from 'react'

import { Breadcrumbs } from '../../common/components/Breadcrumbs/Breadcrumbs'

import style from './MainSection.module.css'

interface PropsType {
  children?: ReactNode
}

export const MainSection = ({ children, ...props }: PropsType) => {
  return <section className={style.section}>{children}</section>
}
