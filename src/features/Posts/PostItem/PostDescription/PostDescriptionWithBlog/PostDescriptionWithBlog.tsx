import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import castleImage from '../../../../../assets/images/placeholders/castle.svg'
import { MenuBox } from '../../../../../common/components/MenuBox/MenuBox'
import { useAppDispatch } from '../../../../../common/hooks/useAppDispatch'
import { Paths } from '../../../../../common/routes'
import { Post } from '../../../../../common/types'
import { getDate } from '../../../../../common/utils'
import { PostModal } from '../../../PostModal/PostModal'
import { editPost } from '../../../posts-actions'
import { PostRequestParam } from '../../../posts-api'
import { PostTitle } from '../PostTitle/PostTitle'

import style from './PostDescriptionWithBlog.module.css'

type PropsType = {
  post: Post
}

export const PostDescriptionWithBlog = ({ post }: PropsType) => {
  const dispatch = useAppDispatch()
  const [isShowEditModal, setIsShowEditModal] = useState(false)

  const editPostHandler = (param: Omit<PostRequestParam, 'blogId'>) => {
    dispatch(
      editPost({
        inputModel: {
          ...param,
          blogId: post.blogId,
        },
        id: post.id,
      })
    )
  }

  return (
    <div className={style.box}>
      <div className={style.image}>
        <img src={castleImage} alt="blog picture" />
      </div>
      <div>
        <Link to={`${Paths.Posts}/${post.id}`}>
          <PostTitle className={style.title}>{post.title}</PostTitle>
        </Link>
        <p className={style.description}>{post.shortDescription}</p>
        <time className={style.date} dateTime={post.createdAt}>
          {getDate(post.createdAt)}
        </time>
      </div>
      <MenuBox
        className={style['menu-box']}
        deleteCallback={() => {}}
        editCallback={() => setIsShowEditModal(true)}
      />
      <PostModal
        title="Edit post"
        isOpen={isShowEditModal}
        onClose={() => setIsShowEditModal(false)}
        onSubmit={editPostHandler}
        isEdit={true}
        post={post}
      />
    </div>
  )
}
