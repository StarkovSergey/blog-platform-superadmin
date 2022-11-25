import React, { ReactNode } from 'react'

import { useKeyDown } from '../../hooks/useKeyDown'

import style from './BasicModal.module.css'

type PropsType = {
  title: string
  children: ReactNode
  isOpen: boolean
  onClose: Function
}

export const BasicModal = ({ title, children, isOpen, onClose }: PropsType) => {
  useKeyDown(onClose, 'Escape')

  if (!isOpen) {
    return null
  }

  const closeModal = () => {
    onClose()
  }

  return (
    <div className={style.shadow} onClick={closeModal}>
      <div className={style.box} onClick={e => e.stopPropagation()}>
        <header className={style.header}>
          <h2 className={style.title}>{title}</h2>
          <button
            aria-label="close modal"
            onClick={closeModal}
            className={style['cross-button']}
          ></button>
        </header>
        {children}
      </div>
    </div>
  )
}
