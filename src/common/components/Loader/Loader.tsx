import React, { DetailedHTMLProps } from 'react'

import { ReactComponent as LoaderSVG } from '../../../assets/loaders/double-rings-loader.svg'

import style from './Loader.module.css'

export const Loader = ({ className, ...props }: DetailedHTMLProps<any, HTMLDivElement>) => {
  return <LoaderSVG className={`${style.loader} ${className}`} {...props} />
}
