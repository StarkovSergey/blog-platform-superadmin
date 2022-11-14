import React from 'react'

import { Link } from 'react-router-dom'

import castleImage from '../../../../../assets/images/placeholders/castle.svg'
import { Paths } from '../../../../../common/routes'
import { getDate } from '../../../../../common/utils'
import { PostTitle } from '../PostTitle/PostTitle'

import style from './PostDescriptionWithBlog.module.css'

type PropsType = {
  title: string
  description: string
  date: string
  id: string
}

export const PostDescriptionWithBlog = ({ id, title, description, date }: PropsType) => {
  return (
    <div className={style.box}>
      <div className={style.image}>
        <img src={castleImage} alt="blog picture" />
      </div>
      <div>
        <Link to={`${Paths.Posts}/${id}`}>
          <PostTitle className={style.title}>{title}</PostTitle>
        </Link>
        <p className={style.description}>{description}</p>
        <time className={style.date} dateTime={date}>
          {getDate(date)}
        </time>
      </div>
    </div>
  )
}
