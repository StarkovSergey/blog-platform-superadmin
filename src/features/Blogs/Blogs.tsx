import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { Breadcrumbs, Button, Loader } from '../../common/components'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import { Paths } from '../../common/routes'
import { MainSection } from '../../layout/MainSection/MainSection'

import { BlogItem } from './BlogItem/BlogItem'
import { fetchBlogs } from './blogs-actions'
import style from './Blogs.module.css'
import { selectBlogs, selectBlogsStatus } from './selectors'

export const Blogs = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectBlogsStatus)
  const blogs = useAppSelector(selectBlogs)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])

  const addBlogButtonHandler = () => {
    navigate(Paths.NewBlog)
  }

  const breadcrumbs = [
    {
      title: 'Blogs',
      link: Paths.Blogs,
    },
  ]

  return (
    <MainSection>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {status === 'loading' ? (
        <Loader />
      ) : (
        <div className={style['content-box']}>
          <Button onClick={addBlogButtonHandler} className={style['add-button']}>
            Add blog
          </Button>
          <ul className={style.list}>
            {blogs.map(blog => {
              return <BlogItem key={blog.id} blog={blog} />
            })}
          </ul>
        </div>
      )}
    </MainSection>
  )
}
