import React, { ReactNode } from 'react'

import { Button } from '../../Button/Button'
import { BasicModal } from '../BasicModal'

import style from './ConfirmModal.module.css'

type PropsType = {
  title: string
  isOpen: boolean
  message: string
  onClose: Function
  callback: Function
}

export const ConfirmModal = ({ title, isOpen, onClose, message, callback }: PropsType) => {
  const confirmButtonHandler = () => {
    callback()
  }

  return (
    <BasicModal title={title} isOpen={isOpen} onClose={onClose}>
      <div className={style.content}>
        <p className={style.message}>{message}</p>
        <div className={style['button-box']}>
          <Button onClick={() => onClose()}>No</Button>

          <Button variant="outlined" onClick={confirmButtonHandler}>
            Yes
          </Button>
        </div>
      </div>
    </BasicModal>
  )
}
