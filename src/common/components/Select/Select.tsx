import React, { useEffect, useRef, useState } from 'react'

import style from './Select.module.css'

export type SelectOption = {
  label: string
  value: string
}

type PropsType = {
  options: SelectOption[]
  value: SelectOption | undefined
  onChange: (value: SelectOption) => void
  className?: string
}

// TODO: add keyboard accessibility like this https://www.youtube.com/watch?v=bAJlYgeovlg
export const Select = ({ value, onChange, options, className }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false)

  const selectOption = (option: SelectOption) => {
    if (option !== value) onChange(option)
  }

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target !== containerRef.current) return
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen(prev => !prev)
          break
      }
    }

    containerRef.current?.addEventListener('keydown', handler)

    return () => {
      containerRef.current?.removeEventListener('keydown', handler)
    }
  }, [isOpen, options])

  return (
    <div
      ref={containerRef}
      onClick={() => setIsOpen(prev => !prev)}
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      className={`${style.container} ${className || ''}`}
    >
      <span className={style.value}>{value?.label || 'Choose a blog'}</span>

      <ul className={`${style.options} ${isOpen ? style.show : ''}`}>
        {options.map(option => (
          <li
            key={option.value}
            onClick={e => {
              e.stopPropagation()
              selectOption(option)
              setIsOpen(false)
            }}
            className={style.option}
          >
            {option.label}
          </li>
        ))}
      </ul>
      <div className={`${style.caret} ${isOpen ? style['caret--active'] : ''}`}></div>
    </div>
  )
}
