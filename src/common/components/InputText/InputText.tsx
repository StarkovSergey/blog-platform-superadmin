import React, {
  ChangeEvent,
  KeyboardEvent,
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from 'react'

import style from './InputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type PropsType = DefaultInputPropsType & {
  label?: string
  onChangeText?: (value: string) => void
  onEnter?: () => void
}

export const InputText = forwardRef<HTMLInputElement, PropsType>(
  ({ label, onChangeText, onEnter, onKeyDown, className, ...props }, ref) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeText && onChangeText(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown && onKeyDown(e)

      if (onEnter && e.key === 'Enter') {
        onEnter()
      }
    }

    return (
      <div>
        <label className={style.label}>
          {label}
          <input
            className={`${style.input} ${className}`}
            type="text"
            ref={ref}
            onChange={onChangeInputHandler}
            onKeyDown={onKeyDownHandler}
            autoComplete="off"
            {...props}
          />
        </label>
      </div>
    )
  }
)
