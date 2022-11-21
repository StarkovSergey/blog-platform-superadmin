import React from 'react'

import dragonImage from '../../../assets/images/placeholders/dragon.jpg'
import { Blog } from '../../../common/types'
import { getDate } from '../../../common/utils'

import style from './BlogDescription.module.css'

type PropsType = {
  blog: Blog
}

export const BlogDescription = ({ blog }: PropsType) => {
  return (
    <div className={style.description}>
      <div className={style.image}>
        <img src={dragonImage} alt="blog image" />
      </div>
      <div>
        <h2 className={`section-title ${style.title}`}>{blog.name}</h2>
        <p className={style.date}>
          Blog creation date:&nbsp;
          <time dateTime={blog.createdAt}>{getDate(blog.createdAt)}</time>
        </p>
        <p className={style.text}>
          <b>{blog.description}</b>
        </p>
        <button>Show more</button>
      </div>
    </div>
  )
}
