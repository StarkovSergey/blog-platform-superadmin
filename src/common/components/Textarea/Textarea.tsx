import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

import style from './Textarea.module.css'

type DefaultInputPropsType = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

type PropsType = DefaultInputPropsType & {
  label?: string
  className?: string
}

export const Textarea = ({ label, className, ...restProps }: PropsType) => {
  return (
    <label className={`${style.label} ${className}`}>
      {label}
      <textarea className={style.textarea} {...restProps} />
    </label>
  )
}
