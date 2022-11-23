import React, { useRef, useState } from 'react'

import { useOnClickOutside } from '../../hooks/useOnClickOutside'

import { ReactComponent as DeleteIcon } from './../../../assets/icons/delete-icon.svg'
import { ReactComponent as EditIcon } from './../../../assets/icons/edit-icon.svg'
import style from './MenuBox.module.css'

type PropsType = {
  className: string
  deleteCallback: Function
  editCallback: Function
}

export const MenuBox = ({ className, deleteCallback, editCallback }: PropsType) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuButtonHandler = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const deleteButtonClickHandler = () => {
    deleteCallback()
    setIsMenuOpen(false)
  }

  const editButtonClickHandler = () => {
    editCallback()
    setIsMenuOpen(false)
  }

  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => setIsMenuOpen(false))

  return (
    <div className={`${className} ${style.box}`}>
      <button
        className={style['menu-button']}
        onClick={menuButtonHandler}
        aria-label="toggle menu"
      ></button>
      {isMenuOpen && (
        <div className={style.menu} ref={ref}>
          <button onClick={deleteButtonClickHandler} className={style.button}>
            <DeleteIcon /> Delete
          </button>
          <button onClick={editButtonClickHandler} className={style.button}>
            <EditIcon />
            Edit
          </button>
        </div>
      )}
    </div>
  )
}
