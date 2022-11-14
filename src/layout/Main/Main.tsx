import React from 'react'

import { Outlet } from 'react-router-dom'

import { Navigation } from '../Navigation'

import style from './Main.module.css'

export const Main = () => {
  return (
    <main>
      <div className="container">
        <div className={style.grid}>
          <Navigation />
          <Outlet />
        </div>
      </div>
    </main>
  )
}
