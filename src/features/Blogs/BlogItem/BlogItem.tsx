import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import dragonPlaceholder from '../../../assets/images/placeholders/dragon.jpg'
import { MenuBox } from '../../../common/components/MenuBox/MenuBox'
import { ConfirmModal } from '../../../common/components/modals/ConfirmModal/ConfirmModal'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { Paths } from '../../../common/routes'
import { Blog } from '../../../common/types'
import { deleteBlog } from '../blogs-actions'

import style from './BlogItem.module.css'

type PropsType = {
  blog: Blog
}
export const BlogItem = ({ blog }: PropsType) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const deleteButtonHandler = () => {
    setIsDeleteModalOpen(true)
  }

  const deleteBlogHandler = () => {
    dispatch(deleteBlog(blog.id))
  }

  const editBlogHandler = () => {
    navigate(Paths.EditBlog, { state: blog })
  }

  return (
    <>
      <li className={style.box}>
        <MenuBox
          deleteCallback={deleteButtonHandler}
          editCallback={editBlogHandler}
          className={style['menu-box']}
        />
        <Link to={`${Paths.Blogs}/${blog.id}`}>
          <div className={style.image}>
            <img src={dragonPlaceholder} alt="blog image" />
          </div>
        </Link>
        <div>
          <h3 className={style.title}>
            <Link to={`${Paths.Blogs}/${blog.id}`}>{blog.name}</Link>
          </h3>
          <p className={style.description}>{blog.description}</p>
        </div>
      </li>
      <ConfirmModal
        title="Delete a post"
        isOpen={isDeleteModalOpen}
        message="Are you sure you want to delete this post?"
        onClose={() => setIsDeleteModalOpen(false)}
        callback={deleteBlogHandler}
      />
    </>
  )
}
