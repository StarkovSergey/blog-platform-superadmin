import React from 'react'

import { Link } from 'react-router-dom'

import dragon from '../../../assets/images/placeholders/dragon.jpg'
import { Paths } from '../../../common/routes'
import { Post } from '../../../common/types'

import { PostDescriptionWithBlog } from './PostDescription/PostDescriptionWithBlog/PostDescriptionWithBlog'
import style from './PostItem.module.css'

type PropsType = {
  post: Post
}

export const PostItem = ({ post }: PropsType) => {
  return (
    <li>
      <Link to={`${Paths.Posts}/${post.id}`}>
        <div className={style.image}>
          <img src={dragon} alt="post cover" />
        </div>
      </Link>
      <PostDescriptionWithBlog
        title={post.title}
        description={post.shortDescription}
        date={post.createdAt}
        id={post.id}
      />
    </li>
  )
}
