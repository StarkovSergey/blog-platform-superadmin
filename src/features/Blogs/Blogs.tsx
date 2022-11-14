import React, { useEffect } from 'react'

import { Breadcrumbs } from '../../common/components/Breadcrumbs/Breadcrumbs'
import { Loader } from '../../common/components/Loader/Loader'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../common/hooks/useAppSelector'
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

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])

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
        <ul className={style.list}>
          {blogs.map(blog => {
            return <BlogItem key={blog.id} blog={blog} />
          })}
        </ul>
      )}
    </MainSection>
  )
}
