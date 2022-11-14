import React from 'react'

import { Link } from 'react-router-dom'

import style from './Header.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <Link to="/">
          <p className={style.title}>
            Blogger Platform <span style={{ fontSize: '12px' }}>Superadmin</span>
          </p>
        </Link>
      </div>
    </header>
  )
}
